import React from "react";

const Skills = ({ skills }) => {
  return (
    <>
      <ul className="flex flex-wrap justify-evenly">
        {skills.map((skill, index) => (
          <li key={index}>
            <img className="h-20" src={skill.imageUrl} alt={skill.title} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Skills;
