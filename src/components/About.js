import React from "react";
import Languages from "./Skills";
import Skills from "./Skills";

const About = () => {
  const languages = [
    { url: "html-logo.png", alt: "logo HTML" },
    { url: "css-logo.png", alt: "logo CSS" },
    { url: "js-logo.png", alt: "logo JAVASCRIPT" },
  ];

  const framworks = [
    { url: "react-logo.png", alt: "logo REACT" },
    { url: "sass-logo.png", alt: "logo SASS" },
    { url: "tailwind-logo.png", alt: "logo TAILWIND" },
    { url: "node-logo.png", alt: "logo NODE" },
    { url: "express-logo.png", alt: "logo EXPRESS" },
  ];

  const tools = [
    { url: "figma-logo.png", alt: "logo FIGMA" },
    { url: "git-logo.png", alt: "logo GIT" },
    { url: "github-logo.png", alt: "logo GITHUB" },
    { url: "trello-logo.png", alt: "logo TRELLO" },
  ];

  return (
    <section className="bg-primary">
      <div>
        <img
          src="/assets/img/profil.png"
          alt="Photo de profil de Katleen SORHAINDO"
        />
      </div>
      <div className="p-4">
        <div>
          <h2 className="text-2xl font-black">À propos de moi</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            iure possimus qui illo commodi eligendi repellat itaque. Assumenda
            ipsa nostrum quibusdam magnam, quidem vel consectetur quos dolores
            consequuntur cumque inventore.
          </p>
        </div>
        <div>
          <h2>Mes compétences</h2>
          <div>
            <div>
              <h3>Langages</h3>
              <Skills skills={languages} />
            </div>
            <div>
              <h3>Framworks</h3>
              <Skills skills={framworks} />
            </div>
            <div>
              <h3>Outils</h3>
              <Skills skills={tools} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
