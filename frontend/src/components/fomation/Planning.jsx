import React, { useContext, useEffect, useState } from "react";
import { forms } from "../../constants/index.js";
import { person, form, date } from "../../assets/index.js";
import { motion } from "framer-motion";
//import { FormationContext } from "../../context/formationContext.js";

export const Planning = () => {
  // const { formations, setSelectedFormation, setFormations } =
  //   useContext(FormationContext);
  const [formations, setFormations] = useState(forms);

  // useEffect(() => {
  //   console.log(formations);
  // }, []);
  function handleFiltre(search) {
    const newFormations = forms.filter(
      (row) =>
        row.titre.toLowerCase().includes(search.toLowerCase()) ||
        row.formateur.toLowerCase().includes(search.toLowerCase())
    );
    setFormations(newFormations);
  }

  return (
    <div className="px-4 pb-20">
      <p className="text-[20px] font-bold text-dark-blue">
        Planning des formations
      </p>
      <div className="flex justify-center my-6">
        <div className="flex justify-center mb-12">
          <motion.label
            animate={{
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
            }}
            className="flex flex-col text-[15px] w-[340px] mt-9 rounded-[20px]"
          >
            <input
              type="text"
              onChange={(e) => handleFiltre(e.target.value)}
              placeholder="Filtrer les résultats"
              className="textbox rounded-[20px] py-3 px-6 font-medium"
            />
          </motion.label>
        </div>
      </div>

      <div className="flex flex-col w-[95%] mt-4 max-h-[600px] overflow-scroll">
        {formations?.map((formation) => (
          <motion.div
            initial={{ backgroundColor: "transparent" }}
            whileHover={{ backgroundColor: "#E8EEFF" }}
            transition={{ duration: 2 }}
            className="flex flex-row py-2 border-b border-dark-blue/30 px-2 hover:cursor-pointer"
          >
            <div className="flex flex-row gap-2 w-[400px]">
              <img src={form} alt="formation" className="w-[25px] h-[25px]" />
              <p>{formation.titre}</p>
            </div>
            <div className="flex flex-row gap-2 ml-9">
              <img src={person} alt="formation" className="w-[25px] h-[25px]" />
              <p>{formation.formateur}</p>
            </div>
            <div className="flex flex-row gap-2 ml-auto">
              <img src={date} alt="formation" className="w-[25px] h-[25px]" />
              <p>{formation.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
