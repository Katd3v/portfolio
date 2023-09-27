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
    <div>
      <h2>Mes projets</h2>
      {loading ? (
        <div>Chargement en cours </div>
      ) : (
        <div>
          {projects.map((project) => (
            <Cards project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
