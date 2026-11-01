export type ExperienceItem = {
  company: string;
  location: string;
  roles: { title: string; period: string }[];
  summary: string;
  bullets: string[];
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Diletta Solutions",
    location: "Campinas, SP",
    roles: [
      { title: "Desenvolvedor Júnior", period: "mai. 2026 — atual" },
      { title: "Estagiário em Desenvolvimento de Software", period: "jun. 2025 — mai. 2026" },
    ],
    summary:
      "Consultoria de software que atende bancos. Entrei como estagiário e fui efetivado depois de 11 meses.",
    bullets: [
      "Desenvolvo funcionalidades para os canais digitais de bancos, ligando o app ao core bancário por uma camada BFF.",
      "Trabalho com telas que o back-end monta em JSON (server-driven UI), em projetos de assinatura digital e de uma credenciadora de pagamentos.",
      "Cuido de pipelines de CI/CD, acompanho deploys no Google Cloud e ajudo a investigar e corrigir problemas em produção.",
    ],
    stack: [
      "TypeScript",
      "Node.js",
      ".NET",
      "Go",
      "PostgreSQL",
      "Google Cloud",
      "Azure",
      "Flutter",
      "React",
    ],
  },
  {
    company: "Bradesco",
    location: "Americana, SP",
    roles: [{ title: "Agente de Pré-Atendimento", period: "mar. 2025 — mai. 2025" }],
    summary:
      "Orientei clientes no uso dos caixas eletrônicos e dos canais digitais do banco. Foi meu primeiro contato com o setor, do lado de quem atende.",
    bullets: [],
    stack: [],
  },
];
