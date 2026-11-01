# CLAUDE.md

Portfólio pessoal do Lucas Gomes. Astro 7 estático + Tailwind 4 + shadcn/ui, deploy na Vercel.
Leia `docs/arquitetura.md` e `docs/decisoes-arquitetura.md` antes de mudar estrutura ou stack, e
`docs/design.md` antes de mexer em visual ou texto.

## Convenções

- Código e identificadores em inglês; textos do site, documentação e commits em português.
- Commits em Conventional Commits 1.0.0 (pt-BR). Não commitar nem publicar sem pedido explícito.
- Gerenciador: pnpm. Antes de entregar: `pnpm format`, `pnpm check` e `pnpm build` sem erros.
- Servidor de desenvolvimento em segundo plano: `pnpm astro dev --background` (`astro dev stop` para parar).

## Regras do projeto

- **Zero JS por padrão.** Componentes React do shadcn só com `client:*` se forem realmente interativos; em
  Astro, prefira as funções de variante (`buttonVariants`, `badgeVariants`) em elementos nativos.
- **Conteúdo fora dos componentes:** projetos em `src/content/projects/*.mdx`, o resto em `src/data/`.
- **Todo número ou afirmação no site tem de ser verificável** no repositório ou no currículo. Projeto em
  andamento aparece como em andamento.
- **Este repositório é público e genérico:** não citar processos seletivos, empresas para as quais o Lucas está
  se candidatando nem recrutadores. Contexto pessoal fica em `CLAUDE.local.md` (no `.gitignore`).
- **Acessibilidade WCAG 2.2 AA:** contraste conferido nos dois temas, foco visível, `alt` em toda imagem,
  movimento desligado com `prefers-reduced-motion`.
- Telefone não aparece no HTML.

## Mapa

```
src/content/projects/   estudos de caso (MDX)
src/data/               perfil, experiência, habilidades, formação, números, navegação
src/components/         ui/ (shadcn), layout/, sections/, project/
src/styles/global.css   tokens, tema claro/escuro, utilitários
scripts/og.html         modelo da imagem de compartilhamento (pnpm og)
```
