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
    <section id="about" className="bg-primary">
      <div className="p-4">
        <Profil />
        <div>
          <h2>Mes compétences</h2>
          {loading ? (
            <div>Chargement en cours...</div>
          ) : (
            <div>
              {skills.map((skill, index) => (
                <div key={index}>
                  <h3>{skill[0].category}</h3>
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
