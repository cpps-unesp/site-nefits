# Site NéFiTs



## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                     | Action                                                     |
| :-------------------------- | :--------------------------------------------------------- |
| `npm install`               | Installs dependencies                                      |
| `npm run dev`               | Starts the site and the EmDash admin at `localhost:4321`   |
| `npm run importar-conteudo` | Imports the old site content into EmDash (see below)       |
| `npm run build`             | Build your production site to `./dist/`                    |
| `npm run deploy`            | Build and deploy to Cloudflare Workers                     |
| `npm run astro ...`         | Run CLI commands like `astro add`, `astro check`           |
| `npm run astro -- --help`   | Get help using the Astro CLI                               |


## Conteúdo

O conteúdo é editado no painel do [EmDash](https://emdashcms.com), em
`/_emdash/admin`. Ao publicar, a mudança aparece no site na hora, sem novo build.

| No painel          | Onde aparece                                   | Idiomas                         |
| :----------------- | :--------------------------------------------- | :------------------------------ |
| **Notícias**       | `/noticias`, carrossel da página inicial (campo "Destaque") e `/tags` | pt e en (botão **Traduzir**) |
| **Categorias**     | etiquetas das notícias                         | pt e en                         |
| **Equipe**         | `/equipe`                                      | pt e en; sem tradução, aparece em português |
| **Publicações**    | `/publicacoes`, separadas pelo campo "Tipo"    | uma versão, usada nos dois idiomas |
| **Vídeos**         | `/videos` (cole o link do YouTube)             | uma versão, usada nos dois idiomas |
| **Textos do site** | página inicial (`inicio-...`) e `/sobre` (`sobre-...`) | pt e en                 |

Menu, rodapé, rótulos de botões e títulos fixos continuam em `src/i18n/locales`
(`pt.json`, `en.json`, `links.json`).

- `seed/seed.json`: modelo de conteúdo (campos de cada tipo), aplicado na primeira
  configuração do painel.
- `src/content/noticias` e as partes de equipe, textos, publicações e vídeos dos
  arquivos em `src/i18n/locales`: conteúdo do site antigo. Servem só para a
  importação; editar esses arquivos não muda mais o site.

## Rodar localmente pela primeira vez

1. `npm install`
2. `npx emdash secrets generate --write .dev.vars` (cria a chave local; o `.dev.vars` não vai para o git)
3. `npm run dev` e abra `http://localhost:4321/_emdash/admin`: preencha os dados do
   site, crie a conta de administrador e registre uma passkey.
4. Com o `npm run dev` ainda rodando, em outro terminal: `npm run importar-conteudo`.
   O script envia imagens e arquivos para a biblioteca de mídia, cria o conteúdo em
   português, liga as versões em inglês como traduções e publica. Pode rodar de
   novo: o que já existe é ignorado.

O `npm run dev` simula o Cloudflare na sua máquina: banco (D1) e mídias (R2)
ficam em `.wrangler/`, só localmente.

## Publicação no Cloudflare

O site roda no Cloudflare Workers, com o banco no D1 e as mídias no R2
(`wrangler.jsonc`). O Worker do EmDash passa do limite do plano gratuito do
Workers (3 MB compactado; o build tem cerca de 4,2 MB), então a conta precisa
do plano **Workers Paid**.

Primeira publicação:

1. `npx wrangler login`
2. Defina o endereço público em `wrangler.jsonc` (`vars.EMDASH_SITE_URL`) antes da
   configuração inicial: as passkeys ficam presas a esse endereço.
3. `npx emdash secrets generate` e grave a chave com
   `npx wrangler secret put EMDASH_ENCRYPTION_KEY`. Guarde uma cópia da chave.
4. `npm run deploy`. No primeiro deploy o Wrangler cria o banco D1 `site-nefits` e
   o bucket R2 `site-nefits-media`.
5. Abra `/_emdash/admin` no endereço publicado e conclua a configuração logo em
   seguida: enquanto ela não é feita, quem abrir o painel primeiro vira administrador.
6. Importe o conteúdo: no painel, crie um token de API com acesso de administrador e rode
   `EMDASH_URL=https://endereco-do-site EMDASH_TOKEN=... npm run importar-conteudo`.
   Apague o token depois.

Para publicar automaticamente a cada push na `main`, conecte o repositório ao
[Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/) do
Cloudflare com o comando de build `npm run build` e o de deploy
`npx wrangler deploy`. O antigo deploy para o GitHub Pages foi removido: o
GitHub Pages só serve arquivos estáticos e não roda o EmDash.
