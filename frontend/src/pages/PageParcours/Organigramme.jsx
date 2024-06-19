import React from "react";
import OrganigrammeElement from "../../components/OrganigrammeElement";

function Organigramme() {
  return (
    <div className="flex flex-col items-center gap-1 mx-10 my-5">
      <div className="Title flex flex-col justify-center items-center ">
        <h1 className="lg:text-4xl text-center md:text-3xl text-2xl font-extrabold">
          Direction des études
        </h1>
        <div className="bg-[rgb(0,97,178)] lg:w-[340px] md:w-[290px] w-[230px] h-[5px] my-0" />
      </div>
      <div className="grid grid-cols-1 gap-5 mx-10 my-5">
        <OrganigrammeElement
          style={{ width: "100%", height: "100%" }}
          nom={"Mme Nassira CHERID"}
          post={"DIRECTRICE ADJOINTE DES ETUDES"}
          numPoste={3006}
          tlp={"+213 23 93 91 43"}
          email={"n_cherid@esi.dz"}
        />
      </div>
      <div className="grid grid-cols-3 gap-5 mx-10 my-5">
        <OrganigrammeElement
          style={{ width: "100%", height: "100%" }}
          nom={"Mme Naima LOUNES"}
          post={"Service Scolarité"}
          numPoste={3084}
        />
        <OrganigrammeElement
          style={{ width: "100%", height: "100%" }}
          nom={"M. Amar BALLA"}
          post={"Responsable des Stages"}
          numPoste={3079}
        />

        <OrganigrammeElement
          style={{ width: "100%", height: "100%" }}
          nom={" M. Mohamed BENHADJI"}
          post={"Service des diplômes"}
          numPoste={3007}
          tlp={"+213 23 93 91 43"}
        />
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5 mx-10 my-5">
        <OrganigrammeElement
          style={{ width: "100%", height: "100%" }}
          nom={" M. Rachid AIT AMRANE"}
          post={"Chef de département des classes préparatoires"}
          numPoste={3081}
          tlp={"+213 23 93 91 46"}
          email={"r_ait_amrane@esi.dz"}
        />

        <OrganigrammeElement
          style={{ width: "100%", height: "100%" }}
          nom={"M. ANNANE Mohamed"}
          post={"Chef de département du second cycle"}
          numPoste={3089}
          email={"m_anane@esi.dz"}
        />
      </div>
    </div>
  );
}

export default Organigramme;
