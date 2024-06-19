import React from "react";
import { domaines } from "../../constants/index.js";
import { ThemeBox } from "./ThemeBox.jsx";

export const Themes = () => {
  return (
    <div className="pb-20">
      <p className="text-[25px] font-bold text-dark-blue">
        Thèmes de formation
      </p>
      {domaines.map((domaine) => (
        <div>
          <p className="font-bold text-[18px] mt-9 ml-6">{domaine.label}</p>
          {domaine.themes.map((item, index) => (
            <ThemeBox theme={item} index={index} i={index + 1} />
          ))}
        </div>
      ))}
    </div>
  );
};
