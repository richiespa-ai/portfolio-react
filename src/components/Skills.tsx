import {
  competencies,
  levelLabels,
  technologies,
  type TechnologyLevel,
} from "../data/skills";

const levels: TechnologyLevel[] = ["produccion", "proyectos", "formacion"];

function Skills() {
  return (
    <section id="habilidades">
      <h2>Habilidades</h2>
      {competencies.map((competency) => (
        <div key={competency.id}>
          <h3>{competency.category.es}</h3>
          <ul>
            {competency.items.es.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <h3>Tecnologías</h3>
        {levels.map((level) => (
          <div key={level}>
            <h4>{levelLabels[level].es}</h4>
            <ul>
              {technologies
                .filter((technology) => technology.level === level)
                .map((technology) => (
                  <li key={technology.name}>{technology.name}</li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
