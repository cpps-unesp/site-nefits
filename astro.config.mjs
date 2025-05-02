import { defineConfig } from 'astro/config';


import react from '@astrojs/react';
import mdx from "@astrojs/mdx";
import tailwindcss from '@tailwindcss/vite';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://labriunesp.github.io',
  base: '/',
  integrations: [
    react({
      include: ['**/react/*']
    }),
    mdx(),
    tailwind(),
  ],
});
