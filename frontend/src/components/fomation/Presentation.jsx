import React from "react";
import { CardInfos } from "../../constants/index.js";

const Card = ({ info }) => {
  return (
    <div className="w-[400px] h-[270px] bg-light-blue rounded-md py-3 px-6 relative">
      <p className="text-dark-blue/40 w-[400px] mb-4">{info.titre}</p>
      {info.details.map((item) => (
        <div className="flex flex-row justify-between border-b border-black/20 py-2 px-2">
          <p>{item.name}</p>
          <p>{item.volume}</p>
        </div>
      ))}
      <div className="absolute bottom-3">
        <p>
          <span>Volume Globale : </span>
          <span className="font-semibold">{info.volumeG}</span>
        </p>
        <p>
          <span>Taux (%) : </span>
          <span className="font-semibold">{info.taux}</span>
        </p>
      </div>
    </div>
  );
};

export const Presentation = () => {
  return (
    <div className="pb-20">
      <p className="text-[20px] font-bold text-dark-blue">Présentation</p>
      <p className="mt-4 text-justify">
        L’école nationale supérieure d’informatique organise la 4ème session de
        formation avant promotion « Mars 2024 » pour l’accès au grade
        d’assistant ingénieur en informatique Niveau 1 au profit des techniciens
        supérieures en informatique des établissements publics.
      </p>
      <p className="mt-3 text-justify">
        La formation permettra l’accès au grade d’assistant en informatique et
        contient un enseignement de 210 heures réparti sur 7 mois à raison d’une
        semaine par mois.
      </p>
      <p className="mt-3 mb-4 text-justify">
        Les connaissances acquises durant cette formation sont organisées en 5
        domaines de compétences : Compétences de base, Système et Réseau,
        Systèmes d’information, Développement et compétences transversales. La
        répartition des matières et du volume horaire par catégorie est
        illustrée dans le tableau suivant :
      </p>
      <div className="mt-20 w-[800px] flex flex-row gap-24 overflow-x-scroll snap-start pl-0 ml-[10%]">
        {CardInfos?.map((info) => (
          <Card info={info} />
        ))}
      </div>
    </div>
  );
};