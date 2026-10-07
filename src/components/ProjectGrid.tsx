import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProjectCard from "./ProjectCard";
import Section from "./Section";
import { fetchProjects } from "../data/projects";
import { texts } from "../data/texts";
import { cn } from "../lib/utils";
import { useSettings } from "../store/settings";

function ProjectGrid() {
  const [selected, setSelected] = useState<string[]>([]);
  const language = useSettings((state) => state.language);
  const t = texts[language];

  const {
    data: projects = [],
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  function toggleTechnology(technology: string) {
    setSelected((current) =>
      current.includes(technology)
        ? current.filter((item) => item !== technology)
        : [...current, technology],
    );
  }

  if (isPending) {
    return (
      <Section id="proyectos" title={t.projectsTitle}>
        <p role="status" className="text-slate-600 dark:text-slate-400">
          {t.loadingProjects}
        </p>
      </Section>
    );
  }

  if (isError) {
    return (
      <Section id="proyectos" title={t.projectsTitle}>
        <p role="alert" className="text-slate-700 dark:text-slate-300">
          {t.projectsError}
        </p>
        <button
          type="button"
          onClick={() => refetch()}
          className="mt-4 cursor-pointer rounded-md border border-slate-300 px-4 py-2 font-semibold hover:border-brand hover:text-brand dark:border-slate-600 dark:hover:border-blue-400 dark:hover:text-blue-400"
        >
          {t.retry}
        </button>
      </Section>
    );
  }

  const allTechnologies = [
    ...new Set(projects.flatMap((project) => project.technologies)),
  ].sort();

  const visibleProjects = projects.filter((project) =>
    selected.every((technology) => project.technologies.includes(technology)),
  );

  return (
    <Section id="proyectos" title={t.projectsTitle}>
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
                "cursor-pointer rounded-md border border-slate-300 px-3 py-1 font-mono text-sm hover:border-brand dark:border-slate-600 dark:hover:border-blue-400",
                isSelected &&
                  "border-brand bg-brand text-white dark:border-blue-500 dark:bg-blue-500 dark:text-slate-950",
              )}
            >
              {technology}
            </button>
          );
        })}
      </div>
      {visibleProjects.length === 0 && (
        <p className="mt-8 text-slate-600 dark:text-slate-400">
          {t.noProjects}
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
