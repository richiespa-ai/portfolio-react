import { useSettings, type Language } from "../store/settings";
import { cn } from "../lib/utils";

const languages: Language[] = ["es", "en"];

function LanguageToggle() {
  const language = useSettings((state) => state.language);
  const setLanguage = useSettings((state) => state.setLanguage);

  return (
    <div
      className="flex gap-1 font-mono text-sm"
      role="group"
      aria-label="Idioma / Language"
    >
      {languages.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={language === option}
          onClick={() => setLanguage(option)}
          className={cn(
            "cursor-pointer rounded-md px-2 py-1 uppercase text-slate-600 hover:text-brand dark:text-slate-400 dark:hover:text-blue-400",
            language === option &&
              "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100",
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default LanguageToggle;
