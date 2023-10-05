import React from "react";

export const Profil = () => {
  return (
    <div className="xl:flex px-4">
      <img
        className="md:m-4 aspect-[6/5] rounded-2xl object-cover"
        src="/assets/img/profil.png"
        alt="profil de Katleen SORHAINDO"
      />
      <div>
        <h2 className="text-secondary m-8">Qui suis-je ?</h2>
        <div className="flex flex-col">
          <p className="">
            Je suis un développeur web en reconversion professionnelle, ayant
            récemment obtenu la certification professionnelle « Développeur
            intégrateur web » de niveau 5 (bac +2). Cette transition réussie
            s'est déroulée sur une période de six mois, grâce à une formation
            intensive à l'école OpenClassrooms.
          </p>
          <p className="my-4">
            Mon parcours professionnel précédent m'a enseigné l'importance de la
            rigueur, de l'efficacité et de la persévérance, des qualités que
            j'ai pu transférer dans mon nouveau domaine. J'ai également
            développé une forte capacité d'adaptation face aux défis, une
            qualité que je considère essentielle dans le domaine du
            développement web en constante évolution.
          </p>
          <p>
            Ma décision de me lancer dans une carrière de développeur web
            découle de ma passion pour la création, l'innovation technologique
            et le désir constant d'apprendre et de relever de nouveaux défis.
            Mes compétences en matière d'adaptation, de rigueur, associées à ma
            passion pour la technologie, font de moi un candidat motivé et apte
            à continuer d'apprendre et de contribuer de manière significative à
            des projets futurs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profil;
