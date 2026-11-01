export type TimelineKind = "estudo" | "trabalho";

export type TimelineItem = {
  label: string;
  detail: string;
  kind: TimelineKind;
  start: string;
  end: string;
  ongoing?: boolean;
};

export const timelineRange = { start: "2022-01", end: "2027-12" } as const;

export const timeline: TimelineItem[] = [
  {
    label: "Técnico em Desenvolvimento de Sistemas",
    detail: "ETEC",
    kind: "estudo",
    start: "2022-02",
    end: "2024-12",
  },
  {
    label: "Tecnólogo em ADS",
    detail: "Fatec Americana",
    kind: "estudo",
    start: "2025-02",
    end: "2026-12",
    ongoing: true,
  },
  {
    label: "Pós-graduação",
    detail: "Arquitetura com IA",
    kind: "estudo",
    start: "2026-07",
    end: "2027-07",
    ongoing: true,
  },
  {
    label: "Diletta Solutions",
    detail: "estágio → desenvolvedor júnior",
    kind: "trabalho",
    start: "2025-06",
    end: "2026-10",
    ongoing: true,
  },
];

export const awards = [
  "Finalista da 12ª Mostra de Ciências e Tecnologia do Instituto 3M",
  "Destaque Prata na Competição USP de Conhecimentos e Oportunidades (CUCO), 2023 e 2024",
  "Prêmio Aluno Nota 10",
] as const;

export const certifications = [
  { name: "TOEIC", detail: "Test of English for International Communication" },
] as const;
