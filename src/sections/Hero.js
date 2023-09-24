import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url("/assets/img/background-hero.jpg")`,
    backgroundSize: "cover",
  };

  return (
    <section
      id="home"
      className="h-72 flex justify-center items-center"
      style={heroStyle}
    >
      <h1 className="text-center text-3xl text-secondary">
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
    </section>
  );
};

export default Hero;
