import React, { useState, useRef } from "react";
import accueil from "../assets/accueil.png";
import graduation from "../assets/graduation.png";
import students1 from "../assets/students1.png";
import NewsSlider from "../components/NewsSlider";
import Testimonials from "../components/testimonials";
import logoESI from "../assets/logoESI.svg";
import Modal from "react-modal";
import NavbarComponent from "../components/Navbar";
import Vector from "../assets/Vector.png";
import Vector2 from "../assets/Vector2.png";

const Accueil = () => {
  const StatisticCircle = ({ number }) => (
    <div className="flex flex-col items-center mx-4 my-2 relative">
      <div className="bg-blue text-white font-bold rounded-full h-28 w-28 flex items-center justify-center text-center text-2xl p-28 relative">
        {number}
        {/* Animation d'arc autour du cercle */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-full absolute top-0 left-0">
            <div className="w-full h-full rounded-full border-t-4 border-darkgrey animate-spin"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {/* First Section */}
    
      
      <section
        className="relative h-screen flex  bg-center"
        style={{ backgroundImage: `url(${accueil})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Dark overlay */}
        <div className="mt-60 ml-24 z-10 md:mt-32 md:ml-12 sm:mt-16 sm:ml-6">
          <div className="flex flex-col space-y-3">
            <h1 className="lg:text-7xl md:text-4xl sm:text-4xl text-white font-bold leading-tight mb-4 ml-8 md:ml-8 sm:ml-8">
              Ensemble vers l'Excellence,
            </h1>
            <h1 className="px-24 lg:text-7xl md:text-4xl sm:text-4xl text-white font-bold leading-tight mb-4 ml-8 md:ml-0 sm:ml-0">
              Ensemble vers l'Avenir
            </h1>
          </div>
          <div className="lg:ml-128 md:items-center sm:items-center lg:mt-24  flex-rowmd:mt-8  space-y-8  sm:mt-4  sm:space-x-4 sm:space-y-4 flex lg:flex-row  lg:space-x-8  sm:flex-col ">
            <a
              href="/page"
              className="mt-4 sm:ml-4 w-72 h-28 text-2xl bg-blue text-white pt-7 text-center font-bold py-2 px-4 rounded-[28px] focus:outline-none focus:ring-2 hover:bg-darkgrey hover:scale-105 transition duration-300 ease-in-out md:w-64 md:h-24 md:text-xl md:pt-5 sm:w-48 sm:h-24 sm:text-lg sm:pt-4"
            >
              Devenir notre partenaire
            </a>
            <a
              href="/page"
              className=" w-72 h-28 text-2xl bg-blue text-white pt-7 text-center font-bold py-2 px-4 rounded-[28px] focus:outline-none focus:ring-2 hover:bg-darkgrey hover:scale-105 transition duration-300 ease-in-out md:w-64 md:h-24 md:text-xl md:pt-5 sm:w-48 sm:h-24 sm:text-lg sm:pt-4"
            >
              Sponsoriser un evenement
            </a>
            <a
              href="/page"
              className=" relative w-72 h-28 text-2xl bg-blue text-white pt-7 text-center font-bold py-2 px-4 rounded-[28px] focus:outline-none focus:ring-2 hover:bg-darkgrey hover:scale-105 transition duration-300 ease-in-out md:w-64 md:h-24 md:text-xl md:pt-5 sm:w-48 sm:h-24 sm:text-lg sm:pt-4 sm:ml-8"
            >
              Demander une formation
            </a>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="flex justify-center items-center py-16 md:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-8">
            <h2 className="text-3xl md:text-5xl mb-3 text-darkgrey pb-2 font-bold relative before:content-[''] before:h-4 before:bg-blue before:w-full before:absolute before:bottom-2 before:left-0 before:-z-10">
              Actualités
            </h2>
            <div className="w-full ">
              <NewsSlider />
            </div>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="flex bg-darkblue h-screen sm:h-190">
        <div className="flex flex-col md:flex-row mx-auto w-full-xl ">
          <img
            src={students1}
            alt="Accueil"
            className="w-full md:w-1/2 h-screen sm:h-190 "
          />
          <div className="flex flex-col justify-center items-center md:w-1/2 px-8 py-12 md:py-0 gap-8 ">
            <h1 className="font-bold text-4xl md:text-4xl sm:text-2xl  text-blue text-center mb-8">
              A propos de l’école
            </h1>
            <p className="text-white text-3xl md:text-2xl  text-center sm:text-xl ">
              L'École Supérieure d'Informatique (ESI) d'Alger est une
              institution d'enseignement supérieur spécialisée dans les
              technologies de l'information, fondée en 1995. Reconnue pour son
              excellence académique, l'ESI propose des programmes de formation
              couvrant divers domaines de l'informatique, avec un corps
              enseignant qualifié et des infrastructures modernes. La vie
              étudiante est également promue à travers des événements culturels
              et des clubs.
            </p>
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section className="py-16 w-screen">
        <div className="max-w-6xl mx-auto px-4 flex flex-col space-y-16 items-center">
          <h2 className="text-5xl mb-3 text-darkgrey font-bold relative before:content-[''] before:h-4 before:bg-blue before:w-full before:absolute before:bottom-2 before:left-0 before:-z-10 text-center">
            ESI en chiffres
          </h2>
          <div className="flex flex-col gap-8 md:flex-row md:gap-16">
            {/* Première ligne */}
            <div className="flex flex-col md:flex-row">
              <div className="flex justify-center mb-8 gap-8 md:flex-col md:mb-0 md:justify-start">
                <StatisticCircle number="1206 Étudiants" />
                <StatisticCircle number="120 Enseignants" />
              </div>
              <div className="flex justify-center mb-8 gap-8 md:flex-col md:mb-0 md:justify-start">
                <StatisticCircle number="134 Doctorants" />
                <StatisticCircle number="175 Travailleurs" />
              </div>
            </div>
            {/* Deuxième ligne */}
            <div className="flex flex-col items-center md:flex-row">
              <div className="flex justify-center mb-8 gap-8 md:flex-col md:mb-0 md:justify-start">
                <StatisticCircle number="10 Clubs d'étudiants" />
                <StatisticCircle number="2 Laboratoires de recherche" />
              </div>

              {/* Seul sur la dernière ligne */}
              <div className="flex flex-col gap-3 justify-center items-center bg-gray-800 text-white font-bold rounded-full h-64 w-64 md:ml-16">
                <h1 className="text-2xl font-normal">Plus de</h1>
                <h1 className="text-4xl font-bold">8269</h1>
                <h1 className="text-2xl font-bold">Diplomés</h1>
                {/* Animation d'arc autour du cercle */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="w-full h-full absolute top-0 left-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*TESTIMONIALS */}
      <section>
        <Testimonials></Testimonials>
      </section>

      {/* Last Section */}

      <section
        className="relative h-screen flex bg-cover bg-center"
        style={{ backgroundImage: `url(${graduation})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Dark overlay */}
        <div className="mt-60 ml-24 z-10 md:mt-32 md:ml-12 sm:mt-40 sm:ml-6">
          <div className="flex flex-col space-y-3">
            <h1 className="lg:text-7xl md:text-4xl sm:text-4xl text-white font-bold leading-tight mb-4 ml-8 md:ml-8 sm:ml-8">
              Qu'attendez-vous pour
            </h1>
            <h1 className="px-24 lg:text-7xl md:text-4xl sm:text-4xl text-white font-bold leading-tight mb-4 ml-8 md:ml-0 sm:ml-0">
              devenir un ESISTE ?
            </h1>
          </div>
          <div className="lg:ml-160 md:items-center sm:items-center lg:mt-24  flex-rowmd:mt-8  space-y-8  sm:mt-4  sm:space-x-4 sm:space-y-4 flex lg:flex-row  lg:space-x-8  sm:flex-col ">
            <a
              href="/page"
              className="mt-4 sm:ml-4 lg:w-60 h-28 lg:text-2xl bg-blue text-white lg:pt-8 text-center font-bold py-2 px-4 rounded-[28px] focus:outline-none focus:ring-2 hover:bg-darkgrey hover:scale-105 transition duration-300 ease-in-out md:w-64 md:h-24 md:text-2xl md:pt-5 sm:w-36 sm:h-20 sm:text-lg sm:pt-7"
            >
              L'école
            </a>
            <a
              href="/Etudes&Scolarité/parcours"
              className=" lg:w-60 h-28 lg:text-2xl bg-blue text-white lg:pt-8 text-center font-bold py-2 px-4 rounded-[28px] focus:outline-none focus:ring-2 hover:bg-darkgrey hover:scale-105 transition duration-300 ease-in-out md:w-64 md:h-24 md:text-xl md:pt-5 sm:w-36 sm:h-20 sm:text-lg sm:pt-7"
            >
              Le parcours
            </a>
            <a
              href="/page"
              className=" relative lg:w-60 h-28 lg:text-2xl bg-blue text-white lg:pt-8 text-center font-bold py-2 px-4 rounded-[28px] focus:outline-none focus:ring-2 hover:bg-darkgrey hover:scale-105 transition duration-300 ease-in-out md:w-64 md:h-24 md:text-xl md:pt-5 sm:w-36 sm:h-20 sm:text-lg sm:pt-4 sm:ml-8"
            >
              La vie à l'école
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;
