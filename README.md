# Portfólio · Lucas Gomes

Site pessoal com quem sou, meus projetos principais (Deliverius AI, Fuja e ClickSeguro), experiência e
habilidades. Estático, rápido e sem rastreamento.

| Parte       | Tecnologia                                                                       |
| ----------- | -------------------------------------------------------------------------------- |
| Framework   | [Astro 7](https://astro.build), saída estática                                   |
| Estilo      | Tailwind CSS 4, tokens no padrão do [shadcn/ui](https://ui.shadcn.com)           |
| Componentes | shadcn/ui (variantes com `cva`) e componentes Astro; React disponível para ilhas |
| Conteúdo    | Content collections em MDX com schema Zod                                        |
| Fontes      | Schibsted Grotesk e JetBrains Mono (Fontsource)                                  |
| Deploy      | Vercel                                                                           |

## Rodando localmente

Pré-requisitos: Node.js 22+ e pnpm.

```bash
pnpm install
pnpm dev        # http://localhost:4321
```

| Comando                             | O que faz                                                                |
| ----------------------------------- | ------------------------------------------------------------------------ |
| `pnpm build`                        | Gera o site em `dist/`                                                   |
| `pnpm preview`                      | Serve o `dist/` localmente                                               |
| `pnpm check`                        | Checagem de tipos do Astro                                               |
| `pnpm format` / `pnpm format:check` | Prettier com plugins de Astro e Tailwind                                 |
| `pnpm og`                           | Regera `public/og.png` a partir de `scripts/og.html` (precisa do Chrome) |

## Editando o conteúdo

- **Projetos:** um arquivo `.mdx` por projeto em `src/content/projects/`. O schema fica em
  `src/content.config.ts`; campo faltando quebra o build.
- **Perfil, experiência, habilidades, formação e números:** `src/data/`.
- **Imagens dos projetos:** `src/assets/projects/<slug>/` (otimizadas no build).
- **Currículo:** não fica no site, para não expor o telefone; é enviado por e-mail ou LinkedIn.

## Deploy

Importar o repositório na Vercel; o Astro é detectado sozinho. Opcional: `SITE_URL` com o domínio final
(senão usa a URL de produção da Vercel). Cabeçalhos de segurança e cache em `vercel.json`.

## Documentação

- [`docs/estudo-perfil.md`](docs/estudo-perfil.md): estudo de perfil e estratégia de conteúdo
- [`docs/pesquisa-referencias.md`](docs/pesquisa-referencias.md): pesquisa de stack, referências de UI/UX e boas práticas
- [`docs/design.md`](docs/design.md): direção de design (cor, tipo, layout, movimento, texto)
- [`docs/decisoes-arquitetura.md`](docs/decisoes-arquitetura.md): decisões com alternativas
- [`docs/arquitetura.md`](docs/arquitetura.md): estrutura, design system e qualidade
- [`docs/roadmap.md`](docs/roadmap.md): o que está pronto e o que vem depois
