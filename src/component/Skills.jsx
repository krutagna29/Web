import React from "react";
import "../styles/Skills.css";

const skills = [
  {
    id: 1,
    name: "UX Design",
    value: 97,
    description:
      "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.",
  },
  {
    id: 2,
    name: "UI Design",
    value: 97,
    description:
      "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.",
  },
  {
    id: 3,
    name: "UX Design",
    value: 97,
    description:
      "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.",
  },
  {
    id: 4,
    name: "UX Design",
    value: 97,
    description:
      "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users.",
  },
];

const Skills = () => {
  return (
    <section className="skills-section container" id="skills">
      <header className="section-header">
        <h2 className="skills-heading">SKILLS</h2>
      </header>

      <div className="skills-grid">
        {skills.map((skill) => (
          <article key={skill.id} className="skill-card">
            <div className="skill-ring" aria-hidden="true">
              <span className="skill-percent">{skill.value}%</span>
            </div>

            <div className="skill-content">
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
