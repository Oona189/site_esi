import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Popup = ({ toggle, setToggle, prog }) => {
  let ref = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!ref.current?.contains(e.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7 } },
  };

  return (
    <AnimatePresence>
      {toggle && (
        <motion.div
          className="absolute w-full top-24 flex items-center justify-center z-10"
          variants={backdrop}
          animate="visible"
          initial="hidden"
        >
          <div
            ref={ref}
            className="w-[450px] pb-6 rounded-md py-3 px-6 border-2 border-black/10 bg-white"
          >
            <p className="text-dark-blue/40 w-[400px] mb-4">{prog.titre}</p>
            {prog.details.map((item) => (
              <div className="flex flex-row justify-between border-b border-black/20 py-2 px-2">
                <p className="w-[83%]">{item.name}</p>
                <p>{item.volume}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;