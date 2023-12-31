import React from "react";

export const Cards = ({ project }) => {
  return (
    <article className="px-4 mx-auto max-w-2xl lg:max-w-5xl my-16 relative isolate flex flex-col gap-8 lg:flex-row lg:px-0">
      <div className="relative aspect-square w-full md:w-96 lg:w-80 lg:shrink-0 overflow-hidden rounded-2xl object- shadow-sm shadow-secondary md:mx-auto">
        <a href={project.github} target="_blank" rel="noreferrer">
          <img
            src={`${process.env.REACT_APP_ENDPOINT}${project.imageUrl}`}
            alt={`miniature représentant le projet ${project.title}`}
            className="absolute inset-0 h-full w-full rounded-2xl shadow-sm shadow-secondary hover:scale-125 transform transition-transform duration-500"
          />
        </a>
      </div>
      <div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-left text-secondary">
            {project.title}
          </h3>
          <p className="mt-5 text-sm leading-6 text-gray-600">
            {project.description}
          </p>
        </div>
        <div className="mt-6 flex border-t border-secondary pt-6">
          <div className="w-full relative flex items-center gap-x-4">
            <a href={project.github} target="_blank" rel="noreferrer">
              <img
                src="assets/img/github-logo.webp"
                alt="logo github qui amène vers le projet github"
                className="h-10 rounded-full bg-gray-50"
              />
            </a>
            {project.pageUrl.length > 0 && (
              <a href={project.pageUrl} target="_blank" rel="noreferrer">
                <img
                  src="/assets/img/website-logo.webp"
                  alt="logo site internet qui amène vers le projet"
                  className="h-10 rounded-full bg-gray-50"
                />
              </a>
            )}
          </div>
          <div>
            <div className="text-sm leading-6">
              <div className="flex justify-end">
                <ul className="flex w-full gap-x-2">
                  {project.languages.map((language, index) => (
                    <li key={index} className="">
                      <img
                        className="max-h-16 w-full"
                        src={`${process.env.REACT_APP_ENDPOINT}${language}`}
                        alt="logo des compétences"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Cards;
