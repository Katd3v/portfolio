import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <header className="flex flex-col md:flex-row items-center bg-primary py-4">
      <a href="#">
        <img
          className="w-32 md:w-64 rounded-full"
          src="/logo.jpeg"
          alt="logo des initiales KS"
        />
      </a>
      <nav className="w-full mt-4">
        <ul className="flex justify-evenly">
          <li>
            <Link to="/#">Accueil</Link>
          </li>
          <li>
            <Link to="/#about">À Propos</Link>
          </li>
          <li>
            <Link to="/#projects">Projets</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
