import { z, defineCollection } from "astro:content";
import slugify from "slugify"; // Certifique-se de ter instalado: npm install slugify

// Função auxiliar para gerar slug
function createSlug(title: string): string {
  return slugify(title, { lower: true, strict: true });
}

const noticiasCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(), // Agora é opcional!
    imagem: z.string(),
    date: z.string(),
    lang: z.string(),     // "pt" ou "en"
    resumo: z.string(),   // resumo curto
  }).transform((data) => ({
    ...data,
    slug: data.slug ?? createSlug(data.title),
  })),
});

export const collections = {
  noticias: noticiasCollection,
};