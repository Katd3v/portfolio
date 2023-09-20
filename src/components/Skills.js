import React from "react";

const Skills = ({ skills }) => {
  return (
    <div>
      <ul className="flex flex-wrap justify-evenly">
        {skills.map((skill) => (
          <li>
            <img
              className="h-20"
              src={`/assets/img/${skill.url}`}
              alt={skill.alt}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
