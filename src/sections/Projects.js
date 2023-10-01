import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../components/Cards";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/projects")
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
    <section id="projets" className="m-4">
      <h2 className="my-4">Mes projets</h2>
      {loading ? (
        <div>Chargement en cours </div>
      ) : (
        <div className="flex flex-wrap justify-evenly">
          {projects.map((project, index) => (
            <Cards key={index} project={project} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
