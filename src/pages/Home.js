import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skill from "../sections/Skill";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
