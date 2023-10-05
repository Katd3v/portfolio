import React, { useEffect, useState } from "react";
import axios from "axios";
import Skills from "../components/Skills";

const descriptionSkill = {
  language:
    "J'ai développé des bases solides dans les langages du web, notamment HTML5 pour la création de structures web sémantiques, CSS pour la conception de mises en page élégantes et réactives, ainsi que JavaScript pour l'ajout de fonctionnalités interactives et dynamiques à mes projets y compris la manipulation du DOM, la gestion des événements, et l'utilisation de la POO (programmation orientée objet).",

  framework:
    "J'ai développé une expertise dans un ensemble de frameworks et de technologies essentielles, notamment React pour le développement d'interfaces utilisateur réactives et modernes, Node.js pour la création de serveurs robustes, Express pour la gestion des routes et des requêtes HTTP, ainsi que Sass et Tailwind CSS pour la conception de styles modulaires et de designs élégants.",

  tool: "Je suis familiarisée avec une gamme d'outils essentiels pour le développement web, notamment Git et GitHub pour la gestion de version et la collaboration, MongoDB pour la gestion de bases de données NoSQL, Trello pour la planification et la gestion de projet, ainsi que Figma pour la conception et la collaboration en design. Ces outils me permettent de travailler de manière efficace, d'assurer un suivi précis des projets et de collaborer efficacement au sein d'une équipe de développement",
};

export const Skill = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/skills")
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

  const getSkillDescription = (category) => {
    return descriptionSkill[category];
  };

  return (
    <section id="skills" className=" bg-secondary py-10">
      <h2 className=" text-white text-center ml-4">Mes compétences</h2>
      <p>
        Durant ma formation intensive de 6 mois, je suis monté en compétence
        dans divers outils et technologies, me permettant de concevoir des sites
        web optimisés et fonctionnels. Ces compétences et stacks technologiques
        constituent une base solide pour un développeur web junior. Ils couvrent
        à la fois les aspects de conception et de développement, ainsi que la
        gestion de projet, ce qui me permettra de travailler efficacement sur
        des projets web et de continuer à m'améliorer dans le domaine du
        développement web.
      </p>
      {loading ? (
        <div>Chargement en cours...</div>
      ) : (
        <div>
          {skills.map((skill, index) => (
            <div key={index}>
              <Skills skills={skill} />
              <p>{getSkillDescription(skill.category)}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Skill;
