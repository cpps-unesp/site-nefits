/*
  Substitui a integração @astrojs/tailwind, que parou no Astro 5.
  O Astro processa este arquivo nativamente via Vite, aplicando o
  Tailwind às diretivas de src/styles/global.css.
*/
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// O painel do EmDash traz CSS já compilado com Tailwind 4. O Tailwind 3 do
// site só processa o CSS do próprio projeto, não o de node_modules.
function somenteCssDoProjeto(plugin) {
  return {
    postcssPlugin: `${plugin.postcssPlugin}-projeto`,
    plugins: plugin.plugins.map((processar) => (root, result) => {
      const arquivo = root.source?.input.file ?? result.opts.from ?? '';
      if (/[\\/]node_modules[\\/]/.test(arquivo)) return;
      return processar(root, result);
    }),
  };
}

export default {
  plugins: [somenteCssDoProjeto(tailwindcss()), autoprefixer()],
};
