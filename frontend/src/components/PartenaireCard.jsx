import React from "react";
import WebLink from "./../assets/WebLink.svg";
import Twitter from "./../assets/Twitter.svg";
import LinkedIn from "./../assets/LinkedIn.svg";

function PartenaireCard({ image, nom, description,web, linkdin,twitter }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-[10px] outline outline-[rgba(0,97,178,0.6)] outline-1 outline-offset-[-1px] shadow-[0px_6px_5px_0px_rgba(0,97,178,0.458)] w-fit h-fit p-5 ">
      <div className=" flex flex-col items-center gap-y-[19px]">
        <img src={image} className="md:w-[130px] md:h-[130px] w-[80px] h-[80px] object-cover rounded-full" />
        <h2 className="flex justify-center font-bold md:text-[20px] text-[15px]  text-center">
          {nom}
        </h2>
        <h5 className="flex justify-center font-light md:text-[15px] text-[10px] uppercase text-center">
          {description}
        </h5>
        <div className="flex gap-x-2 md:gap-x-5 justify-between items-center ">
          <img src={WebLink} className="w-[40px] h-[4Opx] object-conver"  />
          <img src={Twitter} className="w-[40px] h-[4Opx] object-conver" />
          <img src={LinkedIn} className="w-[40px] h-[4Opx] object-conver" />
        </div>
      </div>
    </div>
  );
}

export default PartenaireCard;
