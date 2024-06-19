import React from "react";
import PhotoEsiDE from "./../../assets/photo_esi_DE.png";

function SectionOrganisationFormation() {
  return (
    <div className="flex mx-10 flex-col gap-10 items-center">
      <h1 className="Title2 text-center font-extrabold lg:text-4xl md:text-3xl text-2xl text-[rgb(0,97,178)]">
        Organisation générale de la formation
      </h1>
      <div className="flex md:flex-row flex-col-reverse md:gap-20 items-center gap-5">
        <div className="rounded-[20px] outline outline-black outline-1 outline-offset-[-1px] md:w-2/3 p-5 w-full bg-[#E8EEFF]">
          <span className="font-normal lg:text-2xl text-[18px] md:text-xl text-black">
            <span>
              La formation d’ingénieur d’état en informatique de l’Ecole
              nationale Supérieure d’Informatique ESI Alger comprend un cycle
              préparatoire – régi par l’
            </span>
            <span className="text-[rgb(3,95,175)]">
              arrêté N°704 du 03 novembre 2014
            </span>
            <span>
               et un second cycle. La formation actuelle du second cycle offre
              quatre spécialités :<br />
              Systèmes Informatiques (SIQ) (
            </span>
            <span className="text-[rgb(3,95,175)]">
              Arrêté N°624 du 24 Juillet 2014
            </span>
            <span>
              ).
              <br />
              Systèmes d’Information et Technologies (SIT) (
            </span>
            <span className="text-[rgb(3,95,175)]">
              Arrêté N°625 du 24 Juillet 2014
            </span>
            <span>
              ).
              <br />
              Systèmes Informatiques et Logiciels (SIL) (
            </span>
            <span className="text-[rgb(3,95,175)]">
              Arrêté N°623 du 24 Juillet 2014
            </span>
            <span>
              ).
              <br />
              Systèmes Intelligents et Données (SID) (
            </span>
            <span className="text-[rgb(3,95,175)]">
              Arrêté N°1455 du 30 Décembre 2021
            </span>
            <span>).</span>
          </span>
        </div>
        <div className="md:w-1/3">
          <img className="rounded-[15px]" src={PhotoEsiDE} alt="alt text" />
        </div>
      </div>
    </div>
  );
}

export default SectionOrganisationFormation;
