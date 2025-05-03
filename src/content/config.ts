import { z, defineCollection } from "astro:content";
import slugify from "slugify"; // Certifique-se de ter instalado: npm install slugify

// Função auxiliar para gerar slug
function createSlug(date: string, num: string): string {
  
  return slugify(`${date}-${num}`, { lower: true, strict: true });
}
const noticiasCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    num: z.string(),
    imagem: z.string(),
    date: z.string(),
    tags: z.array(z.string()).optional(),
    lang: z.enum(["pt", "en"]),
    autor: z.string().optional(),
    destaque: z.boolean().optional(),    
    resumo: z.string(),   
  }).transform((data) => ({
    ...data,
    slug: createSlug(data.date,data.num),
  })),
});

export const collections = {
  noticias: noticiasCollection,
};