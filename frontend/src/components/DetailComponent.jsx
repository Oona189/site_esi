import React, { useState } from "react";
import PlusIcon from "./../assets/plus_Icon.svg";
import MoinsIcon from "./../assets/moins_Icon.svg";
import RightArrow from "./../assets/right_arrow.png";

function DetailComponent({ title, detail }) {
  const [stat, setStat] = useState(false);

  return (
    <>
      {!stat && (
        <div className="flex justify-between items-center gap-x-20 p-2 rounded-[20px] outline outline-[rgb(8,53,92)] outline-1 outline-offset-[-1px] w-full bg-white">
          <h1 className="element font-medium lg:text-2xl text-[18px]">
            {title}
          </h1>
          <img
            className="md:w-[53px] w-[40px] md:h-[53px] h-[40px] cursor-pointer"
            src={PlusIcon}
            alt="alt text"
            onClick={() => setStat(!stat)}
          />
        </div>
      )}
      {stat && (
        <div className="bg-[rgb(210,234,255)] rounded-[20px] outline outline-[rgb(8,53,92)] outline-1 outline-offset-[-1px] p-2 flex flex-col gap-y-5 w-full">
          <div className="flex justify-between items-center gap-x-20">
            <h1 className="element font-bold lg:text-2xl text-[18px]">
              {title}
            </h1>
            <img
              className="md:w-[53px] w-[40px] md:h-[53px] h-[40px] cursor-pointer"
              src={MoinsIcon}
              alt="alt text"
              onClick={() => setStat(!stat)}
            />
          </div>
          {detail.map((element, index) => (
            <div key={index} className="flex gap-x-[17px] items-center ">
              {element.stat && (
                <img
                  className="md:w-[46px] w-[33px] md:h-[46px] h-[33px] "
                  src={RightArrow}
                  alt="alt text"
                />
              )}
              <h1 className="element font-medium lg:text-2xl text-[18px]">
                {element.text}
              </h1>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default DetailComponent

