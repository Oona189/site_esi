import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ProcedureBox = ({ procedure, i }) => {
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
            ? "bg-dark-blue rounded-t-md text-white"
            : "bg-light-blue rounded-md"
        }`}
      >
        <span
          className="mr-12 w-3 hover:cursor-pointer"
          onClick={() => toggle(i)}
        >
          {selected === i ? "-" : "+"}
        </span>
        {procedure.title}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: procedure.content.length*3* 33 }}
            transition={{ duration: 0.5 }}
            className="bg-light-blue pl-6 overflow-hidden rounded-b-md"
          >
            {procedure.content.map((item) => (
              <div className="py-2">
                <p>{item.idea}</p>
                {item.sous_ideas?.map((i) => (
                  <p className="px-3 leading-7">
                    <span className="mr-3">-</span>
                    {i.text}
                  </p>
                ))}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};