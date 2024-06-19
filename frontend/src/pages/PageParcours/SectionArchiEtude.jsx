import React from "react";
import ArchiImg from "./../../assets/archi_etude.png";
function SectionArchiEtude() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="Title flex flex-col justify-center items-center mb-5">
        <h1 className="lg:text-4xl text-center md:text-3xl text-2xl font-extrabold">
          Architecture des études
        </h1>
        <div className="bg-[rgb(0,97,178)] lg:w-[400px] md:w-[340px] w-[270px] h-[5px] my-0" />
      </div>
      <img
        className="h-1/2 w-1/2 object-fill "
        src={ArchiImg}
        alt={"architecture-img"}
      />
    </div>
  );
}

export default SectionArchiEtude;
