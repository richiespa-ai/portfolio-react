import ProjectDetailDialog from "./ProjectDetailDialog";
import type { Project } from "../data/projects";
import { useSettings } from "../store/settings";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const language = useSettings((state) => state.language);

  return (
    <article className="flex flex-col rounded-lg border border-slate-200 p-6 dark:border-slate-700">
      <h3 className="text-lg font-semibold">{project.title[language]}</h3>
      <p className="mt-3 flex-1 text-slate-700 dark:text-slate-300">
        {project.summary[language]}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-md bg-slate-100 px-2 py-1 font-mono text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {technology}
          </li>
        ))}
      </ul>
      {project.detail && (
        <ProjectDetailDialog project={project} detail={project.detail} />
      )}
    </article>
  );
}

export default ProjectCard;
