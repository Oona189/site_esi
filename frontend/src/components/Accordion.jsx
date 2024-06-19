import React from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

const AccordionComp = () => {
    const [open, setOpen] = React.useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className={`mb-2 rounded-xl border border-darkblue px-10 bg-white ${open === 1 ? "bg-[#D2EAFF] border-blue" : ""
                }`}>
                <AccordionHeader
                    onClick={() => handleOpen(1)}
                    className={`border-b-0 transition-colors text-darkblue ${open === 1 ? "text-blue hover:!text-blue-700" : ""
                        }`}
                >
                    Comment puis-je contacter les laboratoires de recherche qui m'intéressent ?
                </AccordionHeader>
                <AccordionBody className="pt-0 text-base font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, n
                    isl eget ultricies aliquam, nisl nisl aliquet nisl,
                </AccordionBody>
            </Accordion>
        </div>
    )
}

export default AccordionComp