import { defineConfig } from 'astro/config';

import node from '@astrojs/node';
import react from '@astrojs/react';
import mdx from "@astrojs/mdx";
import emdash, { local } from 'emdash/astro';
import { sqlite } from 'emdash/db';

export default defineConfig({
  site: 'https://labriunesp.github.io',
  base: '/',
  // O EmDash precisa de renderização no servidor. As páginas que não usam
  // conteúdo do EmDash continuam pré-renderizadas (export const prerender = true).
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  // O EmDash lê os idiomas daqui. O roteamento /pt e /en continua sendo feito
  // pelas páginas [lang] e por src/middleware.ts, por isso "manual".
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: 'manual',
  },
  integrations: [
    // O painel do EmDash usa React.
    react(),
    mdx(),
    emdash({
      database: sqlite({ url: 'file:./data.db' }),
      storage: local({
        directory: './uploads',
        baseUrl: '/_emdash/api/media/file',
      }),
    }),
  ],
});
