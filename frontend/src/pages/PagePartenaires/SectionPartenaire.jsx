import React from 'react'
import PartenaireCard from '../../components/PartenaireCard'
import Sonatrach from "./../../assets/sonatrach 1.png";
import IntroImg from "./../../assets/accueil.png";

function SectionPartenaire() {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-5">
        <PartenaireCard
        image={IntroImg}
        nom={"Sonatrach"}
        description={"entreprise pétrolière et gazière algérienne"}
      />
      <PartenaireCard
        image={Sonatrach}
        nom={"Sonatrach"}
        description={"entreprise pétrolière et gazière algérienne"}
      />
      <PartenaireCard
        image={Sonatrach}
        nom={"Sonatrach"}
        description={"entreprise pétrolière et gazière algérienne"}
      />
      <PartenaireCard
        image={Sonatrach}
        nom={"Sonatrach"}
        description={"entreprise pétrolière et gazière algérienne"}
      />
      <PartenaireCard
        image={Sonatrach}
        nom={"Sonatrach"}
        description={"entreprise pétrolière et gazière algérienne"}
      />
      <PartenaireCard
        image={Sonatrach}
        nom={"Sonatrach"}
        description={"entreprise pétrolière et gazière algérienne"}
      />
      <PartenaireCard
        image={Sonatrach}
        nom={"Sonatrach"}
        description={"entreprise pétrolière et gazière algérienne"}
      />
        </div>

  )
}

export default SectionPartenaire