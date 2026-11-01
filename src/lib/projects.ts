import { getCollection, type CollectionEntry } from "astro:content";

export type Project = CollectionEntry<"projects">;
export type ProjectStatus = Project["data"]["status"];

export const statusLabel: Record<ProjectStatus, string> = {
  "em-desenvolvimento": "Em desenvolvimento",
  concluido: "Concluído",
  academico: "Projeto acadêmico",
};

export async function getProjects() {
  const projects = await getCollection("projects");
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export function projectHref(project: Project) {
  return `/projetos/${project.id}`;
}
