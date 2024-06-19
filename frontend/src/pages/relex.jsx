import React from "react";
import RelexDescription from "../assets/RelexDescription.png";
import Accueil from "../assets/accueil.png";
import Hero from "../components/Hero";
import Statistics from "../components/relex/statistics";
import DetailComponent from "../components/DetailComponent";
import DocCard from "../components/DocCard";
import OrganigrammeElement from "../components/OrganigrammeElement";
const Relex = () => {
  const statisticItems = [
    { number: "12", title: "Formations continues depuis 2011 ", link: "#" },
    { number: "25+", title: "Formations continues depuis 2011 ", link: "#" },
    { number: "37+", title: "Formations continues depuis 2011 ", link: "#" },
    { number: "48", title: "Formations continues depuis 2011 ", link: "#" },
  ];

  const DetailComponentData = [
    {
      title: "Authentification Diplôme Ingénieur + Master",
      detail: [
        {
          text: "Etudiants n'ayant pas encore terminé leur scolarité:",
          stat: false,
        },
        { text: "Originaux des Certificats de Scolarité", stat: true },
        { text: "Copie du Relevé de Note du BAC.", stat: true },
        {
          text: "N.B : Ne plus légaliser les documents pédagogiques photocopiés.",
          stat: false,
        },
      ],
    },
    {
      title: "Authentification Diplôme Ingénieur + Master",
      detail: [
        {
          text: "Etudiants n'ayant pas encore terminé leur scolarité:",
          stat: false,
        },
        { text: "Originaux des Certificats de Scolarité", stat: true },
        { text: "Copie du Relevé de Note du BAC.", stat: true },
        {
          text: "N.B : Ne plus légaliser les documents pédagogiques photocopiés.",
          stat: false,
        },
      ],
    },
    {
      title: "Authentification Diplôme Ingénieur + Master",
      detail: [
        {
          text: "Etudiants n'ayant pas encore terminé leur scolarité:",
          stat: false,
        },
        { text: "Originaux des Certificats de Scolarité", stat: true },
        { text: "Copie du Relevé de Note du BAC.", stat: true },
        {
          text: "N.B : Ne plus légaliser les documents pédagogiques photocopiés.",
          stat: false,
        },
      ],
    },
  ];
  const DocUtilsRelex = [
    { id: 1, title: "Document 1" },
    { id: 2, title: "Document 2" },
    // Ajoutez d'autres données ici si nécessaire
  ];

  return (
    <div className="w-screen bg-[#E8EEFF] overflow-auto">
      {/* Section Hero */}
      <Hero
        title="Direction Adjointe Des Systemes D'Information "
        section="À propos"
        backgroundImage={Accueil}
      />
      {/* Description Relex */}

      <div className=" bg-[#ffffff] mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        {/* Titre */}
        <h1 className="Title2 text-center font-extrabold pt-10 lg:text-4xl md:text-3xl text-2xl text-[rgb(0,97,178)]">
          A propos de DASICRE
        </h1>
        <div className=" flex flex-col md:flex-row justify-between items-center py-8">
          {/* Paragraphe de description */}
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-20 text-justify text-xl ">
            <p className="py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, eget
              aliquam nisl nisl eget nisl. Maecenas malesuada nisl eget quam
              volutpat, eu cursus tellus venenatis. Ut non dui volutpat,
              consectetur ex ac, venenatis arcu. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nullam euismod, nisl eget ultricies
              aliquam, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl.
              Maecenas malesuada nisl eget quam volutpat, eu cursus tellus
              venenatis. Ut non dui volutpat, consectetur ex ac, venenatis arcu.
              Donec euismod nunc id enim faucibus, eget suscipit nulla gravida.
              Quisque vel ex nec libero malesuada{" "}
            </p>
            <p className="py-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl
              Maecenas,Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam euismod, nisl eget ultricies aliquam, nisl nisl aliquet
              nisl Maecenas
            </p>
          </div>
          {/* Image de description */}

          <div className="md:w-1/3">
            <img
              src={RelexDescription}
              alt="Description"
              className="w-auto h-auto"
            />
          </div>
        </div>
        <div className=" mb-6 md:mb-0 md:pr-8 ">
          <p className=" py-6 text-justify text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl
            Maecenas, Nullam euismod, nisl eget ultricies aliquam, Nullam
            euismod, nisl eget ultricies aliquam,
          </p>
        </div>
      </div>
      {/* Section Organigramme */}
      <div className="w-full py-2 flex flex-col items-center gap-1 mx-10 my-5">
        <div className="Title flex flex-col justify-center items-center mb-1">
          <h1 className="lg:text-4xl text-center md:text-3xl text-2xl font-extrabold border-b-4 border-[rgb(0,97,178)] pb-0">
            Organisation
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-5 mx-10 my-5">
          <OrganigrammeElement
            style={{ width: "100%", height: "100%" }}
            nom={"Mr DAHAK Fouad"}
            post={"   Directeur Adjoint RELEX  "}
            numPoste={3006}
            tlp={"0775566897"}
            email={"f_dahak@esi.dz"}
          />{" "}
        </div>
        <div className="grid grid-cols-3 gap-5 mx-10 my-5">
          <OrganigrammeElement
            style={{ width: "100%", height: "100%" }}
            nom={"Mr DAHAK Fouad"}
            post={"   Directeur Adjoint RELEX  "}
            numPoste={3006}
            tlp={"0775566897"}
            email={"f_dahak@esi.dz"}
          />
          <OrganigrammeElement
            style={{ width: "100%", height: "100%" }}
            nom={"Mr DAHAK Fouad"}
            post={"   Directeur Adjoint RELEX  "}
            numPoste={3006}
            tlp={"0775566897"}
            email={"f_dahak@esi.dz"}
          />

          <OrganigrammeElement
            style={{ width: "100%", height: "100%" }}
            nom={"Mr DAHAK Fouad"}
            post={"   Directeur Adjoint RELEX  "}
            numPoste={3006}
            tlp={"0775566897"}
            email={"f_dahak@esi.dz"}
          />
        </div>
      </div>

      {/* Section statistiques */}
      <div className="bg-[#FFFFFF] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="Title2 text-center font-extrabold pb-10 lg:text-4xl md:text-3xl text-2xl text-[rgb(0,97,178)]">
            Statistiques{" "}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {statisticItems.map((item, index) => (
              <Statistics
                key={index}
                number={item.number}
                title={item.title}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Guides */}
      <div className="bg-[#E8EEFF] py-12">
        <div className="Title flex flex-col justify-center items-center mb-1">
          <h1 className="lg:text-4xl text-center md:text-3xl text-2xl font-extrabold border-b-4 border-[rgb(0,97,178)] pb-0">
            Guides
          </h1>
        </div>
        <div className="m-10">
          {DetailComponentData.map((item, index) => (
            <div key={index} className="mb-8">
              <DetailComponent title={item.title} detail={item.detail} />
            </div>
          ))}
        </div>
      </div>

      {/* Section Doc Utils */}

      <div className="bg-[#ffffff] py-12">
        <div className="Title flex flex-col justify-center items-center mb-1">
          <h1 className="lg:text-4xl text-center md:text-3xl text-2xl font-extrabold border-b-4 border-[rgb(0,97,178)] pb-0">
            Documents Utils
          </h1>
        </div>
        <div className="m-10">
          {DocUtilsRelex.map((item, index) => (
            <div key={index} className="mb-8">
              <DocCard key={item.id} title={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Relex;
