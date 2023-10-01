import React from "react";
import Typewriter from "typewriter-effect";
import Reseaux from "../components/Reseaux";

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url("/assets/img/background-hero.jpg")`,
    backgroundSize: "cover",
  };

  return (
    <section
      className="h-72 flex flex-col justify-around items-center md:h-96"
      style={heroStyle}
    >
      <h1 className="text-center text-3xl text-secondary md:text-6xl">
        Bonjour, <br /> Je suis{" "}
        <span>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Katleen")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Développeur web")
                .pauseFor(1000)
                .start();
            }}
            options={{
              loop: true, //Répète l'animation en boucle
              autoStart: true, //Démarre l'animation automatiquement
            }}
          />
        </span>
      </h1>
      <Reseaux />
    </section>
  );
};

export default Hero;
