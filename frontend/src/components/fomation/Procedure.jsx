import React from "react";
import { procedures } from "../../constants";
import { ProcedureBox } from "./ProcedureBox";
export const Procedure = () => {
  return (
    <div className="px-4">
      <p className="text-[20px] font-bold text-dark-blue">
        Procédure d'inscription
      </p>
      {procedures.map((procedure, index) => (
        <ProcedureBox procedure={procedure} index={index} i={index + 1} />
      ))}
    </div>
  );
};