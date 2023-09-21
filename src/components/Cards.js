import React from "react";

export const Cards = ({ project }) => {
  return (
    <div>
      <figure className="p-4">
        <img src={project.preview} alt={project.alt} />
        <h3>{project.title}</h3>
        <a href={project.github}>
          <img
            className="h-8"
            src="/assets/img/github-logo.png"
            alt="logo github qui amène vers le projet github"
          />
        </a>
        <a href={project.url}>
          <img
            className="h-8"
            src="/assets/img/website-logo.png"
            alt="logo site internet qui amène vers le projet"
          />
        </a>
      </figure>
      <figcaption>
        {project.skills.map((skill, index) => (
          <img
            className="h-6"
            key={index}
            src={`/assets/img/${skill.url}`}
            alt={skill.alt}
          />
        ))}
      </figcaption>
    </div>
  );
};

export default Cards;
