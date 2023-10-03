import React from "react";

export const Profil = () => {
  return (
    <div className="xl:flex">
      <img
        className="m-4 aspect-[6/5] max-w-sm rounded-2xl object-cover"
        src="/assets/img/profil.png"
        alt="profil de Katleen SORHAINDO"
      />
      <div className="mx-8">
        <h2 className="text-secondary m-8">Qui suis-je ?</h2>
        <div className="flex flex-col">
          <p className="">
            En tant que développeur web en reconversion professionnelle, je
            combine une solide expérience dans le service client, la gestion,
            l'investigation et la résolution de problèmes.
          </p>
          <p className="my-4">
            Ma décision de me tourner vers le développement web découle de ma
            passion pour la technologie et la création. J'ai investi du temps et
            de l'énergie pour acquérir des compétences techniques en
            développement front-end et back-end, ainsi qu'en conception web.
          </p>
          <p>
            Je vous invite à explorer mon site pour découvrir de manière
            concrète les compétences que j'ai acquises et les projets
            passionnants que j'ai réalisé.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profil;
