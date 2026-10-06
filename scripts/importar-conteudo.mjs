// Importa o conteúdo do site antigo para o EmDash: notícias
// (src/content/noticias), equipe, publicações, vídeos e os textos da página
// inicial e da página Sobre (src/i18n/locales).
//
// Uso: com o site rodando (npm run dev) e a configuração inicial do painel
// concluída, execute em outro terminal:
//
//   npm run importar-conteudo
//
// Imagens e arquivos vão para a biblioteca de mídia, as versões em inglês são
// ligadas às em português como traduções e tudo é publicado. O que já existe
// no EmDash (mesmo slug e idioma) é ignorado, então pode rodar de novo.
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
const LOCALES_DIR = path.join(ROOT, "src/i18n/locales");
const PUBLIC_DIR = path.join(ROOT, "public");
const CONVERTIDAS_DIR = path.join(ROOT, "scripts/imagens-convertidas");
const TAXONOMY = "tag";

const baseUrl = process.env.EMDASH_URL ?? "http://localhost:4321";
const token = process.env.EMDASH_TOKEN;
const client = new EmDashClient({ baseUrl, token, devBypass: !token });

const avisos = [];

function criarSlug(...partes) {
  return slugify(partes.join("-"), { lower: true, strict: true });
}

function semVazios(dados) {
  return Object.fromEntries(
    Object.entries(dados).filter(([, valor]) => valor !== undefined && valor !== null && valor !== ""),
  );
}

async function lerJson(nome) {
  return JSON.parse(await readFile(path.join(LOCALES_DIR, nome), "utf8"));
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
  ".pdf": "application/pdf",
  ".doc": "application/msword",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

async function existe(arquivo) {
  try {
    await access(arquivo);
    return true;
  } catch {
    return false;
  }
}

// Acha o arquivo de um caminho de public/. Os nomes podem estar gravados com
// acentos em outra forma Unicode. O EmDash não aceita SVG: para um .svg, usa a
// versão JPEG de scripts/imagens-convertidas/ (mesmo caminho) ou, se não
// houver, a versão .jpeg/.jpg/.png com o mesmo nome em public/.
async function localizarArquivo(caminhoPublico) {
  const caminho = decodeURI(caminhoPublico);
  for (const forma of new Set([caminho, caminho.normalize("NFC"), caminho.normalize("NFD")])) {
    const arquivo = path.join(PUBLIC_DIR, forma);
    if (path.extname(arquivo).toLowerCase() === ".svg") {
      const semExtensao = forma.slice(0, -4);
      const candidatos = [
        path.join(CONVERTIDAS_DIR, `${semExtensao}.jpeg`),
        ...[".jpeg", ".jpg", ".png"].map((ext) => path.join(PUBLIC_DIR, semExtensao + ext)),
      ];
      for (const candidato of candidatos) {
        if (await existe(candidato)) return candidato;
      }
    } else if (await existe(arquivo)) {
      return arquivo;
    }
  }
  return null;
}

// Envia um arquivo de public/ para a biblioteca de mídia. Retorna null (e
// registra um aviso) se o arquivo não existir. `campoId` aplica os tipos de
// arquivo aceitos por aquele campo (ex.: Word no campo Arquivo das publicações).
async function enviarArquivo(caminhoPublico, alt, campoId) {
  if (midiasEnviadas.has(caminhoPublico)) return midiasEnviadas.get(caminhoPublico);
  const arquivo = await localizarArquivo(caminhoPublico);
  if (!arquivo) {
    avisos.push(`arquivo não encontrado: public${caminhoPublico}`);
    return null;
  }
  const nome = path.basename(arquivo);
  const form = new FormData();
  form.append(
    "file",
    new Blob([await readFile(arquivo)], { type: MIME[path.extname(nome).toLowerCase()] }),
    nome,
  );
  if (alt) form.append("alt", alt);
  if (campoId) form.append("fieldId", campoId);
  const resposta = await client.transport.fetch(
    new Request(`${baseUrl}/_emdash/api/media`, { method: "POST", body: form }),
  );
  await client.assertOk(resposta);
  const { item } = (await resposta.json()).data;
  midiasEnviadas.set(caminhoPublico, item);
  return item;
}

function urlDaMidia(item) {
  return item.url ?? `/_emdash/api/media/file/${item.storageKey}`;
}

// Valores de campos "image" e "file", no mesmo formato que o painel grava.
function valorDeImagem(item, alt) {
  if (!item) return undefined;
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

function valorDeArquivo(item) {
  if (!item) return undefined;
  return {
    id: item.id,
    provider: "local",
    filename: item.filename,
    mimeType: item.mimeType,
    size: item.size,
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
    const item = await enviarArquivo(url, alt);
    if (!item) continue;
    bloco.alt = alt;
    bloco.asset = { _type: "reference", _ref: item.id, url: urlDaMidia(item) };
    bloco.width = item.width;
    bloco.height = item.height;
  }
  return blocos.filter((bloco) => bloco._type !== "image" || bloco.asset?._ref);
}

// ---------------------------------------------------------------------------
// Conteúdo

async function buscarExistente(colecao, slug, locale) {
  try {
    return await client.get(colecao, slug, { locale, raw: true });
  } catch (error) {
    if (error?.status === 404 || error?.code === "NOT_FOUND") return null;
    throw error;
  }
}

// Cria e publica uma entrada, ou devolve a existente com o mesmo slug e idioma.
// `montarDados` só roda (e só envia mídia) quando a entrada ainda não existe.
async function criarPublicado(colecao, { slug, locale, traducaoDe, rotulo }, montarDados) {
  const existente = await buscarExistente(colecao, slug, locale);
  if (existente) {
    console.log(`  já existe: ${colecao} ${locale}/${slug}`);
    return { item: existente, criado: false };
  }
  const item = await client.create(colecao, {
    slug,
    locale,
    translationOf: traducaoDe,
    data: semVazios(await montarDados()),
  });
  await client.publish(colecao, item.id);
  console.log(`  importado: ${colecao} ${locale}/${slug}${rotulo ? ` (${rotulo})` : ""}`);
  return { item, criado: true };
}

// ---------------------------------------------------------------------------
// Categorias das notícias

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
// Notícias

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
        lang: dados.lang ?? lang,
        // Mesmo slug que src/content.config.ts gerava, para manter as URLs.
        slug: criarSlug(dados.date, dados.num),
        dados,
        corpo: match[2],
      });
    }
  }
  return noticias;
}

async function importarNoticia(noticia, { traducaoDe, categorias }) {
  const { dados } = noticia;
  const { item, criado } = await criarPublicado(
    "noticias",
    { slug: noticia.slug, locale: noticia.lang, traducaoDe },
    async () => ({
      title: dados.title,
      resumo: dados.resumo,
      imagem: valorDeImagem(dados.imagem && (await enviarArquivo(dados.imagem, dados.title)), dados.title),
      data_noticia: `${dados.date}T12:00:00.000Z`,
      destaque: dados.destaque === true,
      conteudo: await markdownParaPortableText(noticia.corpo),
    }),
  );

  const termos = (dados.tags ?? [])
    .map((tag) => categorias.get(String(tag).trim().toLowerCase())?.[noticia.lang])
    .filter(Boolean);
  if (criado && termos.length > 0 && !traducaoDe) {
    // A atribuição vale para todas as traduções da notícia.
    await client.request("POST", `/content/noticias/${item.id}/terms/${TAXONOMY}`, {
      termIds: termos.map((t) => t.id),
    });
  }
  return item;
}

async function importarNoticias() {
  console.log("Notícias");
  await removerTaxonomiaPadraoVazia();
  const categorias = await garantirCategorias();
  const noticias = await lerNoticias();

  const ids = new Map();
  for (const noticia of noticias.filter((n) => n.lang === "pt")) {
    ids.set(noticia.slug, (await importarNoticia(noticia, { categorias })).id);
  }
  for (const noticia of noticias.filter((n) => n.lang !== "pt")) {
    await importarNoticia(noticia, { categorias, traducaoDe: ids.get(noticia.slug) });
  }
}

// ---------------------------------------------------------------------------
// Textos da página inicial e da página Sobre

const TEXTOS = [
  {
    slug: "inicio-apresentacao",
    titulo: (l, lang) => (lang === "pt" ? "Apresentação" : "Presentation"),
    paragrafos: (l) => [l.home.apresentar.texto],
    imagem: (home) => home.apresentar.imagem,
  },
  {
    slug: "inicio-sobre",
    titulo: (l) => l.home.sobre.titulo,
    paragrafos: (l) => [l.home.sobre.texto],
    imagem: (home) => home.sobre.imagem,
  },
  {
    slug: "inicio-noticias",
    titulo: (l) => l.home.noticias.titulo,
    paragrafos: (l) => [l.home.noticias.texto],
  },
  {
    slug: "inicio-publicacoes",
    titulo: (l) => l.home.publicacoes.titulo,
    paragrafos: (l) => [l.home.publicacoes.texto],
  },
  {
    slug: "sobre-quem-somos",
    titulo: (l) => l.sobre.titulo,
    paragrafos: (l) => [l.sobre.paragrafo1, l.sobre.paragrafo2],
    imagem: () => "/images/equipe_nefits_2.svg",
  },
  {
    slug: "sobre-objetivos",
    titulo: (l) => l.sobre.objetivos,
    paragrafos: (l) => [l.sobre.paragrafo3, l.sobre.paragrafo4],
    imagem: () => "/images/sobre2.svg",
  },
];

async function importarTextos() {
  console.log("Textos do site");
  const locales = { pt: await lerJson("pt.json"), en: await lerJson("en.json") };
  const home = await lerJson("home.json");

  for (const texto of TEXTOS) {
    let traducaoDe;
    for (const lang of ["pt", "en"]) {
      const l = locales[lang];
      const titulo = texto.titulo(l, lang);
      const { item } = await criarPublicado(
        "textos",
        { slug: texto.slug, locale: lang, traducaoDe },
        async () => ({
          titulo,
          texto: markdownToPortableText(texto.paragrafos(l).join("\n\n")),
          imagem: texto.imagem && valorDeImagem(await enviarArquivo(texto.imagem(home), titulo), titulo),
        }),
      );
      traducaoDe = item.id;
    }
  }
}

// ---------------------------------------------------------------------------
// Equipe

async function importarEquipe() {
  console.log("Equipe");
  const pt = (await lerJson("pt.json")).equipe;
  const en = (await lerJson("en.json")).equipe;
  const fixos = await lerJson("equipe.json");

  for (const [chave, membro] of Object.entries(pt)) {
    if (typeof membro !== "object") continue;
    const dados = fixos[chave] ?? {};
    const links = [dados.rede1, dados.rede2]
      .map((link) => link?.trim())
      .filter((link) => /^https?:\/\//.test(link ?? ""));
    const foto = dados.foto?.trim();
    const comuns = async () => ({
      foto:
        foto && !foto.endsWith("00-person.svg")
          ? valorDeImagem(await enviarArquivo(foto, membro.nome), membro.nome)
          : undefined,
      lattes: links.find((link) => link.includes("lattes.cnpq.br")),
      instagram: links.find((link) => link.includes("instagram.com")),
      ordem: dados.ordem,
    });

    const slug = criarSlug(membro.nome);
    const { item } = await criarPublicado(
      "membros",
      { slug, locale: "pt", rotulo: membro.nome },
      async () => ({ nome: membro.nome, cargo: membro.cargo, sobre: membro.sobre, ...(await comuns()) }),
    );
    const traducao = en[chave];
    if (typeof traducao === "object") {
      await criarPublicado(
        "membros",
        { slug, locale: "en", traducaoDe: item.id, rotulo: membro.nome },
        async () => ({ nome: membro.nome, cargo: traducao.cargo, sobre: traducao.sobre, ...(await comuns()) }),
      );
    }
  }
}

// ---------------------------------------------------------------------------
// Publicações

const TIPOS = {
  livros: "Livros",
  artigos: "Capítulos de Livros e Artigos",
  teses: "Teses e Dissertações",
  tccs: "TCCs",
  relatorios: "Relatórios de Pesquisa",
};

async function importarPublicacoes() {
  console.log("Publicações");
  const { abas } = await lerJson("publicacoes.json");
  const campoArquivo = (await client.collection("publicacoes")).fields.find((f) => f.slug === "arquivo");
  const slugs = new Set();

  for (const [aba, itens] of Object.entries(abas)) {
    for (const publicacao of itens) {
      const base = criarSlug(publicacao.ano, publicacao.titulo).slice(0, 80).replace(/-+$/, "");
      let slug = base;
      for (let n = 2; slugs.has(slug); n++) slug = `${base}-${n}`;
      slugs.add(slug);

      const local = publicacao.link?.startsWith("/");
      await criarPublicado(
        "publicacoes",
        { slug, locale: "pt", rotulo: publicacao.titulo },
        async () => ({
          titulo: publicacao.titulo,
          subtitulo: publicacao.subtitulo,
          autor: publicacao.autor,
          ano: publicacao.ano,
          tipo: TIPOS[aba],
          arquivo: local
            ? valorDeArquivo(await enviarArquivo(publicacao.link, undefined, campoArquivo?.id))
            : undefined,
          link: local ? undefined : publicacao.link,
        }),
      );
    }
  }
}

// ---------------------------------------------------------------------------
// Vídeos

function idDoYoutube(url) {
  const match = String(url).match(/(?:embed\/|watch\?v=|youtu\.be\/|shorts\/)([\w-]{6,})/);
  return match?.[1];
}

async function tituloDoYoutube(url) {
  try {
    const resposta = await fetch(
      `https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(url)}`,
    );
    if (resposta.ok) return (await resposta.json()).title;
  } catch {}
  return undefined;
}

async function importarVideos() {
  console.log("Vídeos");
  const { urls } = await lerJson("videos.json");

  for (const [indice, { url }] of urls.entries()) {
    const id = idDoYoutube(url);
    if (!id) {
      avisos.push(`vídeo com link não reconhecido: ${url}`);
      continue;
    }
    const link = `https://www.youtube.com/watch?v=${id}`;
    await criarPublicado("videos", { slug: criarSlug("youtube", id), locale: "pt" }, async () => ({
      titulo: (await tituloDoYoutube(link)) ?? `Vídeo ${indice + 1}`,
      url: link,
      ordem: indice + 1,
    }));
  }
}

// ---------------------------------------------------------------------------

async function main() {
  console.log(`EmDash: ${baseUrl}${token ? "" : " (acesso de desenvolvimento)"}`);
  await importarNoticias();
  await importarTextos();
  await importarEquipe();
  await importarPublicacoes();
  await importarVideos();
  console.log(`Pronto: ${midiasEnviadas.size} arquivos enviados para a biblioteca de mídia.`);
  for (const aviso of avisos) console.warn(`Aviso: ${aviso}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
