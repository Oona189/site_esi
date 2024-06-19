import React from "react";
import DetailComponent from "../../components/DetailComponent";

function SectionAuthentificationDiplome() {
  return (
    <div className="flex flex-col justify-center items-center mx-10 gap-5">
      <div className="Title flex flex-col justify-center items-center mb-1">
        <h1 className="lg:text-4xl text-center md:text-3xl text-2xl font-extrabold">
          Authentification
        </h1>
        <div className="bg-[rgb(0,97,178)] lg:w-[300px] md:w-[240px] w-[190px] h-[5px] my-0" />
      </div>
      <DetailComponent
        title={"Authentification Diplôme Ingénieur + Master"}
        detail={[
          {
            text: "Etudiants n’ayant pas encore terminé leur scolarité:",
            stat: false,
          },
          { text: "Originaux des Certificats de Scolarité", stat: true },
          { text: "Copie du Relevé de Note du BAC.", stat: true },
          { text: "Originaux des Relevés de Notes.", stat: true },
          { text: "Etudiants diplômés Ingénieurs :", stat: false },
          {
            text: "Diplôme final ou l’original de l’Attestation provisoire.",
            stat: true,
          },
          { text: "Copie du Relevé de Note du BAC.", stat: true },
          {
            text: "Original du relevé des Notes Global ou originaux des Relevés de Notes.",
            stat: true,
          },
          {
            text: "N.B : Ne plus légaliser les documents pédagogiques photocopiés.",
            stat: false,
          },
        ]}
      />

      <DetailComponent
        title={"Authentification Diplôme Magister"}
        detail={[
          {
            text: "Diplôme final ou l’original de l’Attestation provisoire.",
            stat: true,
          },
          { text: "Copie du Relevé de Note du BAC.", stat: true },
          { text: "Originaux des relevés de Notes.", stat: true },
          {
            text: "Copie de l’arrêté d’habilitation de la filière portant le nombre de postes ouverts.",
            stat: true,
          },
          {
            text: "PV des Résultats du concours d’accès à la post-Graduation (classement) visé par le conseil Scientifique.",
            stat: true,
          },
          { text: "Procès Verbal de Soutenance.", stat: true },
        ]}
      />
      <DetailComponent
        title={
          "Authentification Diplôme Doctorat + Doctorat science + Doctorat LMD"
        }
        detail={[
          {
            text: "Diplôme final ou l’original de l’Attestation provisoire (Doctorat ou Doctorat science).",
            stat: true,
          },
          { text: "Copie de Relevé de Note du BAC.", stat: true },
          {
            text: "Procès Verbal de Soutenance de Doctorat ou Doctorat science.",
            stat: true,
          },
        ]}
      />
    </div>
  );
}

export default SectionAuthentificationDiplome;
