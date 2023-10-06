import React from "react";

const Skills = ({ skills }) => {
  return (
    <>
      {skills.map((skill) => (
        <div className="">
          <div className="max-w-[300px] sm:max-w-[352px] h-[440px] bg-primary rounded-xl overflow-hidden shadow-md">
            <div className="w-full max-h-[235px]">
              <img
                className="object-cover w-[352px] h-[235px]"
                src="https://place-hold.it/360"
                alt={skill.title}
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-2xl">{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
