// Importa as notícias de src/content/noticias para o EmDash.
//
// Uso: com o site rodando (npm run dev) e a configuração inicial do painel
// concluída, execute em outro terminal:
//
//   npm run importar-noticias
//
// Para cada notícia, o script envia a imagem de capa e as imagens do texto
// para a biblioteca de mídia, cria a versão em português, liga a versão em
// inglês como tradução, atribui a categoria e publica. Notícias que já existem
// no EmDash (mesmo slug e idioma) são ignoradas, então pode rodar de novo.
//
// Variáveis opcionais:
//   EMDASH_URL    endereço do site (padrão: http://localhost:4321)
//   EMDASH_TOKEN  token de API; sem ele, usa o acesso de desenvolvimento do
//                 EmDash, que só funciona em localhost com `npm run dev`

import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { EmDashClient, markdownToPortableText } from "emdash/client";
import yaml from "js-yaml";
import slugify from "slugify";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const NOTICIAS_DIR = path.join(ROOT, "src/content/noticias");
const PUBLIC_DIR = path.join(ROOT, "public");
const COLLECTION = "noticias";
const TAXONOMY = "tag";

const baseUrl = process.env.EMDASH_URL ?? "http://localhost:4321";
const token = process.env.EMDASH_TOKEN;
const client = new EmDashClient({ baseUrl, token, devBypass: !token });

// Categorias do site antigo (texto livre) → termos do EmDash.
const CATEGORIAS = [
  {
    pt: { slug: "evento", label: "Evento" },
    en: { slug: "event", label: "Event" },
    antigos: ["evento", "eventos", "event"],
  },
  {
    pt: { slug: "experiencias-internacionais", label: "Experiências Internacionais" },
    en: { slug: "international-experience", label: "International Experience" },
    antigos: ["experiências internacionais", "international experience"],
  },
  {
    pt: { slug: "lancamento", label: "Lançamento" },
    en: { slug: "launch", label: "Launch" },
    antigos: ["lançamento", "launch"],
  },
];

// Mesmo slug que src/content.config.ts gerava, para manter as URLs.
function criarSlug(date, num) {
  return slugify(`${date}-${num}`, { lower: true, strict: true });
}

async function lerNoticias() {
  const noticias = [];
  for (const lang of ["pt", "en"]) {
    const dir = path.join(NOTICIAS_DIR, lang);
    for (const arquivo of (await readdir(dir)).sort()) {
      if (!/\.mdx?$/.test(arquivo)) continue;
      const texto = await readFile(path.join(dir, arquivo), "utf8");
      const match = texto.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
      if (!match) throw new Error(`Front matter não encontrado em ${lang}/${arquivo}`);
      const dados = yaml.load(match[1]);
      noticias.push({
        arquivo: `${lang}/${arquivo}`,
        lang: dados.lang ?? lang,
        slug: criarSlug(dados.date, dados.num),
        dados,
        corpo: match[2],
      });
    }
  }
  return noticias;
}

// ---------------------------------------------------------------------------
// Mídia

const midiasEnviadas = new Map();

const MIME = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
  ".webp": "image/webp",
};

// O EmDash não aceita SVG na biblioteca de mídia. Para um .svg, usa a versão
// .jpeg/.jpg/.png com o mesmo nome, se existir.
async function arquivoRaster(arquivo) {
  if (path.extname(arquivo).toLowerCase() !== ".svg") return arquivo;
  const base = arquivo.slice(0, -4);
  for (const ext of [".jpeg", ".jpg", ".png"]) {
    try {
      await access(base + ext);
      return base + ext;
    } catch {}
  }
  throw new Error(`O EmDash não aceita SVG e não há versão .jpeg/.png de ${arquivo}`);
}

async function enviarImagem(caminhoPublico, alt) {
  if (midiasEnviadas.has(caminhoPublico)) return midiasEnviadas.get(caminhoPublico);
  const arquivo = await arquivoRaster(path.join(PUBLIC_DIR, decodeURI(caminhoPublico)));
  const bytes = await readFile(arquivo);
  const nome = path.basename(arquivo);
  const contentType = MIME[path.extname(nome).toLowerCase()];
  const item = await client.mediaUpload(new Uint8Array(bytes), nome, { alt, contentType });
  midiasEnviadas.set(caminhoPublico, item);
  return item;
}

function urlDaMidia(item) {
  return item.url ?? `/_emdash/api/media/file/${item.storageKey}`;
}

// Valor de um campo "image", no mesmo formato que o painel grava.
function valorDeImagem(item, alt) {
  return {
    id: item.id,
    provider: "local",
    alt: alt ?? item.alt ?? "",
    width: item.width,
    height: item.height,
    filename: item.filename,
    mimeType: item.mimeType,
    blurhash: item.blurhash,
    dominantColor: item.dominantColor,
    meta: { storageKey: item.storageKey },
  };
}

// ---------------------------------------------------------------------------
// Texto

async function markdownParaPortableText(markdown) {
  // Imagens no formato de referência: ![alt][def] + [def]: /caminho
  const referencias = new Map();
  const semDefinicoes = markdown.replace(/^\[([^\]]+)\]:\s*(\S+).*$/gm, (_, nome, url) => {
    referencias.set(nome.toLowerCase(), url);
    return "";
  });
  const normalizado = semDefinicoes.replace(/!\[([^\]]*)\]\[([^\]]+)\]/g, (original, alt, nome) => {
    const url = referencias.get(nome.toLowerCase());
    return url ? `![${alt}](${url})` : original;
  });

  const blocos = markdownToPortableText(normalizado);
  for (const bloco of blocos) {
    const url = bloco._type === "image" ? bloco.asset?.url : undefined;
    if (!url?.startsWith("/")) continue;
    const alt = bloco.alt?.startsWith("/") ? "" : bloco.alt;
    const item = await enviarImagem(url, alt);
    bloco.alt = alt;
    bloco.asset = { _type: "reference", _ref: item.id, url: urlDaMidia(item) };
    bloco.width = item.width;
    bloco.height = item.height;
  }
  return blocos;
}

// ---------------------------------------------------------------------------
// Categorias

async function listarTermos(locale, taxonomia = TAXONOMY) {
  const resultado = await client.request(
    "GET",
    `/taxonomies/${taxonomia}/terms?locale=${locale}&limit=200`,
  );
  return resultado.terms ?? resultado.items ?? [];
}

// Todo banco novo do EmDash vem com a taxonomia "category" (Categories).
// O site usa só "tag" (Categorias); a vazia sai do menu do painel.
async function removerTaxonomiaPadraoVazia() {
  const { taxonomies } = await client.request("GET", "/taxonomies");
  const category = taxonomies.find((t) => t.name === "category");
  if (!category || category.collections.length > 0) return;
  if ((await listarTermos(category.locale, "category")).length > 0) return;
  await client.request("DELETE", "/taxonomies/category");
  console.log('  taxonomia padrão vazia "category" removida');
}

async function garantirCategorias() {
  const existentes = { pt: await listarTermos("pt"), en: await listarTermos("en") };
  const porNomeAntigo = new Map();

  for (const categoria of CATEGORIAS) {
    let pt = existentes.pt.find((t) => t.slug === categoria.pt.slug);
    if (!pt) {
      pt = (await client.request("POST", `/taxonomies/${TAXONOMY}/terms`, {
        ...categoria.pt,
        locale: "pt",
      })).term;
      console.log(`  categoria criada: ${categoria.pt.label}`);
    }
    let en = existentes.en.find((t) => t.slug === categoria.en.slug);
    if (!en) {
      en = (await client.request("POST", `/taxonomies/${TAXONOMY}/terms`, {
        ...categoria.en,
        locale: "en",
        translationOf: pt.id,
      })).term;
      console.log(`  categoria criada: ${categoria.en.label}`);
    }
    for (const antigo of categoria.antigos) porNomeAntigo.set(antigo, { pt, en });
  }
  return porNomeAntigo;
}

// ---------------------------------------------------------------------------
// Conteúdo

async function buscarExistente(slug, locale) {
  try {
    return await client.get(COLLECTION, slug, { locale, raw: true });
  } catch (error) {
    if (error?.status === 404 || error?.code === "NOT_FOUND") return null;
    throw error;
  }
}

async function importar(noticia, { traducaoDe, categorias }) {
  const { dados } = noticia;
  const existente = await buscarExistente(noticia.slug, noticia.lang);
  if (existente) {
    console.log(`  já existe: ${noticia.arquivo} → ${noticia.lang}/${noticia.slug}`);
    return existente;
  }

  const capa = dados.imagem ? await enviarImagem(dados.imagem, dados.title) : null;
  const item = await client.create(COLLECTION, {
    slug: noticia.slug,
    locale: noticia.lang,
    translationOf: traducaoDe,
    data: {
      title: dados.title,
      resumo: dados.resumo,
      imagem: capa ? valorDeImagem(capa, dados.title) : null,
      data_noticia: `${dados.date}T12:00:00.000Z`,
      conteudo: await markdownParaPortableText(noticia.corpo),
    },
  });

  const termos = (dados.tags ?? [])
    .map((tag) => categorias.get(String(tag).trim().toLowerCase())?.[noticia.lang])
    .filter(Boolean);
  if (termos.length > 0 && !traducaoDe) {
    // A atribuição vale para todas as traduções da notícia.
    await client.request("POST", `/content/${COLLECTION}/${item.id}/terms/${TAXONOMY}`, {
      termIds: termos.map((t) => t.id),
    });
  }

  await client.publish(COLLECTION, item.id);
  console.log(`  importada: ${noticia.arquivo} → ${noticia.lang}/${noticia.slug}`);
  return item;
}

async function main() {
  console.log(`EmDash: ${baseUrl}${token ? "" : " (acesso de desenvolvimento)"}`);
  const noticias = await lerNoticias();
  await removerTaxonomiaPadraoVazia();
  const categorias = await garantirCategorias();

  const ids = new Map();
  for (const noticia of noticias.filter((n) => n.lang === "pt")) {
    const item = await importar(noticia, { categorias });
    ids.set(noticia.slug, item.id);
  }
  for (const noticia of noticias.filter((n) => n.lang !== "pt")) {
    await importar(noticia, { categorias, traducaoDe: ids.get(noticia.slug) });
  }
  console.log(`Pronto: ${noticias.length} arquivos processados, ${midiasEnviadas.size} imagens enviadas.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
