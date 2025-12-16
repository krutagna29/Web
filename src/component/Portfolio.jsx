import React from "react";
import "../styles/Portfolio.css";

const projects = [
  {
    id: 1,
    title: "Chaintech Product",
    tags: ["UX Design", "Angular", "JavaScript"],
  },
  {
    id: 2,
    title: "Chaintech Product",
    tags: ["UX Design", "Angular", "JavaScript"],
  },
  {
    id: 3,
    title: "Chaintech Product",
    tags: ["UX Design", "Angular", "JavaScript"],
  },
  {
    id: 4,
    title: "Chaintech Product",
    tags: ["UX Design", "Angular", "JavaScript"],
  },
  {
    id: 5,
    title: "Chaintech Product",
    tags: ["UX Design", "Angular", "JavaScript"],
  },
  {
    id: 6,
    title: "Chaintech Product",
    tags: ["UX Design", "Angular", "JavaScript"],
  },
  {
    id: 7,
    title: "Chaintech Product",
    tags: ["UX Design", "Angular", "JavaScript"],
  },
  {
    id: 8,
    title: "Chaintech Product",
    tags: ["UX Design", "Angular", "JavaScript"],
  },
];

const Portfolio = () => {
  return (
    <section
      className="portfolio-section container"
      id="portfolio"
      aria-labelledby="portfolio-heading"
    >
      <header className="section-header">
        <h2 id="portfolio-heading" className="portfolio-heading">
          PORTFOLIO
        </h2>
      </header>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <article key={project.id} className="portfolio-card">
            <div className="portfolio-thumbnail" aria-hidden="true" />

            <div className="portfolio-body">
              <h3 className="portfolio-title">{project.title}</h3>

              <div className="portfolio-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="portfolio-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="portfolio-cta-row"
              aria-label={`View details of ${project.title}`}
            >
              View Product Detail
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
