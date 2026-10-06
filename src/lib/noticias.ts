import { getEmDashCollection } from "emdash";

export const IDIOMAS = ["pt", "en"] as const;
export type Idioma = (typeof IDIOMAS)[number];

export function idiomaValido(lang: string | undefined): lang is Idioma {
  return IDIOMAS.includes(lang as Idioma);
}

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
