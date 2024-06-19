import React from "react";
import DocCard from "../../components/DocCard";

function SectionDocs() {
  return (
    <div className="mx-10 my-5 flex flex-col gap-5">
      <div className="Title flex flex-col justify-center items-center mb-1">
        <h1 className="lg:text-4xl text-center md:text-3xl text-2xl font-extrabold">
          Documents utiles
        </h1>
        <div className="bg-[rgb(0,97,178)] lg:w-[300px] md:w-[240px] w-[190px] h-[5px] my-0" />
      </div>
      <DocCard title={"Fiche de Renseignement Ingénieur"} />
      <DocCard title={"Fiche de Renseignement Ingénieur et Master "} />
      <DocCard title={"Fiche de Renseignement Magister"} />
      <DocCard title={"Fiche de Renseignement Docteur"} />
      <DocCard title={"Fiche de Renseignement Docteur En Sciences"} />
      <DocCard title={"Fiche de Renseignement Docteur LMD"} />
    </div>
  );
}

export default SectionDocs;
