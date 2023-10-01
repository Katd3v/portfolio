import React from "react";

export const Reseaux = () => {
  return (
    <ul className="flex justify-around w-40">
      <li>
        <a href="/#contact">
          <img
            className="h-8"
            src="/assets/img/email-logo.png"
            alt="logo email pour me contacter par mail"
          />
        </a>
      </li>
      <li>
        <a href="https://github.com/Katd3v">
          <img
            className="h-8"
            src="/assets/img/github-logo.png"
            alt="logo github pour accéder à mon github"
          />
        </a>
      </li>
      <li>
        <a href="www.linkedin.com/in/katleen-sorhaindo-23a547292">
          <img
            className="h-8"
            src="/assets/img/linkedin-logo.png"
            alt="logo linkedin pour voir mon profil linkedin"
          />
        </a>
      </li>
    </ul>
  );
};
export default Reseaux;
