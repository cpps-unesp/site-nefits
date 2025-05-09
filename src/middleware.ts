import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async ({ url, redirect }, next) => {
  const { pathname } = url;
  const supportedLangs = ['pt', 'en'];

  const pathParts = pathname.split('/').filter(Boolean);

  // Redireciona para /pt se a rota não começa com idioma suportado
  if (pathParts.length > 0 && !supportedLangs.includes(pathParts[0])) {
    return redirect(`/pt${pathname}`, 302);
  }

  return next();
};
