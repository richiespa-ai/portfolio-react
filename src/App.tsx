import About from "./components/About";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import Skills from "./components/Skills";

function App() {
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
