# Decisões de arquitetura

Cada decisão com contexto, alternativas e consequências. Pesquisa de apoio em `pesquisa-referencias.md`.

## ADR-001: Astro 7 com saída estática

- **Contexto:** site de conteúdo, sem login nem banco; precisa abrir rápido em qualquer celular.
- **Decisão:** Astro 7, `output: "static"` (padrão).
- **Alternativas:** Next.js 16 (export estático limitado e manda runtime React); SvelteKit (exige adapter
  estático e tira o shadcn); HTML puro (sem componentes nem conteúdo tipado).
- **Consequências:** HTML pronto no build, zero JS por padrão, deploy em qualquer CDN.

## ADR-002: Tailwind CSS 4 com tokens no CSS

- **Decisão:** Tailwind 4 pelo plugin `@tailwindcss/vite`; cores, fontes e raios em variáveis CSS no
  `src/styles/global.css` (`@theme inline`), no padrão de tema do shadcn.
- **Alternativas:** CSS Modules ou CSS escopado do Astro (mais verboso, sem o ecossistema shadcn); UnoCSS.
- **Consequências:** um lugar só para o design system; trocar a paleta é editar variáveis.

## ADR-003: shadcn/ui sem pagar JavaScript

- **Decisão:** shadcn instalado manualmente (`components.json`, `cn()`, tokens, componentes em
  `src/components/ui/`). Nas páginas Astro, as **funções de variante** do shadcn (`buttonVariants`,
  `badgeVariants`, feitas com `cva`) são aplicadas em elementos nativos (`<a>`, `<span>`). Interatividade simples
  (tema, menu móvel, copiar e-mail) com script pequeno ou HTML nativo (`popover`). React 19 fica instalado para
  ilhas, se surgir algo complexo (ex.: paleta de comandos ⌘K).
- **Por que não usar os componentes React direto:** filhos passados do Astro para React chegam como HTML
  estático, o que quebra o `asChild` do Radix (botão que vira link). As variantes dão o mesmo visual, sem esse
  atrito e sem JS.
- **Alternativas:** componentes 100% Astro (Starwind UI), sem o ecossistema shadcn; shadcn como app React, com
  JavaScript desnecessário.
- **Consequências:** a home não carrega JavaScript de framework; `shadcn add` continua funcionando para novos
  componentes. O CLI `shadcn init` travou neste ambiente (prompts), por isso a instalação manual equivalente.

## ADR-004: conteúdo em content collections tipadas

- **Decisão:** projetos em MDX em `src/content/projects/` com schema Zod (título, resumo, papel, período,
  status, stack, métricas, links, telas). Dados curtos e estruturados (experiência, habilidades, formação,
  perfil) em TypeScript em `src/data/`.
- **Alternativas:** CMS headless (exagero para um autor só); tudo em JSON (perde o texto rico dos estudos de caso).
- **Consequências:** erro de conteúdo quebra o build (ex.: projeto sem `stack`); editar o site é editar arquivos.

## ADR-005: página única + páginas de estudo de caso

- **Decisão:** home com âncoras para triagem rápida; `/projetos/<slug>` para profundidade.
- **Alternativas:** várias páginas (sobre, projetos, contato) — mais cliques para o recrutador; só página única —
  sem espaço para estudo de caso.
- **Consequências:** recrutador resolve em 30 s na home; avaliador técnico aprofunda no estudo de caso.

## ADR-006: identidade "ficha técnica" em violeta (revisada em 2026-10-31)

- **Contexto:** a primeira versão usava vermelhão, Geist e grade de fundo. O Lucas pediu roxo (combina com o
  Fuja), animações e um visual que não pareça feito por IA. A pesquisa (seção 6 de `pesquisa-referencias.md`)
  listou as marcas desse visual: gradiente roxo-azul, texto em gradiente, aurora, vidro, Inter/Geist,
  eyebrows em caixa-alta, contador animado, fade em toda seção.
- **Decisão:** direção registrada em `docs/design.md`. Violeta uva como **único** acento sobre neutros
  frios com viés violeta; Schibsted Grotesk em títulos e texto (a Bricolage condensada da primeira
  tentativa ficou com ar de cartum), JetBrains Mono nos metadados; escala tipográfica contida; listas e linhas no lugar de grades de cartões iguais;
  um momento de animação orquestrado na abertura e microinterações ligadas à ação.
- **Alternativas:** manter o vermelhão (o Lucas preferiu roxo); roxo com gradiente e aurora (é exatamente o
  visual genérico); tema 3D/interativo (atrasa a triagem).
- **Consequências:** visual próprio e coerente com o Fuja; qualquer página nova precisa seguir `design.md`.

## ADR-007: português primeiro, pronto para inglês

- **Decisão:** v1 só em pt-BR, `lang="pt-BR"`. Textos de interface centralizados em `src/data/` para facilitar a
  versão `/en` depois, com o i18n nativo do Astro.
- **Alternativas:** bilíngue desde o início (dobra o trabalho de conteúdo antes do prazo).
- **Consequências:** entrega mais rápida; a versão em inglês entra no roadmap.

## ADR-008: Vercel sem adaptador, pnpm, Node 22+

- **Decisão:** deploy estático na Vercel (detecção automática do Astro), sem `@astrojs/vercel`. pnpm como
  gerenciador. `site` vem de `SITE_URL` e, sem ela, é `https://lucasgomes-portfolio.vercel.app`.
- **Alternativas:** adaptador Vercel (só necessário com SSR ou funções); Cloudflare Pages/Netlify (equivalentes).
- **Consequências:** preview por PR de graça; trocar de host é trivial.

## ADR-009: fontes auto-hospedadas via Fontsource

- **Decisão:** `@fontsource-variable/schibsted-grotesk` e `jetbrains-mono`, importadas no CSS.
- **Alternativas:** Fonts API do Astro (baixa no build; depende de rede); Google Fonts por link (requisição a
  terceiro, pior para privacidade e LCP).
- **Consequências:** build offline e determinístico; fontes servidas do mesmo domínio.

## ADR-010: processo leve no lugar do OpenSpec

- **Decisão:** documentação em `docs/` + roadmap por fases; sem OpenSpec neste repositório.
- **Por quê:** site estático, um autor, prazo curto; o custo de proposal/design/tasks por mudança não se paga.
  Os commits continuam em Conventional Commits em português.
- **Consequências:** se o site ganhar funcionalidades com lógica (formulário, blog com busca), reavaliar.
