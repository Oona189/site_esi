import React from "react";

function Sidebar() {
  return (
    <div className="sideBar md:flex md:flex-col  md:bg-[rgb(25,47,89)] md:w-1/3 md:p-7 hidden">
      <div className="flex flex-col items-center mt-11 mx-auto">
        <h1 className="font-extrabold  md:text-3xl sm:text-2xl text-white text-center">
          Détails formation
        </h1>
        <hr
          className="bg-white w-full h-px min-h-[1px] mt-[21px] mb-[50px]"
          size={1}
        />
      </div>
      <div className="flex flex-col items-start gap-y-5">
        <span className="font-normal text-start text-2xl text-white underline">
          Type : formation post-bac{" "}
        </span>
        <span className="font-normal text-start text-2xl text-white underline">
          Durée : 5 ans{" "}
        </span>
        <span className="font-normal text-start text-2xl text-white underline">
          Diplôme : ingénieurs d’État en informatique{" "}
        </span>
        <span className="font-normal text-start text-2xl text-white underline">
          Contenu : Composé de 2 cycles :{" "}
        </span>
        <li className="font-normal text-start text-2xl text-white">
          Cycle préparatoire de 2 ans
        </li>
        <li className="font-normal text-start text-2xl text-white">
          Cycle supérieur de 3 ans avec 4 spécialités :
        </li>
        <li className="ml-5 font-normal text-start text-2xl text-white">
          Systèmes Informatiques (SIQ)
        </li>
        <li className="ml-7 font-normal text-start text-2xl text-white">
          Systèmes d’Information et Technologies (SIT)
        </li>
        <li className="ml-7 font-normal text-start text-2xl text-white">
          Systèmes Informatiques et Logiciels (SIL)
        </li>
        <li className="ml-7 font-normal text-start text-2xl text-white">
          Systèmes Intelligents et Données (SID)
        </li>
      </div>
    </div>
  );
}

export default Sidebar;
