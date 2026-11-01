# Arquitetura do portfólio

## Visão geral

```
src/content/projects/*.mdx ─┐
src/data/*.ts ──────────────┼─► páginas (src/pages) ─► seções (src/components/sections)
src/assets/** ──────────────┘          │                        │
                                        └─► layout (BaseLayout) ─┴─► componentes base (ui/, shadcn)
                                                         │
                                               astro build ─► dist/ (HTML + CSS + imagens) ─► Vercel
```

Regra de dependência: **páginas → seções → componentes de UI**. Seções recebem dados por props ou leem de
`src/data`/collections; componentes de UI não conhecem conteúdo.

## Estrutura de pastas

```
src/
  assets/projects/<slug>/      telas e imagens dos projetos (otimizadas pelo astro:assets)
  components/
    ui/                         shadcn (React, renderizados no build): button, badge, card, separator
    layout/                     Header, Footer, ThemeToggle, SkipLink, Seo
    sections/                   Hero, Stats, Projects, Experience, Process, Skills, Education, Contact
    project/                    ProjectCard, ProjectMeta, ScreenGallery
    Section.astro, Tag.astro    primitivas de layout
  content/projects/*.mdx        estudos de caso
  content.config.ts             schema Zod das collections
  data/                         profile, experience, skills, education, stats, navigation
  layouts/BaseLayout.astro      <head>, SEO, tema, header/footer
  lib/utils.ts                  cn() do shadcn e helpers
  pages/
    index.astro
    projetos/[slug].astro
    404.astro
    robots.txt.ts
  styles/global.css             Tailwind, tokens, base, utilitários
public/                         favicon, og.png
docs/                           esta documentação
```

## Modelo de conteúdo (projetos)

| Campo                         | Tipo                                               | Uso                                      |
| ----------------------------- | -------------------------------------------------- | ---------------------------------------- |
| `title`, `tagline`, `summary` | string                                             | Card e cabeçalho do estudo de caso       |
| `role`                        | string                                             | "Arquiteto e desenvolvedor full stack"   |
| `period`                      | string                                             | "2025 – 2026"                            |
| `status`                      | `em-desenvolvimento` \| `concluido` \| `academico` | Selo no card                             |
| `order`, `featured`           | number, boolean                                    | Ordem e destaque no bento                |
| `stack`                       | string[]                                           | Etiquetas                                |
| `metrics`                     | `{ value, label }[]`                               | Números verificáveis                     |
| `highlights`                  | string[]                                           | 3–4 frases para o card                   |
| `links`                       | `{ label, href, kind }[]`                          | Repositório, demo, protótipo             |
| `repoStatus`                  | `publico` \| `privado`                             | Mostra "repositório em breve" se privado |
| `cover`, `screens`            | image + alt                                        | Galeria                                  |

## Design system

### Cores (oklch, variáveis no padrão shadcn)

| Token                | Claro           | Escuro             | Uso                        |
| -------------------- | --------------- | ------------------ | -------------------------- |
| `--background`       | papel quente    | tinta quase preta  | Fundo                      |
| `--foreground`       | tinta           | papel              | Texto                      |
| `--muted-foreground` | cinza quente    | cinza claro        | Texto secundário (≥ 4,5:1) |
| `--card`             | branco quebrado | superfície elevada | Cards                      |
| `--border`           | linha fina      | linha fina         | Bordas                     |
| `--primary`          | uva             | lavanda            | Único acento: links, foco  |

### Tipografia

- **Schibsted Grotesk** em títulos e texto e **JetBrains Mono** nos metadados (ver `design.md`).
- Escala fluida com `clamp()`; títulos com `text-wrap: balance`, parágrafos com `text-wrap: pretty`.
- Largura de leitura ≤ 68 caracteres.

### Espaço, forma e movimento

- Container de 1120 px; seções separadas por bordas finas, não por blocos coloridos.
- Raio base de 0,75 rem; sombras quase ausentes.
- Movimento: revelar ao rolar com CSS (`animation-timeline: view()` quando suportado) e transição nativa entre
  páginas (`@view-transition`). Tudo desligado com `prefers-reduced-motion`.

### Tema claro/escuro

Script inline no `<head>` lê `localStorage` ou `prefers-color-scheme` e aplica a classe `.dark` antes da
pintura (sem flash). O botão alterna e salva a escolha.

## Qualidade

| Item           | Meta                                  | Como verificar                                      |
| -------------- | ------------------------------------- | --------------------------------------------------- |
| Tipos          | `astro check` sem erros               | `pnpm check`                                        |
| Formatação     | Prettier com plugins Astro e Tailwind | `pnpm format:check`                                 |
| Build          | sem avisos                            | `pnpm build`                                        |
| Lighthouse     | 100/100/100/100                       | DevTools ou PageSpeed Insights no preview da Vercel |
| Acessibilidade | WCAG 2.2 AA                           | axe DevTools, teclado, NVDA                         |
| Links          | nenhum quebrado                       | revisão manual por enquanto                         |

## Segurança e privacidade

- Site estático: sem formulário, sem cookies, sem rastreamento na v1.
- Cabeçalhos de segurança no `vercel.json` (HSTS, `X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy`, `Permissions-Policy`). CSP fica para a fase 2: os scripts inline precisam entrar por hash.
- Links externos com `rel="noopener noreferrer"`.
- Telefone fora do HTML; e-mail visível (é o canal de contato).
