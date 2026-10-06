import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async ({ url, redirect }, next) => {
  const { pathname } = url;
  const supportedLangs = ['pt', 'en'];

  const pathParts = pathname.split('/').filter(Boolean);

  // Rotas internas (/_emdash, /_astro, /_image), páginas de erro e arquivos
  // (robots.txt, sitemap.xml) não levam prefixo de idioma.
  const semIdioma = (parte: string) =>
    parte.startsWith('_') || parte.includes('.') || parte === '404' || parte === '500';
  if (pathParts.length > 0 && semIdioma(pathParts[0])) {
    return next();
  }

  // Redireciona para /pt se a rota não começa com idioma suportado
  if (pathParts.length > 0 && !supportedLangs.includes(pathParts[0])) {
    return redirect(`/pt${pathname}`, 302);
  }

  return next();
};
