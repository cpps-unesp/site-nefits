import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://labriunesp.github.io',
    base: '/',
    integrations: [react({
        include: ['**/react/*'],
      })],
});
