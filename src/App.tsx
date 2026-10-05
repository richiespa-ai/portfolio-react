import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/projects";

function App() {
  return (
    <main>
      <h1>Ricardo Español Rowe</h1>
      <section>
        <h2>Proyectos</h2>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </main>
  );
}

export default App;
