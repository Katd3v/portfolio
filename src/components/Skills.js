import React from "react";
import { TERipple } from "tw-elements-react";

const Skills = ({ skills }) => {
  return (
    <>
      {skills.map((skill) => (
        <div className="block rounded-lg bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <TERipple>
            <div className="relative overflow-hidden bg-cover bg-no-repeat">
              <img
                className="rounded-t-lg"
                src={skill.imageUrl}
                alt={`logo ${skill.title}`}
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </div>
          </TERipple>
          <div className="p-6">
            <h4 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {skill.title}
            </h4>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              {skill.description}
            </p>
          </div>
        </div>
      ))}
    </>

    // <ul className="p-4">
    //   <li className="lg:flex lg:flex-nowrap lg:gap-8">
    //     {skills.map((skill, index) => (
    //       <div
    //         key={index}
    //         className="shadow-sm shadow-white my-8 p-8 rounded-xl bg-primary w-full"
    //       >
    //         <figure>
    //           <img
    //             className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
    //             src={skill.imageUrl}
    //             alt={`logo ${skill.title}`}
    //           />
    //           <figcaption>{skill.title}</figcaption>
    //         </figure>
    //         <p>{skill.description}</p>
    //       </div>
    //     ))}
    //   </li>
    // </ul>
  );
};

export default Skills;
