import React from 'react';
import LinkIcon from "../../assets/LinkIcon.svg";

const Statistics = ({ number, title, link }) => {
  return (
    <div className="text-center">
      <div className="text-2xl text-[#0F0F0F]">{number}</div>
      <hr className="mx-auto w-16 border-[#0061B2] mb-4" />
      <a
        href={link}
        className=" text-[#0F0F0F] hover:text-[#0061B2] flex items-center justify-center"
      >
        <img src={LinkIcon} alt="Description" className="w-5 h-5 mr-2" />
        {title}
      </a>
    </div>
  );
};

export default Statistics;