import React from "react";

const Skills = ({ skills }) => {
  return (
    <div className="my-12 flex justify-center flex-wrap">
      <div className="max-w-[300px] md:h-[440px] xl:max-w-[352px] bg-primary rounded-xl overflow-hidden shadow-md">
        <div className="w-full max-h-[235px]">
          <img
            className="object-cover w-[352px] h-[235px]"
            src={skills.imageUrl}
            alt={skills.title}
          />
        </div>
        <div className="p-6">
          <h3 className="font-bold text-2xl text-secondary">{skills.title}</h3>
          <p className="">{skills.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
