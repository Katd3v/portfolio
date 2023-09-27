import React from "react";
import Skills from "../components/Skills";
import Profil from "../components/Profil";
import { NavLink } from "react-router-dom";

const About = () => {
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
