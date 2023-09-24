import React from "react";

export const Profil = () => {
  return (
    <>
      <img
        className="rounded-full my-4"
        src="/assets/img/profil.png"
        alt="Photo de profil de Katleen SORHAINDO"
      />
      <h2>À propos de moi</h2>
      <p className="py-4">
        Après une décennie passée à travailler dans une administration privé,
        j'ai acquis de nombreuses compétences essentielles en gestion, en
        communication, en résolution de problèmes, et en formation d'équipes.
      </p>
      <p>
        Ma décision de me tourner vers le développement web découle de ma
        passion pour la technologie et la création. J'ai investi du temps et de
        l'énergie pour acquérir des compétences techniques en développement
        front-end et back-end, ainsi qu'en conception web.
      </p>
    </>
  );
};

export default Profil;
