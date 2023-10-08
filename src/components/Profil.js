import React from "react";

export const Profil = () => {
  return (
    <div className="xl:flex xl:item-center p-4">
      <img
        className="m-auto xl:m-4 aspect-[6/5] rounded-2xl object-cover"
        src="/assets/img/profil.webp"
        alt="profil de Katleen SORHAINDO"
      />
      <div className="xl:flex xl:flex-col xl:justify-center mx-4">
        <h2 className="text-secondary text-center my-8 xl:my-6 xl:text-left">
          Qui suis-je ?
        </h2>
        <div className="flex flex-col">
          <p className="text-secondary">
            Je suis un développeur web en reconversion professionnelle, ayant
            récemment obtenu la certification professionnelle « Développeur
            intégrateur web » de niveau 5 (bac +2) après une transition réussie
            qui s'est déroulée sur une période d'un an.
          </p>
          <p className="my-4 text-secondary">
            Mon parcours professionnel précédent au sein d'un service public m'a
            apporté des compétences solides en termes de rigueur, d'efficacité
            et de persévérance, que j'ai pu transférer avec succès dans le
            domaine du développement web.
          </p>
          <p className="text-secondary">
            J'ai consacré de nombreuses heures à des formations en ligne,
            notamment avec freeCodeCamp, puis j'ai suivi pendant six mois le
            programme intensif de l'école OpenClassrooms, ce qui m'a permis de
            consolider mes compétences techniques et de me qualifier en tant que
            développeur web junior.
          </p>
          <p className="my-4 text-secondary">
            Aujourd'hui, je suis prêt à mettre en pratique ces compétences
            nouvellement acquises et à contribuer au monde du développement web
            avec mon enthousiasme, ma créativité et ma volonté constante
            d'améliorer mes compétences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profil;
