import React, { useEffect, useState } from "react";
import axios from "axios";
import Skills from "../components/Skills";
import Profil from "../components/Profil";

const About = () => {
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

  return (
    <section id="a-propos" className="bg-primary pt-10">
      <div className="lg:mt-0 xl:col-end-1 xl:row-start-1">
        <Profil />
        <div className="my-4 bg-primary">
          <h3 className="text-left text-secondary ml-4">Mes compétences</h3>
          {loading ? (
            <div>Chargement en cours...</div>
          ) : (
            <div className="px-4 my-4 flex flex-wrap items-start justify-around gap-x-8 gap-y-10 sm:gap-x-10 lg:mx-0">
              {skills.map((skill, index) => (
                <Skills key={index} skills={skill} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
