import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { texts } from "../data/texts";
import { useSettings } from "../store/settings";

function Hero() {
  const language = useSettings((state) => state.language);
  const t = texts[language];

  return (
    <header className="border-b border-slate-200 dark:border-slate-700">
      <div className="mx-auto max-w-4xl px-6 pb-20 pt-6">
        <div className="flex items-center justify-end gap-2">
          <ThemeToggle />
          <LanguageToggle />
        </div>
        <p className="mt-14 font-mono text-sm text-accent dark:text-blue-400">
          {t.role}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
          Ricardo Español Rowe
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-slate-600 dark:text-slate-300">
          {t.tagline}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#proyectos"
            className="rounded-md bg-accent px-5 py-3 font-semibold text-white hover:bg-blue-800"
          >
            {t.viewProjects}
          </a>
          <a
            href={t.cvFile}
            download
            className="rounded-md border border-slate-300 px-5 py-3 font-semibold hover:border-accent hover:text-accent dark:border-slate-700 dark:hover:border-blue-400 dark:hover:text-blue-400"
          >
            {t.downloadCv}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Hero;
