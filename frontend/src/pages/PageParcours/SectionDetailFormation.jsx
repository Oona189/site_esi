import React from "react";
import DetailComponent from "../../components/DetailComponent";

function SectionDetailFormation() {
  return (
    <div className="flex flex-col md:gap-10 items-center justify-center md:w-2/3 gap-10">
      <h1 className="Title2 text-center font-extrabold lg:text-4xl md:text-3xl text-2xl text-[rgb(0,97,178)]">
        Présentation de la formation
      </h1>
      <div className="flex flex-col gap-5 justify-center">
        <DetailComponent
          title={"Deux années de classes préparatoires (CP) :"}
          detail={[
            {
              text: "Deux années sont consacrées à l'enseignement des connaissances de base pour les ingénieurs avant d'aborder des connaissances plus spécifiques.",
              stat: true,
            },
            {
              text: "L'accès aux classes supérieures nécessite la réussite à un concours.",
              stat: true,
            },
          ]}
        />

        <DetailComponent
          title={"Concours dans la fin de 2ème année préparatoire :"}
          detail={[
            {
              text: "Les conditions du concours sont fixées chaque année par arrêté ministériel.",
              stat: true,
            },
            {
              text: "Le concours est ouvert aux étudiants de certaines filières universitaires sous conditions.",
              stat: true,
            },
          ]}
        />

        <DetailComponent
          title={"Une année de socle commun au second cycle (SCS) :"}
          detail={[
            {
              text: "Les étudiants ayant réussi le concours intègrent la première année du second cycle.",
              stat: true,
            },
          ]}
        />

        <DetailComponent
          title={"Deux années de spécialité (4ème + 5ème année) :"}
          detail={[
            {
              text: "L’École offre à ses étudiants quatre spécialités qui sont dispensées pour le cycle ingénieur (SIT, SIQ, SIL et SID).",
              stat: true,
            },
            {
              text: "Le choix se fait à la fin de la 1ère année du second cycle sur la base des notes obtenues durant la première année de second cycle et des places ouvertes par spécialité.",
              stat: true,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default SectionDetailFormation;
