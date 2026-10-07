type Translated = { es: string; en: string };

export type ProjectDetail = {
  problem: Translated;
  solution: Translated;
  result: Translated;
};

export type Project = {
  id: string;
  title: Translated;
  summary: Translated;
  technologies: string[];
  detail?: ProjectDetail;
};

export async function fetchProjects(): Promise<Project[]> {
  const response = await fetch("/data/projects.json");

  if (!response.ok) {
    throw new Error(`No se pudieron cargar los proyectos (${response.status})`);
  }

  return response.json();
}
