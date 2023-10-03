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
        <div className="my-4 bg-gradient-to-b from-primary to-secondary">
          <h2 className="text-secondary mb-8 ml-4">Mes compétences</h2>
          {loading ? (
            <div>Chargement en cours...</div>
          ) : (
            <div className="lg:flex justify-around pb-4">
              {skills.map((skill, index) => (
                <div
                  className="rounded-2xl shadow-sm shadow-secondary bg-white pb-2 w-96"
                  key={index}
                >
                  <h3 className="text-2xl text-center text-secondary mb-4 underline">
                    {skill[0]?.category}
                  </h3>
                  <Skills skills={skill} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
