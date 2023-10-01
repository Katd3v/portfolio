import React from "react";
// import Skills from "./Skills";

export const Cards = ({ project, skill }) => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <article className="flex flex-col items-start justify-between bg-white rounded-2xl">
        <div className="relative w-full">
          <img
            src={project.imageUrl}
            alt={`miniature représentant le projet ${project.title}`}
            className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          />
          <div className="absolute inset-0 rounded-2xl" />
        </div>
        <div className="max-w-xl w-full">
          <div className="group relative">
            <h3 className="text-lg font-semibold leading-6 text-secondary text-center">
              <a href={project.pageUrl} target="_blank" rel="noreferrer">
                <span className="absolute inset-0" />
                {project.title}
              </a>
            </h3>
            <p className="mt-5 line-clamp-3 text-sm leading-6 text-secondary">
              {project.description}
            </p>
          </div>
          <div className="relative m-2 flex items-center gap-x-4">
            <a href={project.github} target="_blank" rel="noreferrer">
              <img
                src="/assets/img/github-logo.png"
                alt="logo github qui amène vers le projet github"
                className="h-6 w-6 bg-gray-100"
              />
            </a>
            <a href={project.pageUrl} target="_blank" rel="noreferrer">
              <img
                src="/assets/img/website-logo.png"
                alt="logo site internet qui amène vers le projet"
                className="h-6 w-6 bg-gray-100"
              />
            </a>
            <div className="text-sm leading-6"></div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Cards;
