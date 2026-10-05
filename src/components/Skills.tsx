import Section from "./Section";
import {
  competencies,
  levelLabels,
  technologies,
  type TechnologyLevel,
} from "../data/skills";

const levels: TechnologyLevel[] = ["produccion", "proyectos", "formacion"];

const levelStyles: Record<TechnologyLevel, string> = {
  produccion:
    "border-accent bg-accent text-white dark:border-blue-500 dark:bg-blue-500 dark:text-slate-950",
  proyectos:
    "border-slate-400 text-slate-800 dark:border-slate-500 dark:text-slate-200",
  formacion:
    "border-dashed border-slate-300 text-slate-600 dark:border-slate-600 dark:text-slate-400",
};

function Skills() {
  return (
    <Section id="habilidades" title="Habilidades">
      <div className="grid gap-8 md:grid-cols-2">
        {competencies.map((competency) => (
          <div key={competency.id}>
            <h3 className="font-semibold">{competency.category.es}</h3>
            <ul className="mt-3 space-y-1 text-slate-700 dark:text-slate-300">
              {competency.items.es.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <h3 className="mt-12 font-semibold">Tecnologías</h3>
      <div className="mt-4 space-y-4">
        {levels.map((level) => (
          <div key={level}>
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {levelLabels[level].es}
            </h4>
            <ul className="mt-2 flex flex-wrap gap-2">
              {technologies
                .filter((technology) => technology.level === level)
                .map((technology) => (
                  <li
                    key={technology.name}
                    className={`rounded-md border px-3 py-1 font-mono text-sm ${levelStyles[level]}`}
                  >
                    {technology.name}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
