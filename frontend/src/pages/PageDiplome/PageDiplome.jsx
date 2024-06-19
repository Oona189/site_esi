import React from "react";

import IntroImg from "./../../assets/accueil.png";
import SectionAuthentificationDiplome from "./SectionAuthentificationDiplome";
import SectionRetrait from "./SectionRetrait";
import SectionDocs from "./SectionDocs";
import Hero from "../../components/Hero";

function Diplome() {
  return (
    <div className="w-screen bg-[#E8EEFF] overflow-auto">
      <Hero
        title="Diplômes"
        section="Etude et scolarité"
        backgroundImage={IntroImg}
      />
      {/* Section chemin */}
      <section className="w-full">
        <div className="URL_section flex flex-row align-center justify-start my-2">
          <div className="element mr-5 ml-5">Scolarité</div>
          <div className="link mr-5 ml-5"></div>
          <div className="element mr-5 ml-5">Diplômes</div>
        </div>
      </section>
      <section className="w-full py-5">
        <SectionAuthentificationDiplome />
      </section>
      <section className="w-full bg-white py-5">
        <SectionRetrait />
      </section>
      <section className="w-full py-2">
        <SectionDocs />
      </section>
    </div>
  );
}

export default Diplome;
