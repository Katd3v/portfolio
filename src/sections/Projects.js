import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../components/Cards";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_ENDPOINT}/projects`)
      .then((response) => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des projets:",
          error
        );
        setLoading(false);
      });
  }, []);

  return (
    <section id="projets" className="py-12 sm:py-16 lg:px-16 bg-white">
      <h2 className="my-4 text-secondary text-center">Mes projets</h2>
      {loading ? (
        <div>Chargement en cours </div>
      ) : (
        <div>
          {projects.map((project, index) => (
            <Cards key={index} project={project} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
