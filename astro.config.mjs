import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import mdx from "@astrojs/mdx";
import { d1, r2 } from '@emdash-cms/cloudflare';
import emdash from 'emdash/astro';

export default defineConfig({
  site: 'https://labriunesp.github.io',
  base: '/',
  // O site roda no Cloudflare Workers: o conteúdo editado no EmDash fica no
  // D1 (banco) e no R2 (imagens e arquivos), definidos em wrangler.jsonc.
  output: 'server',
  adapter: cloudflare(),
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
      database: d1({ binding: 'DB' }),
      storage: r2({ binding: 'MEDIA' }),
    }),
  ],
  devToolbar: { enabled: false },
});
