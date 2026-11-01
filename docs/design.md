# Direção de design

Escrita em 2026-10-31, depois da pesquisa sobre o que faz um site parecer gerado por IA (seção 6 de
`pesquisa-referencias.md`). Toda página nova segue este arquivo; se algo aqui mudar, muda aqui primeiro.

## Ideia

**Ficha técnica de engenharia.** O site se lê como a documentação bem-feita de um sistema: tipografia forte,
dados reais em destaque, metadados em mono, nada decorativo que não diga algo verdadeiro. O tom é sóbrio:
hierarquia clara, roxo só em detalhes e espaço generoso.

## Cor (5 papéis)

| Token                          | Papel                                                | Claro                                      | Escuro               |
| ------------------------------ | ---------------------------------------------------- | ------------------------------------------ | -------------------- |
| `paper` (`--background`)       | Fundo                                                | branco frio com viés violeta               | quase preto violeta  |
| `ink` (`--foreground`)         | Texto e traços fortes                                | violeta muito escuro                       | branco frio          |
| `muted` (`--muted-foreground`) | Texto secundário                                     | cinza violeta (≥ 4,5:1)                    | cinza violeta claro  |
| `line` (`--border`)            | Divisórias                                           | cinza violeta claro                        | cinza violeta escuro |
| `violet` (`--primary`)         | **Único acento**: links, foco, um destaque por bloco | uva saturada, escura o bastante para texto | lavanda clara        |

O roxo conversa com o Fuja (#5B5FEF), mas é um uva mais profundo, e não o índigo padrão do Tailwind.
**Sem gradiente em texto, sem aurora, sem vidro fosco.** Ponto colorido só para estado real (projeto em
andamento).

## Tipografia

Revisada em 2026-10-31: a Bricolage Grotesque condensada ficou com ar de cartum e o Lucas pediu algo mais
profissional.

| Papel           | Fonte                                     | Uso                                                                                                   |
| --------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Títulos e texto | **Schibsted Grotesk** (variável, 400–900) | Uma família só, em peso 600 nos títulos e 400 no texto; desenhada para jornal, lê como sóbria e séria |
| Mono            | **JetBrains Mono** (variável)             | Metadados, datas, números, stack                                                                      |

Escala contida: nome em até ~5,25rem, títulos de seção em ~2,6rem, corpo em 1,0625rem. Peso 600 no máximo nos
títulos; nada condensado. Proibidas: Inter, Roboto, Space Grotesk, Geist e fontes display "com personalidade"
(Bricolage, Clash, Syne), que puxam para o lúdico.

## Layout

- Abertura assimétrica: nome + tese à esquerda; retrato com legenda em mono à direita.
- Seções abrem com título display e, à direita, uma nota em mono que diz algo verdadeiro
  ("3 projetos", "desde jun. 2025"). Sem eyebrow em caixa-alta acima de cada título.
- Raio e elevação variam por hierarquia: botões em pílula, cartões de projeto com 10px, etiquetas com 4px,
  retrato com 6px. Sombra só no retrato e nas telas de app.
- Listas e linhas no lugar de grades de cartões iguais sempre que o conteúdo for tabular (experiência,
  formação).

## Movimento

- **Um momento orquestrado:** a entrada da abertura, com atraso escalonado e deslocamento curto.
- Microinterações ligadas à ação: hover dos projetos (as telas sobem, um brilho segue o cursor), sublinhado
  dos links, ícones das tecnologias ganhando cor.
- Transição entre páginas: o título do projeto "viaja" do cartão até o estudo de caso (View Transitions).
- Barra de progresso de leitura só no estudo de caso.
- **Sem** contador animado, sem fade em toda seção, sem faixa de logos rolando, sem easing com quique.
- Tudo desligado com `prefers-reduced-motion`.

## Texto

Primeira pessoa, frases curtas, verbos concretos. Proibido: "apaixonado por tecnologia", "elevar", travessão
como aparte, "não é X, é Y", números que não dá para comprovar. Botão diz o que faz.
