import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { arrow } from "../../assets";

export const ThemeBox = ({ theme, i }) => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    } else {
      setSelected(i);
    }
  };
  return (
    <div className="mt-9 w-[80%]">
      <div
        className={`flex px-6 text-[18px] font-bold py-2 transition-all duration-300 ${
          selected === i
            ? "bg-dark-blue text-white rounded-t-md"
            : "bg-light-blue rounded-md"
        }`}
      >
        <span
          className="mr-12 w-3 hover:cursor-pointer"
          onClick={() => toggle(i)}
        >
          {selected === i ? "-" : "+"}
        </span>
        {theme.theme}
        {selected === i && (
          <motion.button
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            className="ml-auto text-[15px] font-semibold text-black bg-white px-2 rounded-md"
          >
            Demander devis
          </motion.button>
        )}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: theme.sous_themes.length * 33 }}
            transition={{ duration: 0.5 }}
            className="bg-light-blue pl-6 overflow-hidden rounded-b-md"
          >
            {theme.sous_themes.map((sous_theme) => (
              <div className="flex flex-row gap-4 items-center">
                <img src={arrow} alt="shape" className="rotate-180 w-[25px] h-[20px]"/>
                <p className="py-1">
                  {sous_theme.title}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};