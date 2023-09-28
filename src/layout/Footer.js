import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div>
        <ul className="flex">
          <li>
            <a href="mailto:katleen.sorhaindo@gmail.com">
              <img
                className="h-12"
                src="/assets/img/email-logo.png"
                alt="logo email pour me contacter par mail"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/Katd3v">
              <img
                className="h-12"
                src="/assets/img/github-logo.png"
                alt="logo github pour accéder à mon github"
              />
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className="h-12"
                src="/assets/img/linkedin-logo.png"
                alt="logo linkedin pour voir mon profil linkedin"
              />
            </a>
          </li>
        </ul>
      </div>
      <p>© 2023 Katleen SORHAINDO, Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
