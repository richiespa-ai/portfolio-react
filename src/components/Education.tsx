import Section from "./Section";
import { education, sectionTitles } from "@/data/experience";
import { useSettings } from "@/store/settings";

function Education() {
  const language = useSettings((state) => state.language);

  return (
    <Section id="formacion" title={sectionTitles[language].education}>
      <ul className="list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
        {education.map((item) => (
          <li key={item.id}>{item.title[language]}</li>
        ))}
      </ul>
    </Section>
  );
}

export default Education;
