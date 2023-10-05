import React from "react";

const Skills = ({ skills }) => {
  return (
    <ul className="flex flex-wrap justify-around">
      {skills.map((skill, index) => (
        <li key={index}>
          <img className="h-16" src={skill.imageUrl} alt={skill.title} />
        </li>
      ))}
    </ul>
  );
};

export default Skills;
