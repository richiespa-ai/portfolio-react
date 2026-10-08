import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import EnvBadge from "./components/EnvBadge";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectGrid from "./components/ProjectGrid";
import Skills from "./components/Skills";
import { useSettings } from "./store/settings";

function App() {
  const language = useSettings((state) => state.language);
  const theme = useSettings((state) => state.theme);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <EnvBadge />
      <Navbar />
      <Hero />
      <main className="mx-auto max-w-4xl px-6 pb-24">
        <About />
        <ProjectGrid />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
