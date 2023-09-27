import React from "react";
import Skills from "../components/Skills";
import Profil from "../components/Profil";
import { NavLink } from "react-router-dom";

const About = () => {
  //   const languages = [
  //     { url: "html-logo.png", alt: "logo HTML" },
  //     { url: "css-logo.png", alt: "logo CSS" },
  //     { url: "js-logo.png", alt: "logo JAVASCRIPT" },
  //   ];

  //   const frameworks = [
  //     { url: "react-logo.png", alt: "logo REACT" },
  //     { url: "sass-logo.png", alt: "logo SASS" },
  //     { url: "node-logo.png", alt: "logo NODE" },
  //     { url: "express-logo.png", alt: "logo EXPRESS" },
  //     { url: "tailwind-logo.png", alt: "logo TAILWIND" },
  //   ];

  //   const tools = [
  //     { url: "figma-logo.png", alt: "logo FIGMA" },
  //     { url: "git-logo.png", alt: "logo GIT" },
  //     { url: "github-logo.png", alt: "logo GITHUB" },
  //     { url: "trello-logo.png", alt: "logo TRELLO" },
  //   ];

  return (
    <section id="about" className="bg-primary">
      <div className="p-4">
        <Profil />
        <div>
          <h2 id="skills">Mes compétences</h2>
          <></>
        </div>
      </div>
    </section>
  );
};

export default About;
