# Estudo de perfil e estratégia de conteúdo

Base para tudo o que o site diz. Fontes: currículo, perfil do LinkedIn, descrição de perfil escrita pelo próprio
Lucas, protótipo do app Fuja e os repositórios `fuja-api`, `fuja_app`, `clickseguro-api` e `deliverius-ai`
(números conferidos no `git shortlog` em 2026-10-31).

## 1. Quem é o Lucas, em uma frase

Engenheiro de software com foco em back-end e IA generativa, que já leva LLMs para produto com cuidado de
produção (dados isolados por usuário, saída validada, red team, orçamento de chamadas) e agora está fechando a
parte de ML e avaliação com um projeto em Python.

## 2. Fatos verificados

| Tema                | Fato                                                                                                                                                                                                                                                                                      | Fonte               |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Emprego             | Diletta Solutions (Campinas): estagiário jun/2025 → júnior mai/2026 (efetivado após 11 meses)                                                                                                                                                                                             | Currículo, LinkedIn |
| Domínio no trabalho | Canais digitais bancários, BFF, integração com core, server-driven UI, assinatura digital, credenciadora de pagamentos, CI/CD, incidentes em produção                                                                                                                                     | Perfil              |
| Stack no trabalho   | TypeScript/Node, .NET, Go, PostgreSQL, Google Cloud, Azure, Flutter, React                                                                                                                                                                                                                | Perfil              |
| Fuja API            | .NET 10, Clean Architecture em 4 camadas, 62 endpoints, 1.400+ testes, 310 de 343 commits (~90%)                                                                                                                                                                                          | Repositório         |
| Fuja App            | Flutter, MVVM + Riverpod 3, cliente gerado do OpenAPI, 667 commits, todos dele                                                                                                                                                                                                            | Repositório         |
| Chatbot do Fuja     | Gemini; contexto montado no servidor (o modelo nunca vê dado de outro usuário); JSON com schema e citação; fallback; orçamento diário; filtro de links; red team                                                                                                                          | Repositório         |
| ClickSeguro         | App de educação digital para idosos com assistente de IA; NestJS + Gemini (chat de escopo fechado e análise de golpes, phishing e fake news em texto e imagem); regra "abaixo de 75% = incerto"; cache por hash; job LGPD de 30 dias; JWT com 2 audiências e 3 papéis; 105 de 110 commits | Repositório         |
| Deliverius AI       | Em desenvolvimento: agente de atendimento (Python, FastAPI, LangGraph, pgvector, BERTimbau, LightGBM, evals). Fundação concluída                                                                                                                                                          | Repositório         |
| Formação            | Tecnólogo ADS na Fatec Americana (dez/2026); pós em Arquitetura de Software com IA (2026–2027); técnico DS na ETEC                                                                                                                                                                        | Currículo           |
| Prêmios             | Finalista da 12ª Mostra de Ciências e Tecnologia do Instituto 3M; Destaque Prata na CUCO (USP) 2023 e 2024                                                                                                                                                                                | LinkedIn            |
| Idiomas             | Português nativo; inglês intermediário (TOEIC)                                                                                                                                                                                                                                            | LinkedIn            |

## 3. Diferenciais (o que o site precisa provar)

1. **IA com engenharia de verdade.** Não é "integrei a API do ChatGPT": é isolamento de dados, saída
   estruturada validada, recusa conservadora, red team, custo controlado. Esse é o argumento central.
2. **Dono do projeto de ponta a ponta.** Arquitetura, API, app, CI/CD, segurança e deploy, nos dois projetos.
3. **Volume e disciplina comprováveis.** 1.400+ testes, 62 endpoints, 660+ commits, pipeline DevSecOps com cinco
   ferramentas. Números concretos convencem mais do que adjetivos.
4. **Processo moderno com IA.** Desenvolvimento orientado a especificação (OpenSpec + Claude Code), decisões
   registradas com alternativas.
5. **Experiência real em ambiente crítico.** Setor bancário, produção, incidentes.

## 4. Lacunas e como o site lida com elas (honestidade)

| Lacuna                                               | Tratamento no site                                                                                             |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Python e ML ainda não publicados                     | O Deliverius AI aparece com status "em desenvolvimento" e roadmap; nada é anunciado como pronto antes de estar |
| Repositórios do Fuja e do ClickSeguro ainda privados | Campo `repo` no conteúdo com estado `privado`; o botão vira "repositório em breve" até a publicação            |
| Fuja sem usuários reais                              | Texto diz "projeto acadêmico", sem inventar métricas de uso                                                    |
| Inglês intermediário                                 | Site em português na v1; versão em inglês fica para depois (ADR-007)                                           |

Regra geral: **todo número do site tem de ser verificável** no repositório ou no currículo. Por decisão do Lucas
(2026-10-31), contagens de commits e de testes ficam fora do site: o destaque vai para habilidades, formação e
tempo de estudo.

## 5. Público e o que cada um procura

| Leitor               | Tempo    | O que precisa achar                                                             |
| -------------------- | -------- | ------------------------------------------------------------------------------- |
| Recrutador           | ~30 s    | Quem é, o que faz, onde trabalha, se está disponível, currículo em PDF, contato |
| Engenheiro avaliador | 3–10 min | Estudos de caso com decisões e trade-offs, links para código, arquitetura       |
| Liderança            | 1–3 min  | Impacto, ambição, como pensa e aprende                                          |

## 6. Mensagem

- **Título:** Lucas Gomes — Engenheiro de software · back-end e IA generativa.
- **Proposta de valor (hero):** "Construo sistemas com IA que dá para colocar em produção: dados isolados por
  usuário, respostas validadas e custo sob controle."
- **Tom:** direto, técnico sem jargão vazio, primeira pessoa, frases curtas. Sem "apaixonado por tecnologia".
- **Chamadas para ação:** ver projetos · baixar currículo · falar comigo (e-mail e LinkedIn).

## 7. Arquitetura da informação

```
/                       página única com âncoras
  #inicio               nome, papel, proposta, CTAs, disponibilidade
  (faixa de números)    1.400+ testes · 62 endpoints · 660+ commits · 1 ano e 5 meses em banco
  #projetos             Deliverius AI (destaque), Fuja, ClickSeguro
  #experiencia          linha do tempo
  #como-trabalho        processo: especificação → decisão → teste → segurança
  #habilidades          agrupadas por nível de prova (produção · projetos · estudando)
  #formacao             formação e prêmios
  #contato              e-mail, LinkedIn, GitHub, currículo
/projetos/<slug>        estudo de caso: problema, papel, arquitetura, decisões, IA, resultados, stack, telas
/404
```

## 8. Dados de contato expostos

E-mail, LinkedIn e GitHub. **Telefone fica fora do HTML** para evitar spam. O PDF do currículo contém o
telefone; decidir antes de publicar se o PDF vai assim ou numa versão sem telefone.
