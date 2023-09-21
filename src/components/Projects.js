import React from "react";
import Cards from "./Cards";

export const Projects = () => {
  const projects = [
    {
      preview: "/assets/img/booki-preview.png",
      url: "https://katd3v.github.io/booki-starter-code/",
      alt: "aperçu du site booki",
      github: "https://katd3v.github.io/booki-starter-code/",
      title: "Booki",
      skills: [
        { url: "html-logo.png", alt: "logo HTML" },
        { url: "css-logo.png", alt: "logo CSS" },
      ],
    },
    {
      preview: "/assets/img/booki-preview.png",
      url: "",
      alt: "aperçu du site de Sophie Bluel",
      github: "https://github.com/Katd3v/Portfolio-architecte-sophie-bluel.git",
      title: "Sophie Bluel",
      skills: [
        { url: "html-logo.png", alt: "logo HTML" },
        { url: "css-logo.png", alt: "logo CSS" },
        { url: "js-logo.png", alt: "logo JAVASCRIPT" },
      ],
    },
  ];

  return (
    <section id="projects">
      <div>
        {projects.map((project) => (
          <Cards key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
