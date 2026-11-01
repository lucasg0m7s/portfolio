# Pesquisa: stack, referências de UI/UX e boas práticas

Pesquisa feita em 2026-10-31. Versões conferidas no registro do npm no mesmo dia.

## 1. Stack: o que a pesquisa diz

| Opção       | A favor                                                                                                                                                           | Contra                                                                              | Encaixe num portfólio estático |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------ |
| **Astro 7** | HTML estático por padrão, zero JS se nada for interativo; ilhas para o que precisa de JS; content collections tipadas; o melhor LCP entre os três nas comparações | Menos conhecido que Next.js                                                         | **Melhor**                     |
| Next.js 16  | Ecossistema React, ótimo na Vercel                                                                                                                                | Feito para app com servidor; export estático tem limitações e manda o runtime React | Exagero                        |
| SvelteKit   | Leve, bom para apps interativos                                                                                                                                   | Modo estático exige adapter e contornos; tira o shadcn/React do jogo                | Bom, mas sem vantagem aqui     |

Consenso das fontes: para portfólio, blog ou documentação, **comece com Astro**; Next.js só se precisar de
back-end. Astro roda na Vercel sem adaptador quando a saída é estática.

**Astro 7** (atual: 7.4.4): compilador reescrito em Rust, Vite 8 com Rolldown (builds 15–61% mais rápidos),
cache de rotas estável.

### Tailwind CSS 4.3 e shadcn/ui

- Tailwind 4 configura tudo no CSS (`@theme`), sem `tailwind.config.js`; no Astro entra pelo plugin
  `@tailwindcss/vite`.
- shadcn/ui tem guia oficial para Astro. Os componentes são React. **Ponto-chave:** no Astro, um componente React
  **sem** diretiva `client:*` é renderizado no build e vira HTML puro, sem mandar React para o navegador. Então dá
  para usar Button, Badge e Card do shadcn sem custo de JavaScript; só os interativos viram ilhas.
- O CLI `shadcn init` travou neste ambiente (prompts interativos). A instalação manual equivalente está no
  [guia oficial](https://ui.shadcn.com/docs/installation/manual): `components.json`, `cn()` e variáveis de tema.

**Veredito:** a stack que o Lucas pensou (Astro + Tailwind + shadcn) está validada. O ajuste é de uso: shadcn
como sistema de tokens e componentes renderizados no build, e não como app React.

## 2. Referências de portfólios

| Referência                           | O que aproveitar                                                                                                                                                 |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Brittany Chiang (brittanychiang.com) | Coluna fixa com nome, papel e menu à esquerda; experiência e projetos rolando à direita; cada item com as tecnologias em etiquetas; link "pular para o conteúdo" |
| Tom Weightman                        | A home é uma lista do que ele entregou: prova antes de adjetivo                                                                                                  |
| Tania Rascia                         | Linha do tempo curta da carreira logo na home                                                                                                                    |
| Lee Robinson (leerob.com)            | Minimalismo tipográfico, texto curto e escaneável, nada que atrapalhe a leitura                                                                                  |
| Rauno Freiberg / Emil Kowalski       | Microinterações discretas e com propósito; atenção a detalhes de foco, hover e movimento                                                                         |
| Bruno Simon                          | Contra-exemplo para o nosso público: interativo e memorável, mas o "divertido" atrasa quem decide contratar                                                      |

## 3. Referências de landing pages modernas

Linear, Vercel, Resend, Raycast e similares repetem um vocabulário que dá para aplicar com moderação:

- **Bento grid** para destacar projetos com tamanhos diferentes conforme a importância.
- **Hero mínimo**: uma frase forte, um parágrafo, dois botões.
- **Etiquetas em fonte mono** (eyebrows) acima dos títulos, com aspecto de engenharia.
- **Faixa de números** como prova social.
- **Bordas finas e superfícies sutis** em vez de sombras pesadas; fundo com textura leve (grade ou ruído).
- **Dark mode bem feito**, não só cores invertidas.
- **Movimento mínimo que dá sentido** (revelar ao rolar, transição entre páginas), nunca rolagem sequestrada.

## 4. O que recrutadores e avaliadores procuram

- **~30 segundos na primeira passada:** carregou rápido? parece profissional? tem projetos relevantes?
- **Estudos de caso nos 2–3 projetos principais:** problema, abordagem, desafios, resultado e o que faria
  diferente. "Screenshot mostra como parece; estudo de caso mostra como você pensa."
- **Link para o código e para a coisa funcionando.** Cada estudo de caso aponta para o repositório e o
  repositório aponta de volta.
- **Sinais de alerta:** resultado ausente, trabalho desatualizado, descrição genérica, projeto de tutorial.
- **Poucas páginas:** home com destaques, páginas de projeto, sobre e contato.
- O portfólio serve ao leitor não técnico; o GitHub, ao técnico. O site precisa servir aos dois.

## 5. Boas práticas adotadas

### Acessibilidade (WCAG 2.2 AA)

- Contraste de 4,5:1 em texto normal e 3:1 em texto grande e componentes, **conferido também no modo escuro**.
- Foco visível com `:focus-visible` e `outline` (não `box-shadow`, que some no modo de alto contraste do Windows).
- `prefers-reduced-motion` desliga animações (técnica C39 do W3C).
- Link "pular para o conteúdo", HTML semântico (`header`, `main`, `nav`, `section` com título), `alt` em toda
  imagem, alvo de toque de pelo menos 24×24 px.
- Teste: Lighthouse/axe + navegação só pelo teclado + leitor de tela (NVDA).

### Performance

- Meta: Lighthouse 100 em desempenho, acessibilidade, boas práticas e SEO; LCP < 1,5 s; CLS = 0.
- Zero JavaScript de framework na home; scripts só inline e pequenos (tema).
- Imagens pelo `astro:assets` (WebP/AVIF, dimensões fixas, `loading="lazy"` abaixo da dobra).
- Fontes variáveis auto-hospedadas (sem requisição ao Google Fonts).

### SEO e compartilhamento

- `title` e `description` por página, `canonical`, Open Graph e Twitter Card com imagem.
- JSON-LD `Person` (nome, cargo, links `sameAs`) e `CreativeWork` nos projetos.
- `sitemap.xml` e `robots.txt`.

## 6. Como não parecer site feito por IA (2026-10-31)

Pedido do Lucas depois da primeira versão. Fontes: Capital & Compute, Fountain Institute, Anthropic
(frontend-design skill), prg.sh e o guia de design do servidor de artifacts.

| Marca de "feito por IA"                                                                      | O que fizemos                                                                                   |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Gradiente roxo-azul, texto em gradiente, aurora, vidro fosco                                 | Um único acento violeta, sem gradiente em texto nem fundo decorativo                            |
| Inter, Roboto, Geist, Space Grotesk                                                          | Bricolage Grotesque (display) + Instrument Sans (texto) + JetBrains Mono (metadados)            |
| Contraste tímido de tipo (400 vs 600, 1,5×)                                                  | Nome em ~10rem, peso 800, largura condensada, contra corpo de 17px                              |
| Eyebrow em caixa-alta acima de cada título, marcadores 01/02 em coisas que não são sequência | Título display + nota em mono que diz algo verdadeiro; números só no processo (é uma sequência) |
| Fade-and-slide em toda seção, contador animado, faixa de logos rolando                       | Uma entrada orquestrada na abertura; hover nos projetos; título que viaja até o estudo de caso  |
| Mesmo cartão arredondado em tudo                                                             | Raio e elevação por hierarquia; listas e linhas para experiência, formação e habilidades        |
| Frases de efeito e números inventados                                                        | Texto em primeira pessoa, sem travessão de aparte nem "não é X, é Y"; todo número verificável   |

### Tipografia escolhida

- Primeira tentativa: Bricolage Grotesque condensada em peso 800. Ficou com ar de cartum e pouco profissional.
- **Schibsted Grotesk** (atual): grotesca desenhada para o jornal Schibsted, séria e legível, com personalidade
  discreta; menos comum que Inter e Geist. Usada em títulos e texto para dar unidade.
- **JetBrains Mono:** mono de engenharia para datas, números e stack.

### Cor

Roxo pedido pelo Lucas e alinhado ao Fuja (#5B5FEF), em versão uva mais profunda
(`oklch(0.47 0.21 291)` no claro, lavanda `oklch(0.78 0.12 292)` no escuro), sobre neutros frios com viés
violeta. Contraste conferido nos dois temas.

### Referências adicionais

- [Fix AI slop in web design, tell by tell (Capital & Compute)](https://capitalandcompute.net/blog/fix-ai-slop-design/)
- [7 tells that a UI is AI-generated (Fountain Institute)](https://pages.thefountaininstitute.com/posts/7-tells-that-a-ui-is-ai-generated)
- [Improving frontend design through Skills (Anthropic)](https://claude.com/resources/articles/improving-frontend-design-through-skills)
- [Why your AI keeps building the same purple gradient website (prg.sh)](https://prg.sh/ramblings/Why-Your-AI-Keeps-Building-the-Same-Purple-Gradient-Website)
- [AI purple problem (DEV)](https://dev.to/jaainil/ai-purple-problem-make-your-ui-unmistakable-3ono) · [Violet shadcn theme](https://designrevision.com/shadcn-themes/violet)
- [Best new Google Fonts 2026](https://madegooddesigns.com/best-new-google-fonts-2026/) · [Awwwards: portfolios](https://www.awwwards.com/inspiration_search/winner_category_portfolio/)
- [CSS view transitions e scroll animations 2026](https://blog.codercops.com/blog/css-view-transitions-scroll-animations-2026)

## Fontes

- [Next.js vs Astro vs SvelteKit 2026 (PkgPulse)](https://www.pkgpulse.com/guides/nextjs-vs-astro-vs-sveltekit-2026)
- [Astro vs Next.js in 2026 (Kunal Ganglani)](https://www.kunalganglani.com/blog/astro-vs-nextjs-2026.md)
- [Astro vs Next.js para sites estáticos (EastonDev)](https://eastondev.com/blog/en/posts/dev/20251202-astro-vs-nextjs-static-site/)
- [Next.js vs Astro vs SvelteKit (PDP Spectra)](https://pdpspectra.com/blog/next-vs-astro-vs-remix-2026)
- [Astro 7.0 (resumo)](https://feedbagel.com/post/astro-70) · [What's new July 2026 (Astro)](https://astro.build/blog/whats-new-july-2026)
- [Astro: styling e Tailwind](https://docs.astro.build/en/guides/styling/) · [Astro: fonts](https://docs.astro.build/en/guides/fonts/) · [Astro: content collections](https://docs.astro.build/en/guides/content-collections/)
- [shadcn/ui: instalação no Astro](https://ui.shadcn.com/docs/installation/astro) · [instalação manual](https://ui.shadcn.com/docs/installation/manual)
- [Shadcn + Astro 6 + Tailwind 4 (zenn.dev)](https://zenn.dev/kikiki_kiki/scraps/19c2718c6b63aa) · [Starwind UI](https://astro.build/themes/details/starwind-ui/)
- [21 Best Developer Portfolios 2026 (Colorlib)](https://colorlib.com/wp/developer-portfolios/) · [Software Engineer Portfolios (Sitebuilder Report)](https://www.sitebuilderreport.com/inspiration/software-engineer-portfolios) · [Web Developer Portfolio Examples (Elementor)](https://elementor.com/blog/best-web-developer-portfolio-examples/)
- [10 minimal portfolio examples (Scrimba)](https://scrimba.com/articles/minimal-web-developer-portfolio-examples/) · [Personal website for engineers (techinterview.org)](https://www.techinterview.org/post/3233474627/personal-website-portfolio-engineers/)
- [Portfolio that gets you hired (Scrimba)](https://scrimba.com/articles/how-to-build-a-web-developer-portfolio-that-gets-you-hired/) · [Portfolio checklist (devplaybook)](https://devplaybook.cc/blog/developer-portfolio-checklist-20-things-hiring-managers) · [Proof of work in the age of AI](https://simeononsecurity.com/software-development-career-playbook/getting-started-in-software-development/building-a-developer-portfolio/) · [What gets attention (Hyperskill)](https://hyperskill.org/blog/post/building-a-developer-portfolio-in-2026-what-actually-gets-attention)
- [SaaS landing page trends 2026 (SaaSFrame)](https://www.saasframe.io/blog/10-saas-landing-page-trends-for-2026-with-real-examples) · [App landing page trends 2026](https://theswiftk.it.com/blog/app-landing-page-design-trends-2026) · [Landing page trends (Zoho)](https://www.zoho.com/landingpage/landing-page-design-trends.html)
- [WCAG 2.2 Techniques changelog (W3C)](https://www.w3.org/WAI/WCAG22/Techniques/changelog.html) · [Focus appearance guide](https://allaccessible.org/blog/wcag-2413-focus-appearance-guide)
