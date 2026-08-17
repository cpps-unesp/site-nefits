/*
  Substitui a integração @astrojs/tailwind, que parou no Astro 5.
  O Astro processa este arquivo nativamente via Vite, aplicando o
  Tailwind às diretivas de src/styles/global.css.
*/
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
