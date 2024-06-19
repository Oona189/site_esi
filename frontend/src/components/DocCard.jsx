import React from "react";
import DownloadIcon from "./../assets/downloadIcon.svg";
import EyeIcon from "./../assets/EyeIcon.svg";

function DocCard({ title }) {
  return (
    <div className="flex flex-col bg-white rounded-[20px] outline outline-[rgb(8,53,92)] outline-1 outline-offset-[-1px] w-full">
      <div className="flex justify-between items-center gap-x-20 p-[10px]">
        <h2 className="font-medium text-[18px] lg:text-[24px] text-[rgb(15,15,15)]">
          {title}
        </h2>

        <div className="flex justify-between gap-x-5">
          <img
            className="w-2/5 h-2/5 cursor-pointer"
            src={EyeIcon}
            alt="alt text"
          />
          <img
            className="w-2/5 h-2/5 cursor-pointer"
            src={DownloadIcon}
            alt="alt text"
          />
        </div>
      </div>
    </div>
  );
}

export default DocCard;
