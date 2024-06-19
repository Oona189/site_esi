import React from "react";
import IntroImg from "./../../assets/accueil.png";
import Hero from "../../components/Hero";
import Menu from "../../components/Menu";
import SectionPartenaire from "./SectionPartenaire";

function PagePartenaires() {
  const menuItems = [
    { nom: "Partenaires nationaux", section: <SectionPartenaire /> },
    { nom: "Partenaires internationaux", section: <SectionPartenaire /> },
  ];
  return (
    <div className="w-screen bg-white overflow-auto">
      <Hero
        title="Partenaires"
        section="Partenariat"
        backgroundImage={IntroImg}
      />
      <section className="w-full">
        <Menu menuItems={menuItems} />
      </section>
    </div>
  );
}

export default PagePartenaires;
