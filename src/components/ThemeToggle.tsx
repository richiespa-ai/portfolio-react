import { texts } from "../data/texts";
import { useSettings } from "../store/settings";

function ThemeToggle() {
  const theme = useSettings((state) => state.theme);
  const toggleTheme = useSettings((state) => state.toggleTheme);
  const language = useSettings((state) => state.language);
  const t = texts[language];

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="cursor-pointer rounded-md px-2 py-1 font-mono text-sm text-slate-600 hover:text-accent dark:text-slate-400 dark:hover:text-blue-400"
    >
      {theme === "dark" ? t.lightMode : t.darkMode}
    </button>
  );
}

export default ThemeToggle;
