export const processSteps = [
  {
    step: "1",
    title: "Escrevo o plano antes do código",
    text: "Toda mudança começa com uma proposta curta, o desenho e a lista de tarefas (OpenSpec). Com IA ajudando a escrever código, é isso que mantém o projeto no rumo.",
  },
  {
    step: "2",
    title: "Anoto as decisões",
    text: "Quando escolho uma tecnologia ou um caminho, registro num ADR as opções que considerei e por que fiquei com uma delas.",
  },
  {
    step: "3",
    title: "Testo o que pode dar errado",
    text: "Testes com banco de verdade (Testcontainers), duas requisições ao mesmo tempo, a mesma requisição repetida e alguém tentando ver um dado que não é seu.",
  },
  {
    step: "4",
    title: "Não confio cegamente no modelo",
    text: "O modelo só recebe o que o usuário pode ver, a resposta é conferida antes de ir para a tela, e testes de red team tentam fazê-lo quebrar as regras.",
  },
] as const;
