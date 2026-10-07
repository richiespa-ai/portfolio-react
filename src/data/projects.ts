export type Project = {
  id: string;
  title: { es: string; en: string };
  summary: { es: string; en: string };
  technologies: string[];
};

export async function fetchProjects(): Promise<Project[]> {
  const response = await fetch("/data/projects.json");

  if (!response.ok) {
    throw new Error(`No se pudieron cargar los proyectos (${response.status})`);
  }

  return response.json();
}
