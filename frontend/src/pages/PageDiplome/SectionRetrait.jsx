import React from "react";
import OrganigrammeElement from "../../components/OrganigrammeElement";
import DetailComponent from "../../components/DetailComponent";
import infoIcon from "./../../assets/infoIcon.svg";

function SectionRetrait() {
  return (
    <div className="flex justify-between items-center gap-10 mx-10 my-1">
      <div className="flex flex-col md:gap-15 items-center justify-center md:w-2/3 gap-10">
        <h1 className="Title2 text-center font-extrabold lg:text-4xl md:text-3xl text-2xl text-[rgb(0,97,178)]">
          Retrait du diplôme
        </h1>
        <div className="flex flex-col outline bg-[#E8EEFF] rounded-[10px] outline-[rgb(8,53,92)] outline-1 outline-offset-[-1px] p-2">
          <div className="flex gap-1 items-center">
            <img
              className="md:w-[30px] w-[30px] md:h-[20px] h-[20px] "
              src={infoIcon}
              alt="alt text"
            />
            <h1 className="Title2 text-center font-bold text-xl text-[rgb(0,97,178)]">
              Important
            </h1>
          </div>
          <p className="font-medium text-xl">
            La durée approximative d’obtention du dîplome final est de 30 jours
            à compter de la date de dépôt du dossier papier au niveau du service
            des dîplomes, bureau n ° 204.
          </p>
        </div>
        <div className="flex flex-col gap-5 justify-center p-1">
          <DetailComponent
            title={"1. Retrait Du Diplôme Final Ingénieur :"}
            detail={[
              { text: "Extrait de Naissance (N° 07).", stat: true },
              { text: "Original du Relevé de notes du BAC.", stat: true },
              {
                text: "Originaux des Relevés de Notes du Cursus.",
                stat: true,
              },
              { text: "Attestation provisoire de succès.", stat: true },
              { text: "Fiche de Renseignements (Ingénieur).", stat: true },
              { text: "Demande manuscrite", stat: true },
            ]}
          />

          <DetailComponent
            title={"2. Retrait Du Diplôme Final Master :"}
            detail={[
              {
                text: "Originaux des Relevés de Notes Master.",
                stat: true,
              },
              { text: "Attestation provisoire de succès.", stat: true },
              {
                text: "Fiche de Renseignement Ingénieur & Master.",
                stat: true,
              },
            ]}
          />

          <DetailComponent
            title={"3. Retrait Du Diplôme Final Magister :"}
            detail={[
              {
                text: "Demande manuscrite + Fiche de Renseignements Magister.",
                stat: true,
              },
              {
                text: "Copie de l’arrêté d’habilitation de la filière portant le nombre de postes ouverts.",
                stat: true,
              },
              {
                text: "Résultats du concours d’accès à la post-Graduation (classement) visé par le conseil scientifique.",
                stat: true,
              },
              {
                text: "Original du Relevé de Notes du Cursus de la 1ère année de post-graduation.",
                stat: true,
              },
              {
                text: "Attestation provisoire de succès Magister.",
                stat: true,
              },
              { text: "Extrait de Naissance (N° 07).", stat: true },
              {
                text: "P.V. Soutenance + Original du Relevé de Notes du BAC.",
                stat: true,
              },
              {
                text: "Copie de l’autorisation de soutenance.",
                stat: true,
              },
              { text: "Page de garde de la thèse.", stat: true },
              {
                text: "Copie authentifiée du diplôme définitif de la Graduation.",
                stat: true,
              },
              {
                text: "Attestation de Succès au concours d’accès au Magister.",
                stat: true,
              },
            ]}
          />

          <DetailComponent
            title={
              "4. Retrait Du Diplôme Final Docteur en Sciences et docteur LMD :"
            }
            detail={[
              {
                text: "Demande manuscrite + Fiche de Renseignements Docteur en Sciences ou Fiche de Renseignements Docteur.",
                stat: true,
              },
              {
                text: "Original de l’Attestation provisoire de Succès Docteur en Sciences.",
                stat: true,
              },
              { text: "Extrait de Naissance (N° 07).", stat: true },
              { text: "P.V. de Soutenance.", stat: true },
              {
                text: "Copie de l’autorisation de soutenance.",
                stat: true,
              },
              {
                text: "Copie authentifiée du diplôme définitif de la Graduation + Magister",
                stat: true,
              },
              { text: "Original du Relevé de Notes du BAC.", stat: true },
            ]}
          />
        </div>
      </div>
      <div className="md:flex md:flex-col md:w-1/3 md:p-7 md:gap-5 md:items-center hidden">
        <OrganigrammeElement
          style={{ flex: 1, backgroundColor: "#08355C", color: "#FFF" }}
          nom={" M. Mohamed BENHADJI"}
          post={"Service des diplômes"}
          numPoste={3007}
          tlp={"+213 23 93 91 43"}
        />
        <button className="text-white font-medium text-xl text-center p-3 rounded-[20px] bg-[#0061B2] w-fit">
          Contactez-nous
        </button>
      </div>
    </div>
  );
}

export default SectionRetrait;
