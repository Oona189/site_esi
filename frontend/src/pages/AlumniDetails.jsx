import React from "react";
import pic from "../assets/testimonials/p1.png";
import { useLocation, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Card from "../components/Card";
import NavbarComponent from "../components/Navbar";
import quotes from "../assets/quotes.png";
import quotes2 from "../assets/quotes2.png";

const AlumniDetails = () => {
  /*const location = useLocation();
  const news = location.state.news;*/
  const navigate = useNavigate();

  const handleRetourClick = () => {
    navigate("/alumni");
  };

  return (
    <div className="">
      <div
        className="text-blue font-semibold lg:py-16 lg:pl-80 sm:pl-32 sm:mt-16 sm:mb-8 text-xl underline cursor-pointer"
        onClick={handleRetourClick}
      >
        Retour
      </div>
      <div className="items-center justify-center  flex lg:flex-row  sm:flex-col sm:gap-0 bg-white rounded-lg  ">
        <div className="w-96 h-160 relative flex-shrink-0 shadow-lg ">
          <img
            src={pic}
            alt="Profile Picture"
            className="w-full h-full object-cover rounded-l-lg shadow-lg"
          />
          <blockquote className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800 bg-opacity-75 text-white rounded-bl-lg">
            <img className="w-8 h-6 mb-2" src={quotes}></img>

            <p className="text-lg italic text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>

            <img className="w-8 h-6 mt-2 mr-0 ml-80" src={quotes2}></img>
          </blockquote>
        </div>

        <div className="flex flex-col sm:w-[30rem] sm:h-160 sm:mt-0 gap-4 lg:w-160 lg:h-[32rem] lg:mt-32 shadow-lg bg-[#F9F9F9]">
          <div>
            <h2 className="lg:ml-6 lg:mt-8 mb-2 text-4xl font-bold text-darkgrey sm:text-center sm:ml-0 sm:mt-8">
              Nour Krim
            </h2>
            <p className="ml-6 text-blue font-semibold text-2xl sm:text-center sm:ml-0">
              Data Analysté chez Huawei Algérie
            </p>
            <div className="ml-6 mt-4 text-darkgrey leading-relaxed text-xl sm:text-center sm:ml-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl,
                eget aliquam nisl nisl eget nisl. Maecenas malesuada nisl eget
                quam volutpat, eu cursus tellus venenatis.
              </p>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl,
                eget aliquam nisl nisl eget nisl. Maecenas malesuada nisl eget
                quam volutpat, eu cursus tellus venenatis.
              </p>
            </div>
            <p className="mt-4 ml-6 text-blue font-semibold text-2xl sm:text-center sm:ml-0">
              Contacts
            </p>
          </div>
          <div className="mt-1 flex ml-6 space-x-8 sm:justify-center sm:ml-0">
            <a href="#" className="text-darkgrey hover:text-blue">
              <i className="fab fa-facebook fa-2xl"></i>
            </a>
            <a href="#" className="text-darkgrey hover:text-blue">
              <i className="fab fa-twitter fa-2xl"></i>
            </a>
            <a href="#" className="text-darkgrey hover:text-blue">
              <i className="fab fa-linkedin fa-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="text-3xl mt-20 mb-10 text-center font-semibold text-blue">
        Autres Alumnis
      </div>

      <div className="flex flex-wrap justify-center">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default AlumniDetails;
