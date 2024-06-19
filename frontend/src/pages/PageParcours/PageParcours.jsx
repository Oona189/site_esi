import React from "react";
import IntroImg from "./../../assets/accueil.png";
import Hero from "../../components/Hero";
import SectionArchiEtude from "./SectionArchiEtude";
import SectionDetailFormation from "./SectionDetailFormation";
import Sidebar from "./Sidebar";
import SectionOrganisationFormation from "./SectionOrganisationFormation";
import Organigramme from "./Organigramme";

import SectionReglementation from "./SectionReglementation";
import SectionDocs from "./SectionDocs";

function Parcours() {
  return (
    <div className=" w-screen bg-[#E8EEFF] overflow-auto">
      <Hero
        title="étude et scolarité"
        section="Parcours"
        backgroundImage={IntroImg}
      />
      <section className="w-full">
        <div className="URL_section flex flex-row align-center justify-start my-2">
          <div className="element mr-5 ml-5">Scolarité</div>
          <div className="link mr-5 ml-5"></div>
          <div className="element mr-5 ml-5">Parcours</div>
        </div>
      </section>
      <section className="w-full m-10">
        <SectionArchiEtude />
      </section>
      <section className="w-full bg-white py-5">
        <div className="flex justify-between items-start gap-10 mx-10 my-1">
          <SectionDetailFormation />
          <Sidebar />
        </div>
      </section>
      <section className="w-full py-5 bg-white">
        <SectionOrganisationFormation />
      </section>

      <section className="Organigramme w-full py-2">
        <Organigramme />
      </section>
      <section className="w-full bg-white py-2">
        <SectionDocs />
      </section>
      <section className="w-full py-2">
        <SectionReglementation />
      </section>
    </div>
  );
}

export default Parcours;
