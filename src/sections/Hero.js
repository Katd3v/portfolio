import React from "react";
import TypewriterTitle from "../components/TypewriterTitle";
// import Typewriter from "typewriter-effect";

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url("/assets/img/background-hero.webp")`,
    backgroundSize: "cover",
  };

  return (
    <section
      className="h-80 flex flex-col justify-around items-center md:h-[450px]"
      style={heroStyle}
    >
      <h1 className="mt-16 text-center text-3xl text-secondary md:text-6xl">
        Bonjour, <br /> Je suis <br />
        <TypewriterTitle
          title="span"
          cls=""
          words={["Katleen", "Développeur web"]}
          typingSpeed={110}
          deletingSpeed={100}
        />
      </h1>
    </section>
  );
};

export default Hero;
