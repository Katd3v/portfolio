import React from "react";

const Navbar = () => {
  return (
    <header className="flex flex-col md:flex-row items-center bg-primary py-4">
      <a href="#home">
        <img
          className="w-32 md:w-64 rounded-full"
          src="/logo.jpeg"
          alt="logo des initiales KS"
        />
      </a>
      <nav className="w-full mt-4">
        <ul className="flex justify-evenly">
          <li>
            <a href="#home">Accueil</a>
          </li>
          <li>
            <a href="#about">À Propos</a>
          </li>
          <li>
            <a href="#projects">Projets</a>
          </li>
          {/* <li>
            <a href="#skills">Compétences</a>
          </li> */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
