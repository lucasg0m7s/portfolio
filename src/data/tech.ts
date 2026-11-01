import * as icons from "simple-icons";

export type Tech = {
  name: string;
  slug?: string;
};

type SimpleIcon = { path: string; hex: string; title: string };

export function getIcon(slug?: string): SimpleIcon | undefined {
  if (!slug) return undefined;
  const key = `si${slug[0]!.toUpperCase()}${slug.slice(1)}` as keyof typeof icons;
  const icon = icons[key] as SimpleIcon | undefined;
  return icon?.path ? icon : undefined;
}

const slugRules: [RegExp, string][] = [
  [/python/i, "python"],
  [/fastapi/i, "fastapi"],
  [/langgraph/i, "langgraph"],
  [/postgres/i, "postgresql"],
  [/bertimbau|hugging/i, "huggingface"],
  [/mlflow/i, "mlflow"],
  [/\.net|c#|ef core/i, "dotnet"],
  [/flutter/i, "flutter"],
  [/riverpod|dart/i, "dart"],
  [/gemini/i, "googlegemini"],
  [/docker/i, "docker"],
  [/github actions/i, "githubactions"],
  [/nest/i, "nestjs"],
  [/typescript/i, "typescript"],
  [/prisma/i, "prisma"],
  [/zod/i, "zod"],
  [/jest/i, "jest"],
  [/redis/i, "redis"],
  [/react/i, "react"],
  [/next/i, "nextdotjs"],
];

export function techSlug(name: string): string | undefined {
  return slugRules.find(([pattern]) => pattern.test(name))?.[1];
}
