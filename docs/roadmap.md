# Roadmap

## Fase 0: planejamento (concluída em 2026-10-31)

- [x] Estudo de perfil e estratégia de conteúdo (`estudo-perfil.md`)
- [x] Pesquisa de stack e de referências de UI/UX (`pesquisa-referencias.md`)
- [x] Decisões de arquitetura (`decisoes-arquitetura.md`) e arquitetura (`arquitetura.md`)

## Fase 1: fundação e v1 da home (em andamento)

- [x] Projeto Astro 7 + Tailwind 4 + React 19 + MDX + sitemap, pnpm
- [x] shadcn configurado manualmente (`components.json`, `cn()`, tokens)
- [x] Design system em `global.css` (cores, fontes, tema claro/escuro)
- [x] Layout base com SEO, tema sem flash, link de pular conteúdo
- [x] Seções da home: hero, números, projetos, experiência, como trabalho, habilidades, formação, contato
- [x] Content collection de projetos e estudos de caso (Deliverius AI, Fuja, ClickSeguro)
- [x] Página 404, sitemap, robots.txt, Open Graph (`pnpm og`) e JSON-LD
- [x] Cabeçalhos de segurança e cache no `vercel.json`
- [ ] Revisão de texto pelo Lucas (todo número e afirmação)
- [x] Redesenho: violeta, nova tipografia, foto, ícones, logos das instituições, animações (`design.md`)
- [x] Seção "Sobre mim" e textos revisados
- [x] Imagem Open Graph com foto
- [x] Fonte trocada para Schibsted Grotesk e escala contida (pedido: mais profissional)
- [x] Números de commits e testes removidos; destaque para habilidades técnicas, comportamentais e aprendizado
- [x] Formação com linha do tempo 2022–2027

## Fase 2: publicação

- [x] Currículo fora do site: sem PDF público, para não expor o telefone (pedido por e-mail ou LinkedIn)
- [ ] Criar o repositório no GitHub e conectar na Vercel
- [ ] Domínio próprio (opcional; `.dev` combina com engenharia) e `SITE_URL`
- [ ] Lighthouse 100 nas quatro categorias no preview; teste com teclado e NVDA
- [ ] Conferir o layout em 360–390 px num celular real ou no modo dispositivo do DevTools
- [ ] CSP com hash dos scripts inline
- [ ] Trocar `repoStatus` para `publico` quando Fuja e ClickSeguro forem abertos
- [ ] Link do portfólio no LinkedIn, no GitHub e no currículo

## Fase 3: evolução

- [ ] Atualizar o estudo de caso do Deliverius AI a cada marco (números de avaliação, links do Hugging Face e Kaggle)
- [ ] Seção de artigos (MDX), começando pelo artigo do Deliverius AI
- [ ] Versão em inglês (`/en`) com o i18n do Astro
- [ ] Vercel Web Analytics (sem cookies) se fizer sentido medir visitas
- [ ] Paleta de comandos ⌘K (primeira ilha React, se valer a pena)
