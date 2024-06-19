import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ImHourGlass } from "react-icons/im";
import { MdLocationPin } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa6";





function Icon({ id, open }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "text-blue rotate-90" : ""} h-5 w-5 transition-transform mr-5`}>
      <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>


  );
}

export function AccordionVariant2(question, children) {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}
          className={`transition-colors text-darkblue ${open === 1 ? "text-blue" : ""}`}>
          <div className="flex flex-row ml-10">
            <Icon id={1} open={open} />
            What is Material Tailwind?
          </div>
        </AccordionHeader>
        <AccordionBody className={`text-black text-[20px] ${open === 1 ? "bg-[#E8EEFF] border-blue" : ""}`}>
          <div className="mx-9">
            <div className="flex flex-row">
              <div className="flex flex-row items-center mr-9">
                <ImHourGlass className="mr-2" />
                <p>2024-2027(4 ans)</p>
              </div>
              <div className="flex flex-row items-center">
                <MdLocationPin className="mr-2" />
                <p>Nationale</p>
              </div>
            </div>
            <div className="mt-5">
              <p>Cette offre de partenariat avec des entreprises du secteur informatique vise à proposer des programmes de formation sur mesure et des certifications professionnelles de haut niveau</p>
              <p>Le partenariat comprend notamment : <br />
                L'analyse des besoins en compétences des entreprises partenaires<br />
                La conception de cursus de formation adaptés <br />
                Le déploiement de formations en alternance théorie/pratique avec des intervenants qualifiés<br />
              </p>
            </div>
            <div className="flex flex-row mt-5">
              <a href='' className="self-center border-[2px] border-blue text-blue font-medium py-2 px-5 rounded-[30px] focus:outline-none focus:ring-2  hover:bg-blue hover:scale-105 hover:text-white transition duration-300 ease-in-out mr-9">Demander Partenariat</a>
              <a href='' className="self-center border-[2px] border-blue text-blue font-medium py-2 px-5 rounded-[30px] focus:outline-none focus:ring-2  hover:bg-blue hover:scale-105 hover:text-white transition duration-300 ease-in-out mr-9 flex flex-row">
                <FaRegFilePdf className="mr-2" />
                Consulter l’offre
              </a>

            </div>
          </div>
        </AccordionBody>
      </Accordion>


    </>
  );
}


export default AccordionVariant2