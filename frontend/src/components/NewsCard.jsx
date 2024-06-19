import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { useNavigate } from 'react-router-dom';

const NewsCard = ({ news }) => {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/news/${news.id}`, { state: { news } });
  };
  

  return (
    <div className="mx-auto md:mx-4 w-96 h-80 md:w-96 sm:w-96 relative rounded-3xl overflow-hidden shadow-lg bg-gray-900 my-10 " > 
      <img src={news.image[0]} alt={news.title} className="w-full h-80 object-cover rounded-3xl" />
      <div className="absolute inset-0 bg-black opacity-50"></div> 
      <div className="absolute bottom-0 left-0 w-full bg-opacity-75 p-4 flex justify-between items-center">
        <h2 className="text-white font-bold text-3xl">{news.title}</h2>
        <button onClick={handleClick} className="border border-white  bg-darkgrey opacity-80 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full">
          Détails
          
        </button>
      </div>
    </div>
  );
};

export default NewsCard;