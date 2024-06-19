import React from "react";

function OrganigrammeElement({ nom, email, numPoste, tlp, post, style }) {
  return (
    <div
      style={style}
      className="flex flex-col items-center justify-center bg-white rounded-[10px] outline outline-[rgba(0,97,178,0.6)] outline-1 outline-offset-[-1px] shadow-[0px_6px_10px_0px_rgba(0,97,178,0.458)] w-fit h-fit p-5"
    >
      <div className=" flex flex-col items-center gap-y-[19px]">
        <h2 className="flex justify-center font-bold md:text-[20px] text-[15px]  text-center">
          {nom}
        </h2>

        <div className="flex flex-col items-center gap-y-2">
          <h5 className="flex justify-center font-light md:text-[15px] text-[10px] uppercase text-center">
            {post}
          </h5>

          <div className="flex flex-col gap-y-[5px]">
            <h5 className="font-light md:text-[15px] text-[9px]  text-center ">
              Email : {email}
            </h5>
            <h5 className="font-light md:text-[15px] text-[9px] text-center ">
              Telephone : {tlp}
            </h5>
            <h5 className="flex justify-center font-light md:text-[15px] text-[9px] text-center">
              Poste : {numPoste}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganigrammeElement;
