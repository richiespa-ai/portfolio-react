import Section from "./Section";
import { experience, sectionTitles } from "@/data/experience";
import { useSettings } from "@/store/settings";

function Experience() {
  const language = useSettings((state) => state.language);

  return (
    <Section id="experiencia" title={sectionTitles[language].experience}>
      <ol className="space-y-10">
        {experience.map((item) => (
          <li key={item.id}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold">{item.company}</h3>
              <p className="font-mono text-sm text-slate-600 dark:text-slate-400">
                {item.period[language]}
              </p>
            </div>
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              {item.role[language]}
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
              {item.points[language].map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default Experience;
