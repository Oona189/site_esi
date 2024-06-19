import React from "react";
import "../../src/App.css";
import { logo } from "../assets";
import { footer1, footer2 } from "../constants";
//import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full h-300px bg-black flex flex-row justify-between px-28 py-9 text-white">
      <div className="flex flex-col gap-4 items-center justify-center">
        <img src={logo} alt="logo" className="w-[200px]" />
        <p className="w-[250px] text-center">
          Ecole Nationale Superieure d’Informatique ESI - ex INI
        </p>
        <p className="font-bold">Alger - Oued Smar 16309</p>
      </div>
      <div>
        <p className="font-bold mb-3">A propos de l'école</p>
        {footer1.map((item) => (
          <p className="text-[14px]">
            <span className="mr-3">-</span>
            {item.title}
          </p>
        ))}
      </div>
      <div>
        <p className="font-bold mb-3">Coopération & Externalisation</p>
        {footer2.map((item) => (
          <p className="text-[14px]">
            <span className="mr-3">-</span>
            {item.title}
          </p>
        ))}
      </div>
      <div className="flex flex-col items-center gap-6">
        <p className="font-bold">Signalements et doléances</p>
        <p className="w-[250px] text-center">Vous pouvez utiliser ce formulaire pour signaler toute anomalie</p>
        <button className="bg-dark-blue px-6 py-2 font-semibold rounded-xl">Signaler</button>
        <div className="flex items-center flex-col bg-dark-blue px-6 py-3 rounded-xl">
            <p>Vous avez des</p>
            <p>questions</p>
            <button className="text-black bg-white mt-4 px-3 py-1 rounded-xl">Contactez-nous</button>
        </div>
      </div>
    </footer>
  );
};
