import React, { useState } from "react";
import { styles } from "../styles";
import { Presentation } from "../components/fomation/Presentation.jsx";
import { Planning } from "../components/fomation/Planning.jsx";
import { Programmes } from "../components/fomation/Programmes.jsx";
import { Procedure } from "../components/fomation/Procedure.jsx";
import { Themes } from "../components/fomation/Themes.jsx";
import { Reglementation } from "../components/fomation/Reglementation.jsx";
import { arrow, esi1 } from "../assets/index.js";

const Formation = () => {
  const [currentContent, setCurrentContent] = useState(<Presentation />);

  const [style1, setStyle1] = useState("font-bold bg-light-blue");
  const [style2, setStyle2] = useState("font-semibold");
  const [style3, setStyle3] = useState("font-semibold");
  const [style4, setStyle4] = useState("font-semibold");
  const [style5, setStyle5] = useState("font-semibold");
  const [style6, setStyle6] = useState("font-semibold");

  const handle1 = () => {
    setCurrentContent(<Presentation />);
    setStyle1("font-bold bg-light-blue");
    setStyle2("font-semibold bg-white");
    setStyle3("font-semibold bg-white");
    setStyle4("font-semibold bg-white");
    setStyle5("font-semibold bg-white");
    setStyle6("font-semibold bg-white");
  };
  const handle2 = () => {
    setCurrentContent(<Programmes />);
    setStyle2("font-bold bg-light-blue");
    setStyle1("font-semibold bg-white");
    setStyle3("font-semibold bg-white");
    setStyle4("font-semibold bg-white");
    setStyle5("font-semibold bg-white");
    setStyle6("font-semibold bg-white");
  };
  const handle3 = () => {
    setCurrentContent(<Planning />);
    setStyle3("font-bold bg-light-blue");
    setStyle2("font-semibold bg-white");
    setStyle1("font-semibold bg-white");
    setStyle4("font-semibold bg-white");
    setStyle5("font-semibold bg-white");
    setStyle6("font-semibold bg-white");
  };
  const handle4 = () => {
    setCurrentContent(<Themes />);
    setStyle4("font-bold bg-light-blue");
    setStyle2("font-semibold bg-white");
    setStyle3("font-semibold bg-white");
    setStyle1("font-semibold bg-white");
    setStyle5("font-semibold bg-white");
    setStyle6("font-semibold bg-white");
  };
  const handle5 = () => {
    setCurrentContent(<Procedure />);
    setStyle5("font-bold bg-light-blue");
    setStyle2("font-semibold bg-white");
    setStyle3("font-semibold bg-white");
    setStyle4("font-semibold bg-white");
    setStyle1("font-semibold bg-white");
    setStyle6("font-semibold bg-white");
  };
  const handle6 = () => {
    setCurrentContent(<Reglementation />);
    setStyle6("font-bold bg-light-blue");
    setStyle2("font-semibold bg-white");
    setStyle3("font-semibold bg-white");
    setStyle4("font-semibold bg-white");
    setStyle5("font-semibold bg-white");
    setStyle1("font-semibold bg-white");
  };
  return (
    <div className="min-h-[900px]">
      <div className="relative">
        <div className="absolute bg-black/30 top-0 w-full z-10 h-full" />
        <img src={esi1} alt="ESI" className="w-full h-[500px] z-0" />
        <div className="absolute bottom-12 left-9 flex flex-col gap-0 text-white z-20">
          <p className="text-[25px] font-normal">Coopération et formation</p>
          <p className="text-[60px] font-bold">Formations</p>
          <div className="bg-dark-blue h-2 w-[150px]" />
        </div>
      </div>

      <div className={`${styles.padding}`}>
        <div className="w-[25%] float-left border-2 border-light-blue rounded-md">
          <button
            className={`text-[17px] px-6 text-left py-2 w-full border-b border-light-blue flex flex-row justify-between ${style1}`}
            onClick={() => handle1()}
          >
            <p>Présentation</p>
            <img className="rotate-180 w-[25px]" src={arrow} alt="arrow" />
          </button>
          <button
            className={`text-[17px] px-6 text-left py-2 w-full border-b border-light-blue flex flex-row justify-between ${style2}`}
            onClick={() => handle2()}
          >
            <p>Programmes de formation</p>
            <img className="rotate-180 w-[25px]" src={arrow} alt="arrow" />
          </button>
          <button
            className={`text-[17px] px-6 text-left py-2 w-full border-b border-light-blue flex flex-row justify-between ${style3}`}
            onClick={() => handle3()}
          >
            Planning de formation
            <img className="rotate-180 w-[25px]" src={arrow} alt="arrow" />
          </button>
          <button
            className={`text-[17px] px-6 text-left py-2 w-full border-b border-light-blue flex flex-row justify-between ${style4}`}
            onClick={() => handle4()}
          >
            Thèmes de formation
            <img className="rotate-180 w-[25px]" src={arrow} alt="arrow" />
          </button>
          <button
            className={`text-[17px] px-6 text-left py-2 w-full border-b border-light-blue flex flex-row justify-between ${style5}`}
            onClick={() => handle5()}
          >
            Procédure d'inscription
            <img className="rotate-180 w-[25px]" src={arrow} alt="arrow" />
          </button>
          <button
            className={`text-[17px] px-6 text-left py-2 w-full flex flex-row justify-between ${style6}`}
            onClick={() => handle6()}
          >
            Reglmentation
            <img className="rotate-180 w-[25px]" src={arrow} alt="arrow" />
          </button>
        </div>
        <div className="w-[74%] float-right pb-36">{currentContent}</div>
      </div>
    </div>
  );
};

export default Formation;
