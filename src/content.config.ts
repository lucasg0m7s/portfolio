import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      summary: z.string(),
      role: z.string(),
      period: z.string(),
      status: z.enum(["em-desenvolvimento", "concluido", "academico"]),
      order: z.number().int(),
      featured: z.boolean().default(false),
      stack: z.array(z.string()).min(1),
      highlights: z.array(z.string()).min(1).max(4),
      metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      flow: z.array(z.string()).default([]),
      links: z
        .array(
          z.object({
            label: z.string(),
            href: z.url(),
            kind: z.enum(["repo", "demo", "prototype", "article", "other"]),
          }),
        )
        .default([]),
      repoStatus: z.enum(["publico", "privado"]),
      screens: z
        .array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() }))
        .default([]),
    }),
});

export const collections = { projects };
