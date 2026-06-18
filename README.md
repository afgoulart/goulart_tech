# Goulart Consultoria em TI

Site institucional da **Goulart Consultoria em TI LTDA** — CNPJ 51.399.263/0001-56.

Single-page institucional desenvolvido com [Next.js 13](https://nextjs.org/) (App Router) e [Tailwind CSS](https://tailwindcss.com/), com exportação estática para GitHub Pages.

## Desenvolvimento

```bash
yarn install
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build

```bash
yarn build
```

A saída estática é gerada no diretório `out/` (configurado via `output: 'export'` em `next.config.js`).

## Estrutura

- `src/app/layout.tsx` — layout raiz e metadados (SEO/OpenGraph).
- `src/app/page.tsx` — conteúdo do site (hero, serviços, sobre, diferenciais, contato).
- `src/app/globals.css` — tema e tokens de design.

## Deploy

O deploy é automatizado via GitHub Actions (`.github/workflows/jekyll-gh-pages.yml`):
a cada push na branch `main`, o site é buildado e publicado na branch `public`.
