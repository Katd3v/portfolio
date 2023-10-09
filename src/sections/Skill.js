import React, { useEffect, useState } from "react";
import axios from "axios";
import Skills from "../components/Skills";

export const Skill = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_ENDPOINT}/skills`)
      .then((response) => {
        setSkills(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des compétences :",
          error
        );
        setLoading(false);
      });
  }, []);

  return (
    <section id="skills" className=" bg-primary py-10 px-4">
      <h2 className=" text-secondary text-center mb-12 lg:text-5xl">
        Mes compétences
      </h2>
      <div className="px-8 md:px-16">
        <p className="text-secondary mb-6">
          Dans le cadre de ma reconversion professionnelle, j'ai consacré du
          temps à me former et à monter en compétence dans un éventail varié
          d'outils et de technologies essentiels au développement web.
        </p>
        <p className="text-secondary my-4">
          Cette formation englobe des aspects de conception, de développement et
          de gestion de projet, ce qui me permet de concevoir des sites web
          optimisés et fonctionnels.
        </p>
        <p className="text-secondary my-6">
          Ces compétences me préparent à travailler efficacement sur une variété
          de projets web tout en continuant à progresser dans le domaine du
          développement web.
        </p>
      </div>
      {loading ? (
        <div>Chargement en cours...</div>
      ) : (
        <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-evenly xl:px-8">
          {skills.map((skill, index) => (
            <Skills key={index} skills={skill} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Skill;
