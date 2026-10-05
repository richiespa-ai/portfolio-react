import { useEffect } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import Skills from "./components/Skills";
import { useSettings } from "./store/settings";

function App() {
  const language = useSettings((state) => state.language);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Hero />
      <main className="mx-auto max-w-4xl px-6 pb-24">
        <About />
        <Skills />
        <ProjectGrid />
      </main>
    </div>
  );
}

export default App;
