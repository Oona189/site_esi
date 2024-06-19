import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className="w-full py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="flex items-center justify-center lg:col-span-3 relative">
          <div className="text-black flex-column">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold relative mb-4">
              Nos Alumnis
              <div className="w-full bg-blue-800 h-[6px] absolute left-0 mt-1"></div>
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center lg:col-span-3 my-4 relative">
          <div className="flex w-[70%] mx-auto relative">
            <input
              className="p-3 pr-12 flex w-full rounded-full bg-opacity-6"
              type="text"
              placeholder="Trouver un alumni"
              style={{
                backgroundColor: "rgba(102, 102, 102, 0.06)",
                color: "#666666",
              }}
            />
            <div className="absolute right-0 top-0 mt-3 mr-3">
              <AiOutlineSearch size={24} className="text-gray-600" />
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:col-span-3">
          <p className="text-sm text-black">
            Vous êtes alumni et vous voulez partager votre expérience?{" "}
            <span
              className="text-blue-500 cursor-pointer font-bold"
              onClick={() => {
                console.log("Cliquez ici");
              }}
            >
              Cliquez ici
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
