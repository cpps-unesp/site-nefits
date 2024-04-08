import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
    site: 'https://labriunesp.github.io',
    base: '/nefits',
    integrations: [react({
        include: ['**/react/*'],
      })],
});
