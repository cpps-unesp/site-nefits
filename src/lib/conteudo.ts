import { getEmDashCollection, getEmDashEntry } from "emdash";

export const IDIOMAS = ["pt", "en"] as const;
export type Idioma = (typeof IDIOMAS)[number];

export function idiomaValido(lang: string | undefined): lang is Idioma {
  return IDIOMAS.includes(lang as Idioma);
}

function comErro<T>(resultado: { entries: T[]; error?: Error }, oQue: string): T[] {
  if (resultado.error) {
    console.error(`Erro ao carregar ${oQue}:`, resultado.error);
    throw resultado.error;
  }
  return resultado.entries;
}

// ---------------------------------------------------------------------------
// Notícias

// Notícias publicadas no EmDash, da mais recente para a mais antiga.
// `tag` filtra pelo slug da categoria no idioma pedido.
export async function listarNoticias(lang: Idioma, tag?: string) {
  return getEmDashCollection("noticias", {
    locale: lang,
    orderBy: { data_noticia: "desc" },
    ...(tag ? { where: { tag } } : {}),
  });
}

export function categoriasDa(noticia: { data: { terms?: Record<string, { slug: string; label: string }[]> } }) {
  return (noticia.data.terms?.tag ?? []).map(({ slug, label }) => ({ slug, label }));
}

// ---------------------------------------------------------------------------
// Textos do site (página inicial e Sobre), identificados pelo slug.
// Sem tradução publicada, o EmDash devolve a versão em português.

export async function buscarTexto(slug: string, lang: Idioma) {
  const { entry, error } = await getEmDashEntry("textos", slug, { locale: lang });
  if (error) console.error(`Erro ao carregar o texto "${slug}":`, error);
  return entry?.data ?? null;
}

// ---------------------------------------------------------------------------
// Equipe

// Membros no idioma pedido; quem ainda não tem tradução aparece em português.
// Com "Ordem" preenchida vem primeiro (menor primeiro); o resto, pelo nome.
export async function listarMembros(lang: Idioma) {
  const membros = comErro(await getEmDashCollection("membros", { locale: lang }), "a equipe");
  if (lang !== "pt") {
    const traduzidos = new Set(membros.map((m) => m.data.nome));
    const emPortugues = comErro(await getEmDashCollection("membros", { locale: "pt" }), "a equipe");
    membros.push(...emPortugues.filter((m) => !traduzidos.has(m.data.nome)));
  }
  return membros.sort((a, b) => {
    const [oa, ob] = [a.data.ordem, b.data.ordem];
    if (oa != null && ob != null && oa !== ob) return oa - ob;
    if (oa != null && ob == null) return -1;
    if (oa == null && ob != null) return 1;
    return a.data.nome.localeCompare(b.data.nome, "pt");
  });
}

// ---------------------------------------------------------------------------
// Publicações (só em português; aparecem nas duas versões do site)

export const TIPOS_DE_PUBLICACAO = [
  { valor: "Livros", aba: "livros" },
  { valor: "Capítulos de Livros e Artigos", aba: "artigos" },
  { valor: "Teses e Dissertações", aba: "teses" },
  { valor: "TCCs", aba: "tccs" },
  { valor: "Relatórios de Pesquisa", aba: "relatorios" },
] as const;

export async function listarPublicacoes() {
  const publicacoes = comErro(
    await getEmDashCollection("publicacoes", { locale: "pt" }),
    "as publicações",
  );
  // Do ano mais recente para o mais antigo ("2023-2024" conta como 2024)
  const ano = (valor: string) => Math.max(...(valor.match(/\d{4}/g) ?? ["0"]).map(Number));
  return publicacoes.sort(
    (a, b) => ano(b.data.ano) - ano(a.data.ano) || a.data.titulo.localeCompare(b.data.titulo, "pt"),
  );
}

// Endereço do arquivo de um campo "file" (ou o link externo, se houver)
export function enderecoDaPublicacao(
  publicacao: { arquivo?: { meta?: Record<string, unknown>; url?: string; src?: string }; link?: string },
  locals: App.Locals,
) {
  const { arquivo } = publicacao;
  const chave = arquivo?.meta?.storageKey;
  if (typeof chave === "string") {
    return locals.emdash?.getPublicMediaUrl?.(chave) ?? `/_emdash/api/media/file/${chave}`;
  }
  return arquivo?.url ?? arquivo?.src ?? publicacao.link;
}

// ---------------------------------------------------------------------------
// Vídeos (só em português; aparecem nas duas versões do site)

export async function listarVideos() {
  const videos = comErro(await getEmDashCollection("videos", { locale: "pt" }), "os vídeos");
  return videos.sort((a, b) => (a.data.ordem ?? 0) - (b.data.ordem ?? 0));
}

// Aceita links do YouTube nos formatos watch, youtu.be, embed e shorts
export function embedDoYoutube(url: string) {
  const id = url.match(/(?:embed\/|watch\?v=|youtu\.be\/|shorts\/)([\w-]{6,})/)?.[1];
  return id ? `https://www.youtube.com/embed/${id}` : undefined;
}
