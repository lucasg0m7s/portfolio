import type { Tech } from "./tech";

export type SkillGroup = {
  title: string;
  evidence: string;
  description: string;
  items: Tech[];
};

export const strengths = [
  {
    title: "Back-end",
    text: "Onde tenho mais experiência. Faço APIs em .NET e Node, integro com sistemas antigos e organizo o código para durar.",
    icons: ["dotnet", "nestjs", "postgresql"],
  },
  {
    title: "Front e mobile",
    text: "Também faço tela. Construí sozinho o app Flutter do Fuja e, no trabalho, uso React e telas montadas pelo back-end.",
    icons: ["flutter", "react"],
  },
  {
    title: "IA generativa",
    text: "Coloco LLMs em produto cuidando do que o modelo pode ver, do formato da resposta e de quanto cada chamada custa.",
    icons: ["googlegemini", "claude"],
  },
  {
    title: "Qualidade e entrega",
    text: "Escrevo testes com banco de verdade, coloco checagens de segurança no CI e acompanho o deploy até o fim.",
    icons: ["githubactions", "docker"],
  },
] as const;

export const skillGroups: SkillGroup[] = [
  {
    title: "Back-end",
    evidence: "Uso no trabalho e nos projetos",
    description:
      "É onde tenho mais estrada. APIs REST bem organizadas, autenticação, banco relacional e contrato da API versionado junto com o código.",
    items: [
      { name: ".NET · C#", slug: "dotnet" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "NestJS", slug: "nestjs" },
      { name: "Go", slug: "go" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Prisma", slug: "prisma" },
      { name: "Redis", slug: "redis" },
      { name: "OpenAPI", slug: "openapiinitiative" },
    ],
  },
  {
    title: "IA generativa",
    evidence: "Nos projetos, com testes",
    description:
      "Integro LLMs com resposta em formato fixo, contexto montado pelo servidor e testes que tentam fazer o modelo quebrar as regras.",
    items: [
      { name: "Google Gemini", slug: "googlegemini" },
      { name: "Prompt engineering" },
      { name: "JSON Schema", slug: "json" },
      { name: "Guardrails" },
      { name: "Red teaming" },
      { name: "Claude Code", slug: "claude" },
    ],
  },
  {
    title: "Qualidade e segurança",
    evidence: "Pipelines que eu montei",
    description:
      "Testes rodando contra banco de verdade, ferramentas de segurança no CI e cuidado com LGPD desde o começo do projeto.",
    items: [
      { name: "xUnit" },
      { name: "Testcontainers" },
      { name: "Jest", slug: "jest" },
      { name: "Gitleaks" },
      { name: "Semgrep" },
      { name: "Trivy", slug: "trivy" },
      { name: "OWASP ZAP", slug: "owasp" },
    ],
  },
  {
    title: "Front, mobile e cloud",
    evidence: "Onde o time precisar",
    description:
      "Fiz o app Flutter do Fuja do zero e uso React no trabalho. Também cuido de container, deploy e configuração de ambiente.",
    items: [
      { name: "Flutter", slug: "flutter" },
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "Firebase", slug: "firebase" },
      { name: "Docker", slug: "docker" },
      { name: "GitHub Actions", slug: "githubactions" },
      { name: "Google Cloud", slug: "googlecloud" },
      { name: "Azure" },
      { name: "Vercel", slug: "vercel" },
    ],
  },
];

export const softSkills = [
  {
    title: "Vou até o fim",
    text: "No Fuja e no ClickSeguro, não parei no código: configurei contas, serviços, notificações e o deploy.",
  },
  {
    title: "Visão do sistema inteiro",
    text: "Já mexi em app, web, API, banco e pipeline. Isso me ajuda a perceber antes onde uma mudança pode quebrar alguma coisa.",
  },
  {
    title: "Calma com problema em produção",
    text: "No trabalho, investigo e corrijo incidentes em sistemas de banco, onde um erro custa caro de verdade.",
  },
  {
    title: "Deixo tudo anotado",
    text: "Escrevo o que decidi e por quê. Assim, quem chega depois não precisa adivinhar nem me perguntar.",
  },
  {
    title: "Comunicação",
    text: "Consigo explicar coisa técnica para quem não é da área. Aprendi atendendo clientes no banco e apresentando eventos.",
  },
  {
    title: "Trabalho em time",
    text: "Nos projetos da faculdade, assumi o que estava parado e ajudei os colegas em outras frentes quando precisaram.",
  },
] as const;

export const learning = {
  description:
    "Quero ir mais fundo em engenharia de IA e machine learning, e estou aprendendo do jeito que funciona melhor para mim: construindo um projeto.",
  tracks: [
    {
      title: "Python e machine learning",
      where: "Deliverius AI",
      text: "Classificação de intenção com BERTimbau, antifraude com LightGBM, MLflow e publicação no Hugging Face.",
      items: [
        { name: "Python", slug: "python" },
        { name: "scikit-learn", slug: "scikitlearn" },
        { name: "Hugging Face", slug: "huggingface" },
        { name: "MLflow", slug: "mlflow" },
      ],
    },
    {
      title: "Agentes e RAG",
      where: "Deliverius AI",
      text: "Agente com LangGraph que usa ferramentas, busca híbrida com pgvector e avaliação com clientes simulados.",
      items: [
        { name: "LangGraph", slug: "langgraph" },
        { name: "FastAPI", slug: "fastapi" },
        { name: "pgvector", slug: "postgresql" },
      ],
    },
    {
      title: "Arquitetura de software com IA",
      where: "Pós-graduação, 2026–2027",
      text: "Arquitetura limpa e hexagonal, sistemas distribuídos, mensageria e desenho de sistemas com IA.",
      items: [],
    },
    {
      title: "Cloud e observabilidade",
      where: "Plano de estudos",
      text: "Observabilidade com OpenTelemetry, práticas de SRE e arquitetura em nuvem.",
      items: [],
    },
  ],
} as const;
