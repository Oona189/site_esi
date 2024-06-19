import React, { useState, useEffect, useRef } from 'react'; // Ajoutez useRef
import { motion } from 'framer-motion';
import NewsCard from './NewsCard';
import img1 from '../assets/accueil.png';
import graduation from '../assets/graduation.png';
import students from '../assets/students1.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

const getNews = () => {
  const news = [
    { id: 1, title: "Actualité 1 fhsfkshfqkhf", soustitre: 'dlfjhqkj fjqgshj kjhfgqskhgf', image: [img1, graduation, students], description: "Dans le cadre des activités du laboratoire LMCS, nous avons le grand plaisir de vous annoncer la visite du Pr Farid MEZIANE, responsable du thème académique Science des données, chef du centre de recherche en science des données, enseignant et chercheur en science de données à l’école d’informatique du collège des sciences et de l’ingénierie de Derby (Royaume-Uni), le mercredi 7 février 2024. Il animera, à partir de 10h à la salle VISIO, une conférence très intéressante et d’actualités dont l’intitulé est « Data Science as an economic development driver » (Data Science comme moteur de développement économique).", date: "14/05/2024", lieu: "ESI OUAD SMAR" },
    { id: 2, title: "Actualité 2 sfkhsk fkshk fksfj", image: [img1, graduation, students], description: "shgfs fslgfslf sjlfhshjfgz slfhsfliuz lsgfzu", date: "14/05/2024", lieu: "ESI OUAD SMAR" },
    { id: 3, title: "Actualité 3", image: [img1, graduation, students], description: "shgfs fslgfslf sjlfhshjfgz slfhsfliuz lsgfzu", date: "14/05/2024", lieu: "ESI OUAD SMAR" },
    { id: 4, title: "Actualité 4", image: [graduation, img1, students], description: "shgfs fslgfslf sjlfhshjfgz slfhsfliuz lsgfzu", date: "14/05/2024", lieu: "ESI OUAD SMAR" },
    { id: 5, title: "Actualité 5", image: [students, graduation, img1], description: "shgfs fslgfslf sjlfhshjfgz slfhsfliuz lsgfzu", date: "14/05/2024", lieu: "ESI OUAD SMAR" },
    { id: 6, title: "Actualité 6", image: [img1, graduation, students], description: "shgfs fslgfslf sjlfhshjfgz slfhsfliuz lsgfzu", date: "14/05/2024", lieu: "ESI OUAD SMAR" },
    { id: 7, title: "Actualité 7", image: [graduation, img1, students], description: "shgfs fslgfslf sjlfhshjfgz slfhsfliuz lsgfzu", date: "14/05/2024", lieu: "ESI OUAD SMAR" },
    { id: 8, title: "Actualité 8", image: [img1, graduation, students], description: "shgfs fslgfslf sjlfhshjfgz slfhsfliuz lsgfzu", date: "14/05/2024", lieu: "ESI OUAD SMAR" },

  ];
  return news;
};

const NewsSlider = () => {
  const navigate = useNavigate();
  const news = getNews();
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null); // Ajoutez useRef pour obtenir une référence au composant Slider

  const handleNewsClick = (newsItem) => {
    navigate(`/news/${newsItem.id}`, { state: { news: newsItem } });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext(); // Appel de la fonction slickNext pour passer à la prochaine diapositive
      }
    }, 2000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
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
    responsive: [
      {
        breakpoint: 1000, // Medium screens
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 800, // Small screens
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="relative w-full sm:pb-32 ">
      <Slider {...settings} ref={sliderRef}>
        {news.map((item, index) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 0.9 }}
            animate={{ scale: index === currentSlide ? 1 : 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => handleNewsClick(item)}
          >
            <NewsCard news={item} />
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};





const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} absolute z-10 top-1/2 transform -translate-y-1/2  cursor-pointer`}
      onClick={onClick}
    >
      {/* Previous Slide Arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} absolute z-10  top-1/2 transform  -translate-y-1/2  `}
      onClick={onClick}
    >
      {/* Next Slide Arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};


export default NewsSlider;