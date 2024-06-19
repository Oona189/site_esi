import React from "react";
import Hero from "../../components/Hero";
import IntroImg from "./../../assets/accueil.png";
import TresorImg from "./../../assets/Tresor-ESI.png";
import TalentImg from "./../../assets/Logo_ESI_talents.png";
import Calendar from "./Calendar";
import SectionDocs from "./SectionDocs";

function Ressources_Outils() {
  return (
    <div className="w-screen bg-[#E8EEFF] overflow-auto">
      <Hero
        title="Ressources et outils"
        section="Etude et scolarité"
        backgroundImage={IntroImg}
      />
      {/* Section chemin */}
      <section className="w-full">
        <div className="URL_section flex flex-row align-center justify-start my-2">
          <div className="element mr-5 ml-5">Scolarité</div>
          <div className="link mr-5 ml-5"></div>
          <div className="element mr-5 ml-5">Ressources et outils</div>
        </div>
      </section>
      {/* Section calendrier*/}
      <section className="w-full py-5">
        <Calendar />
      </section>

      {/* Section Ressources utiles */}
      <section className="w-full py-5">
        <div className="flex flex-col gap-5">
          <div className="Title bg-white py-5 flex flex-col justify-center items-center mb-1">
            <h1 className="lg:text-4xl text-center md:text-3xl text-2xl font-extrabold">
              Ressources utiles
            </h1>
            <div className="bg-[rgb(0,97,178)] lg:w-[300px] md:w-[240px] w-[190px] h-[5px] my-0" />
          </div>
          <div className="flex md:flex-row flex-col mx-10 gap-5 items-center">
            <div className="flex flex-col items-start mx-10 gap-5 md:w-2/3">
              <h1 className="Title2 text-center font-extrabold lg:text-3xl md:text-2xl text-xl text-[rgb(0,97,178)]">
                Trésor ESI
              </h1>
              <div className="flex flex-col items-end">
                <p className="md:text-xl text-justify">
                  Trésor ESI est un site web créé par le club scientifique CSE
                  de l'école ESI. Il sert de plateforme d'échange pour les
                  cours, TD et TP des étudiants de l'école. Les étudiants
                  peuvent consulter et contribuer à ce site, favorisant ainsi la
                  collaboration et l'accès facile aux ressources pédagogiques.
                </p>
                <button className="font-medium md:text-xl text-center p-3 rounded-[20px] outline outline-[rgb(8,53,92)] outline-1 outline-offset-[-2px]">
                  Accéder
                </button>
              </div>
            </div>

            <img
              className="md:h-1/6 md:w-1/6  hidden md:block object-fill "
              src={TresorImg}
              alt={"architecture-img"}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="bg-white p-10 flex">
          <div></div>
        </div>
      </section>
      <section className="w-full py-5">
        <div className="flex flex-col gap-5">
          <div className="flex md:flex-row-reverse flex-col mx-10 gap-5 items-center">
            <div className="flex flex-col items-start mx-10 gap-5 md:w-2/3">
              <h1 className="Title2 text-center font-extrabold lg:text-3xl md:text-2xl text-xl text-[rgb(0,97,178)]">
                Talent ESI
              </h1>
              <div className="flex flex-col items-end">
                <p className="md:text-xl text-justify">
                  Trésor ESI est un site web créé par le club scientifique CSE
                  de l'école ESI. Il sert de plateforme d'échange pour les
                  cours, TD et TP des étudiants de l'école. Les étudiants
                  peuvent consulter et contribuer à ce site, favorisant ainsi la
                  collaboration et l'accès facile aux ressources pédagogiques.
                </p>
                <button className="font-medium md:text-xl text-center p-3 rounded-[20px] outline outline-[rgb(8,53,92)] outline-1 outline-offset-[-2px] ">
                  Accéder
                </button>
              </div>
            </div>
            <img
              className="md:h-1/5 md:w-1/5 hidden md:block object-fill "
              src={TalentImg}
              alt={"architecture-img"}
            />
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-2">
        <SectionDocs />
      </section>
    </div>
  );
}

export default Ressources_Outils;
