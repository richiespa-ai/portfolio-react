import Section from "./Section";
import { texts } from "../data/texts";
import { useSettings } from "../store/settings";

function About() {
  const language = useSettings((state) => state.language);
  const t = texts[language];

  return (
    <Section id="sobre-mi" title={t.aboutTitle}>
      <p className="max-w-2xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">
        {t.aboutBody}
      </p>
    </Section>
  );
}

export default About;
