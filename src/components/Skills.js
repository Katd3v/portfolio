import React from "react";

const Skills = ({ skills }) => {
  return (
    <ul className="mb-4">
      <li>
        <img
          className="max-h-12 object-contain object-left"
          src={skills.imageUrl}
          alt={skills.title}
        />
      </li>
    </ul>
  );
};

export default Skills;
