import React, { useState } from 'react';
import p1 from '../assets/testimonials/p1.png';
import p2 from '../assets/testimonials/p2.png';
import Rachid_Chalal from '../assets/testimonials/Rachid_Chalal.png'
import p3m from '../assets/testimonials/p3m.jpg'
import p4w from '../assets/testimonials/p4w.jpg'
import p5m from '../assets/testimonials/p5m.jpg'



// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Professeur Rachid Chalal',
    role: "Enseigant-Chercheur à l'ESI",
    image: Rachid_Chalal,
    quote: "Pour apprendre un domaine quel qu'il soit, ayez peur des concepts qui lui sont associés",
  },
  {
    id: 2,
    name: 'Ahmed Benali',
    role: 'Étudiant en génie logiciel',
    image: p1,
    quote: "L'ESI m'a donné les compétences et les connaissances nécessaires pour réussir dans l'industrie de la technologie. Je suis reconnaissant pour cette expérience unique.",
  },
  {
    id: 3,
    name: 'Sara Boumediene',
    role: 'Ancienne élève, Ingénieur en informatique',
    image: p2,
    quote: "Mon passage à l'ESI a été une période transformative dans ma carrière. Les enseignants dévoués et les ressources de pointe ont ouvert la voie à d'innombrables opportunités professionnelles.",
  },
  {
    id: 4,
    name: 'Kamel Djebbari',
    role: 'Étudiant en génie logiciel',
    image: p3m,
    quote: "Étudier à l'ESI a été une expérience enrichissante. J'ai appris non seulement des compétences techniques avancées, mais aussi des valeurs humaines et professionnelles qui ont façonné ma perspective sur le monde de l'informatique.",
  },
  {
    id: 5,
    name: 'Amina Zeroual',
    role: 'Ancienne élève, Développeuse Web',
    image: p4w,
    quote: "L'ESI m'a fourni un environnement d'apprentissage dynamique où j'ai pu explorer ma passion pour le développement web. Les projets pratiques et les stages m'ont préparé pour une carrière réussie dans le domaine.",
  },
  {
    id: 6,
    name: 'Ali Boudjellal',
    role: 'Étudiant en intelligence artificielle',
    image: p5m,
    quote: "Je suis impressionné par l'engagement de l'ESI à rester à la pointe de la technologie. Les cours d'intelligence artificielle sont passionnants et les opportunités de recherche sont infinies. Je suis fier d'être un étudiant de l'ESI.",
  },
];

const Testimonials = () => {
 
  const [selectedTestimonial, setSelectedTestimonial] = useState(testimonials[0]);

 
  const handleTestimonialClick = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };


  const leftTestimonials = testimonials.slice(0, testimonials.length / 2);
  const rightTestimonials = testimonials.slice(testimonials.length / 2);

  return (
    <section className="py-16 bg-darkblue text-white h-fit flex flex-col gap-8 items-center">
           <div className="ml-8 mt-4 lg:text-4xl w-fit text-white font-bold sm:text-2xl md:text-2xl ">
            Voix de la Communauté
            </div>
          <div className="mt-8 space-x-16 container px-5 mx-auto flex flex-row justify-center items-center">
            {/* Left Testimonials */}
            <div className=" flex flex-col items-center gap-12">
              {leftTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`lg:w-32 lg:h-32 md:w-16 md:h-16 sm:w-16 sm:h-16 rounded-full overflow-hidden mb-4 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${selectedTestimonial.id === testimonial.id ? 'border-4 border-blue' : ''}`}
                  onClick={() => handleTestimonialClick(testimonial)}
                >
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            {/* Testimonial quote card */}
            <div className="w-full text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed lg:text-3xl md:text-2xl sm:text-2xl">{selectedTestimonial.quote}</p>
              <span className="inline-block h-1 w-10 rounded bg-blue mt-8 mb-6"></span>
              <h2 className="lg:text-2xl md:text-xl sm:text-xl font-medium">{selectedTestimonial.name}</h2>
              <p className="text-gray-500 lg:text-xl md:text-lg sm:text-lg">{selectedTestimonial.role}</p>
            </div>
            {/* Right Testimonials */}
            <div className=" flex flex-col items-center gap-12">
              {rightTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`lg:w-32 lg:h-32 md:w-16 md:h-16 sm:w-16 sm:h-16  rounded-full overflow-hidden mb-4 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 ${selectedTestimonial.id === testimonial.id ? 'border-4 border-blue' : ''}`}
                  onClick={() => handleTestimonialClick(testimonial)}
                >
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

  );
};

export default Testimonials;
