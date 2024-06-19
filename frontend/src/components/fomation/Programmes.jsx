import React, { useState } from "react";
import { programmes } from "../../constants/index.js";
import Popup from "./Popup.jsx";
import { motion } from "framer-motion";

export const Programmes = () => {
  const [selectedProg, setSelectedProg] = useState();
  const [toggle, setToggle] = useState(false);

  const handleProg = (prog) => {
    setSelectedProg(prog);
    setToggle(true);
  };
  return (
    <div className="relative px-4 pb-20">
      <p className="text-[20px] font-bold text-dark-blue">
        Programmes de formation
      </p>
      <Popup prog={selectedProg} toggle={toggle} setToggle={setToggle} />
      <div className={`mt-4 flex flex-wrap gap-7 ${toggle ? "blur-sm" : ""}`}>
        {programmes.map((programme) => (
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="h-[100px] w-[300px] flex items-center justify-center font-semibold hover:cursor-pointer rounded-md text-center px-4 bg-light-blue"
            onClick={() => handleProg(programme)}
          >
            {programme.titre}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
