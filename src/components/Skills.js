import React from "react";
import LearnDuration from "./LearnDuration";
import moment from "moment";

const Skills = ({ skills }) => {
  const handleOpen = () => {
    const element = document.getElementById("list");
    element.classList.remove("translate-y-[100%]");
    element.classList.add("translate-y-0");
  };

  const handleClose = () => {
    const element = document.getElementById("list");
    element.classList.remove("translate-y-0");
    element.classList.add("translate-y-[100%]");
  };

  return (
    // <div className="my-12 flex justify-center flex-wrap">
    <div className="my-10 relative max-w-[300px] md:h-[440px] xl:max-w-[352px] bg-white rounded-xl overflow-hidden shadow-md">
      <div className="w-full max-h-[235px] overflow-hidden">
        <img
          className="object-cover w-[352px] h-[235px] transition ease-in-out duration-500 hover:scale-110 hover:brightness-90"
          src={skills.imageUrl}
          alt={skills.title}
        />
      </div>
      <div className="p-6">
        <div>
          <h3 className="font-bold text-2xl text-secondary">{skills.title}</h3>
          <LearnDuration startDate={skills.date} />
        </div>
        <div>
          <button
            className="bg-secondary text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleOpen}
          >
            Ce que j'ai appris
          </button>
        </div>
      </div>
      <div
        id="list"
        className="transition-all duration-500 transform translate-y-[100%] absolute top-0 left-0 right-0 bottom-0 bg-primary text-white font-bold py-2 px-4 rounded"
      >
        <div className="text-right cursor-pointer" onClick={handleClose}>
          X
        </div>
        <p className="text-secondary">{skills.description}</p>
      </div>
    </div>
    // </div>
  );
};

export default Skills;
