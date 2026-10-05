import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const allTechnologies = [
  ...new Set(projects.flatMap((project) => project.technologies)),
].sort();

function ProjectGrid() {
  const [selected, setSelected] = useState<string[]>([]);

  function toggleTechnology(technology: string) {
    setSelected((current) =>
      current.includes(technology)
        ? current.filter((item) => item !== technology)
        : [...current, technology],
    );
  }

  const visibleProjects = projects.filter((project) =>
    selected.every((technology) => project.technologies.includes(technology)),
  );

  return (
    <section id="proyectos">
      <h2>Proyectos</h2>
      <div>
        {allTechnologies.map((technology) => (
          <button
            key={technology}
            type="button"
            aria-pressed={selected.includes(technology)}
            onClick={() => toggleTechnology(technology)}
          >
            {selected.includes(technology) ? "✓ " : ""}
            {technology}
          </button>
        ))}
      </div>
      {visibleProjects.length === 0 && (
        <p>Ningún proyecto usa todas las tecnologías seleccionadas.</p>
      )}
      {visibleProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}

export default ProjectGrid;
