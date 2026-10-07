import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Project, ProjectDetail } from "@/data/projects";
import { texts } from "@/data/texts";
import { useSettings } from "@/store/settings";

type ProjectDetailDialogProps = {
  project: Project;
  detail: ProjectDetail;
};

function ProjectDetailDialog({ project, detail }: ProjectDetailDialogProps) {
  const language = useSettings((state) => state.language);
  const t = texts[language];

  const sections = [
    { label: t.problemLabel, text: detail.problem[language] },
    { label: t.solutionLabel, text: detail.solution[language] },
    { label: t.resultLabel, text: detail.result[language] },
  ];

  return (
    <Dialog>
      <DialogTrigger className="mt-6 cursor-pointer self-start rounded-md border border-slate-300 px-3 py-1.5 text-sm font-semibold hover:border-brand hover:text-brand dark:border-slate-600 dark:hover:border-blue-400 dark:hover:text-blue-400">
        {t.viewDetail}
      </DialogTrigger>
      <DialogContent
        closeLabel={t.close}
        className="max-h-[calc(100dvh-2rem)] gap-6 overflow-y-auto p-6 text-base sm:max-w-xl"
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {project.title[language]}
          </DialogTitle>
          <DialogDescription>{project.summary[language]}</DialogDescription>
        </DialogHeader>
        {sections.map((section) => (
          <div key={section.label}>
            <h3 className="font-mono text-xs uppercase tracking-wider text-brand dark:text-blue-400">
              {section.label}
            </h3>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              {section.text}
            </p>
          </div>
        ))}
      </DialogContent>
    </Dialog>
  );
}

export default ProjectDetailDialog;
