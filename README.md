# Site NéFiTs



## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                     | Action                                                     |
| :-------------------------- | :--------------------------------------------------------- |
| `npm install`               | Installs dependencies                                      |
| `npm run dev`               | Starts the site and the EmDash admin at `localhost:4321`   |
| `npm run importar-noticias` | Imports the Markdown news into EmDash (see below)          |
| `npm run build`             | Build your production site to `./dist/`                    |
| `npm run preview`           | Preview your build locally, before deploying               |
| `npm run astro ...`         | Run CLI commands like `astro add`, `astro check`           |
| `npm run astro -- --help`   | Get help using the Astro CLI                               |


## Conteúdo

As **notícias** são editadas no painel do [EmDash](https://emdashcms.com), em
`/_emdash/admin`. O resto do site (textos, equipe, publicações, vídeos) continua em:

```
src/i18n/locales
```

### Notícias (EmDash)

Cada notícia tem título, resumo, imagem, data e conteúdo, em português e, se
houver, em inglês (botão **Traduzir** no editor). As categorias ficam em
**Categorias** no painel. Ao publicar, a notícia aparece em `/pt/noticias` ou
`/en/noticias` na hora, sem novo build. Sem versão em inglês, `/en/noticias/...`
mostra a versão em português com um aviso.

- `seed/seed.json`: modelo de conteúdo (campos da notícia e categorias), aplicado
  na primeira configuração do painel.
- `src/content/noticias`: notícias antigas em Markdown. Servem só para a
  importação; editar esses arquivos não muda mais o site.

### Rodar localmente pela primeira vez

1. `npm install`
2. `npx emdash secrets generate --write .env` (cria a chave local; o `.env` não vai para o git)
3. `npm run dev` e abra `http://localhost:4321/_emdash/admin`: preencha os dados do
   site, crie a conta de administrador e registre uma passkey.
4. Com o `npm run dev` ainda rodando, em outro terminal: `npm run importar-noticias`.
   O script envia as imagens para a biblioteca de mídia, cria as notícias em português,
   liga as versões em inglês como traduções, atribui as categorias e publica. Pode
   rodar de novo: o que já existe é ignorado.

O banco (`data.db`) e as imagens enviadas (`uploads/`) ficam só na sua máquina.

### Publicação (deploy)

Com o EmDash o site precisa de um servidor Node.js, então o GitHub Pages
(`.github/workflows/deploy.yml`) não serve mais para ele. Antes de levar estas
mudanças para a `main`, é preciso escolher onde hospedar:

- um servidor Node.js com disco persistente para `data.db` e `uploads/`
  ([guia](https://docs.emdashcms.com/deployment/nodejs/)), ou
- Cloudflare Workers com D1 e R2 ([guia](https://docs.emdashcms.com/deployment/cloudflare/)).

No servidor, defina `EMDASH_SITE_URL` (endereço público do site, no build e na
execução) e `EMDASH_ENCRYPTION_KEY` (guarde uma cópia da chave).
