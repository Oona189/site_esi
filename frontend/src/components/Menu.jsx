import React, { useState } from "react";
import arrow from "./../assets/arrow.png";

const Menu = ({ menuItems }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className={"m-10"}>
      <div className="flex md:flex-row flex-col gap-5">
        <div className="md:w-[25%] w-full h-fit float-left border-2 border-light-blue rounded-md ">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`text-[17px] px-6 text-left py-2 w-full border-b border-light-blue flex flex-row justify-between ${
                selectedItem === item
                  ? "font-bold bg-[#E8EEFF]"
                  : "font-semibold "
              }`}
              onClick={() => handleItemClick(item)}
            >
              <p>{item.nom}</p>
              <img className="rotate-180 w-[25px]" src={arrow} alt="arrow" />
            </button>
          ))}
        </div>
        <div className="md:w-[75%] w-full float-right">
          {selectedItem && selectedItem.section}
        </div>
      </div>
    </div>
  );
};

export default Menu;
