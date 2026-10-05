import { useState } from "react";
import ProjectCard from "./ProjectCard";
import Section from "./Section";
import { projects } from "../data/projects";
import { cn } from "../lib/utils";

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
    <Section id="proyectos" title="Proyectos">
      <div className="flex flex-wrap gap-2">
        {allTechnologies.map((technology) => {
          const isSelected = selected.includes(technology);
          return (
            <button
              key={technology}
              type="button"
              aria-pressed={isSelected}
              onClick={() => toggleTechnology(technology)}
              className={cn(
                "cursor-pointer rounded-md border border-slate-300 px-3 py-1 font-mono text-sm hover:border-accent dark:border-slate-600 dark:hover:border-blue-400",
                isSelected &&
                  "border-accent bg-accent text-white dark:border-blue-500 dark:bg-blue-500 dark:text-slate-950",
              )}
            >
              {technology}
            </button>
          );
        })}
      </div>
      {visibleProjects.length === 0 && (
        <p className="mt-8 text-slate-600 dark:text-slate-400">
          Ningún proyecto usa todas las tecnologías seleccionadas.
        </p>
      )}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}

export default ProjectGrid;
