import React from "react";

const Hero = () => {
  const typewrite = ["Katleen", "Développeur Web"];
  return (
    <section className="h-72 flex justify-center items-center bg-gradient-to-r from-primary to-bgBrown">
      <h1 className="text-center text-3xl">
        Bonjour, <br /> Je suis <span>{typewrite[0]}</span>
      </h1>
    </section>
  );
};

export default Hero;
