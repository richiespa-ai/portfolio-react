import About from "./components/About";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Skills />
        <ProjectGrid />
      </main>
    </>
  );
}

export default App;
