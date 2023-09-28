import React from "react";
import { NavLink } from "react-router-dom";

export const Cards = ({ project }) => {
  return (
    <div className="rounded-xl shadow-lg shadow-primary">
      <figure className="p-4">
        <img
          className="object-cover h-46"
          src={project.imageUrl}
          alt={`miniature représentant le projet ${project.title}`}
        />
        <h3 className="text-secondary">{project.title}</h3>
        <div className="flex justify-end gap-4">
          <NavLink to={project.github}>
            <img
              className="h-8"
              src="/assets/img/github-logo.png"
              alt="logo github qui amène vers le projet github"
            />
          </NavLink>
          <NavLink to={project.url}>
            <img
              className="h-8"
              src="/assets/img/website-logo.png"
              alt="logo site internet qui amène vers le projet"
            />
          </NavLink>
        </div>
      </figure>
      {/* <figcaption>
        {project.skills.map((skill, index) => (
          <img
            className="h-6"
            key={index}
            src={`/assets/img/${skill.url}`}
            alt={skill.alt}
          />
        ))}
      </figcaption> */}
    </div>
  );
};

export default Cards;
