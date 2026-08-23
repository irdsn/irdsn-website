# Professional Website

![Next.js](https://img.shields.io/badge/Next.js-16.3.2-black?logo=nextdotjs)
![Version](https://img.shields.io/badge/Version-0.1.0-informational)
![Task](https://img.shields.io/badge/Task-Personal%20Website-blueviolet)
![Last Updated](https://img.shields.io/badge/Last%20Updated-Aug%202026-brightgreen)

A bilingual professional website for an AI and data engineering profile. It uses Next.js,
TypeScript, the App Router, and a static-first architecture focused on performance,
accessibility, and technical SEO.

## Architecture

- Spanish is the default language at `/es`.
- English is available at `/en` through an accessible language switcher.
- Public pages are statically generated with Server Components by default.
- Client Components are limited to interactions that require browser state.
- Professional content is modeled independently from presentation components.
- Case studies use dedicated, indexable routes when verified source material is available.

The content and routing strategy is documented in
[`docs/content-architecture.md`](docs/content-architecture.md).

## Requirements

- Node.js 24 LTS
- pnpm 10.18.1

## Commands

```bash
pnpm dev
pnpm dev:8080
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm quality
```

Use `pnpm dev:8080` to open the local development site at
[`http://localhost:8080`](http://localhost:8080). The root route redirects to the Spanish version.

To preview the optimized production build locally:

```bash
pnpm build
pnpm start:8080
```

## Environment

Copy `.env.example` to `.env.local` and configure the canonical production origin:

```bash
NEXT_PUBLIC_SITE_URL=https://example.com
```

Internal source material under `project/` is intentionally excluded from version control and
must never be published automatically.
