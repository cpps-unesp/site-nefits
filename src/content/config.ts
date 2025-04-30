import { z, defineCollection } from "astro:content";
import slugify from "slugify"; // Certifique-se de ter instalado: npm install slugify

// Função auxiliar para gerar slug
function createSlug(date: string, lang: string, num: string): string {
  
  return slugify(`${date}-${lang}-${num}`, { lower: true, strict: true });
}
const noticiasCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    num: z.string(),
    imagem: z.string(),
    date: z.string(),
    lang: z.string(),     // "pt" ou "en"
    resumo: z.string(),   // resumo curto
  }).transform((data) => ({
    ...data,
    slug: createSlug(data.date,data.lang,data.num),
  })),
});

export const collections = {
  noticias: noticiasCollection,
};