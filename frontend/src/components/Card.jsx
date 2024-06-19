import React from "react";

const Card = () => {
  return (
    <a
      href="#"
      className="block w-72 max-w-xs bg-white border border-gray-200 rounded-xl shadow-md dark:bg-gray-800 dark:border-gray-700 hover:border-blue-500 transition duration-300 m-10"
    >
      <div className="flex justify-center">
        <img
          className="rounded-full w-36 h-36 object-cover"
          src="https://static.wixstatic.com/media/e0c3a7_028403f123714317bd7576bf956184a1~mv2_d_3744_5616_s_4_2.jpg/v1/fill/w_560,h_770,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e0c3a7_028403f123714317bd7576bf956184a1~mv2_d_3744_5616_s_4_2.jpg"
          alt=""
        />
      </div>
      <div className="p-5 text-center">
        <a href="#">
          <h5 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
            Nom & Prénom
          </h5>
        </a>
        <p className="mb-1 text-sm font-medium text-blue-500">
          Poste de travail
        </p>
        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.{" "}
        </p>
      </div>
    </a>
  );
};

export default Card;
