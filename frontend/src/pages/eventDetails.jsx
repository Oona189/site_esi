import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import NewsSlider from '../components/NewsSlider';

const EventDetails = () => {
  const location = useLocation();
  const news = location.state.news;
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const navigate = useNavigate();

  const handleRetourClick = () => {
    navigate('/'); 
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    //centerPadding: '0px',
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    customPaging: (i) => (
      <div className="custom-dot absolute bottom-0 left-1/2 transform -translate-x-1/2 ">
        <div
          className={`w-3 h-3 rounded-full mx-1  ${
            i === currentSlide % 5 ? 'bg-blue' : 'bg-gray-400'
          }`}
        ></div>
      </div>
    ),
    beforeChange: (current, next) => setCurrentSlide(next),
    appendDots: (dots) => (
      <div>
        <div className="flex justify-center ">{dots.slice(0, 5)}</div>
      </div>
    ),
  };

  

  return (
    <div className="bg-gray-100 w-full h-full lg:py-16 lg:px-48 md:px-32 sm:px-16 md:py-8 sm:py-8 ">
      
        <div className="px-6 py-4  flex flex-col">
          <div
            className="text-blue font-semibold py-8 text-xl underline cursor-pointer"
            onClick={handleRetourClick}
          >
            Retour
          </div>
          <div className="lg:text-5xl md:text-3xl sm:text-2xl text-darkblue font-bold mb-4 text-left">{news.title}</div>
          <div className="lg:text-4xl md:text-2xl sm:text-xl text-darkblue  font-semibold mb-2 text-left">
            {news.soustitre}
          </div>
        </div>
        <div className="px-6 py-4  flex justify-between items-center">
          <div className="flex flex-row gap-8 ">
              <div className="flex ">
                <svg
                  className="w-6 h-6 text-blue font-bold mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-blue font-bold lg:text-xl md:text-lg sm:text-lg">{news.date} </span>
              </div>

            
          
           <div className="flex  ">
            <svg
              className="w-6 h-6 text-blue font-bold mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-blue font-bold lg:text-xl md:text-lg sm:text-lg">{news.lieu}</span>
            </div>
          </div>
        </div>
        <div className="px-6 py-4">
          <p className="text-darkblue  font-semibold lg:text-xl md:text-lg sm:text-lg  mb-4">{news.description}</p>
         
        </div>
         <div className='flex flex-col lg:gap-28 md:gap-20 sm:gap-16'>
              <Slider {...settings}>
                {news.image.map((img, index) => (
                  <div key={index}>
                    <img className="w-full px-2 lg:h-128 md:h-80 object-cover" src={img} alt={news.title} />
                  </div>
                ))}
              </Slider>
              <div className='flex flex-col items-center  space-y-4'>
            
                <div className="mt-8 text-3xl  mb-3 w-fit text-blue pb-2  font-bold relative before:content-['']  before:h-4 before:bg-blue before:w-full before:absolute before:bottom-2 before:left-0 before:-z-10">
                  Actualités
                </div>
                <div className="w-full max-w-220">
                    <NewsSlider  />
                  </div>
                </div>
        </div>
            
        
      </div>
   
  );
};
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute  transform -translate-x-full z-10`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-black cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute  transform translate-x-full z-10`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-black cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );}

export default EventDetails;