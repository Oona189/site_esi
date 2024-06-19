import React from 'react'
import backgroundImage from "./../assets/recherche/recherche section1.png";
import laboImage from "./../assets/recherche/labo1.png"
import bilanImage from "./../assets/recherche/bilanLabo.png"
import Image from "./../assets/recherche.png"
import domaineLabo from "./../assets/recherche/domaineLabo.png"
import Hero from '../components/Hero';
import NewsSlider from '../components/NewsSlider';
import NavbarComponent from '../components/Navbar';
import AccordionComp from '../components/Accordion';



import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";




const Recherche = () => {
    return (
        <div>
            <Hero section={"À propos"} title={"Recherche et Développement"} backgroundImage={Image} />

            {/* description section */}
            <div className='m-auto py-10 max-w-[1500px] px-10'>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue">Recherche</h1>
                <div className="w-full bg-[#444444] h-[0.3px] mt-4 opacity-[60%]"></div>
                <div className='flex flex-col  items-start justify-center mt-8 lg:mt-[3rem] lg:flex-row '>
                    <div className='lg:max-w-[60%] lg:mr-[1rem]'>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl. Maecenas malesuada nisl eget quam volutpat, eu cursus tellus venenatis. Ut non du
                            i volutpat, consectetur ex ac, venenatis arcu. Donec euismod nunc id enim faucibus, eget suscipit nul
                            la gravida. Quisque vel ex nec libero malesuada Donec euis
                            mod nunc id enim faucibus, eget suscipit nulla gravida.
                            Quisque vel ex nec libero malesuada.</h4>
                    </div>
                    <div className='relative w-[380px] h-[232px] m-auto mt-4 lg:mt-0'>
                        <img src={backgroundImage} alt="ESI graduate students" className="shrink-0 absolute z-10 rounded-lg w-[330px] h-[200px]" />
                        <div className="absolute z-0 top-[2rem] left-[3rem] w-[330px] h-[200px] border-[10px] border-blue bg-white rounded-lg"></div>
                    </div>
                </div>
            </div>

            {/*laboratoire sections*/}
            <div className='m-auto py-10 max-w-[1500px] px-10 bg-lightblue'>
                <div className='flex justify-center'>
                    <div className='inline-block relative mb-[40px]'>
                        <h1 className='text-3xl md:text-4xl font-bold z-10 relative'>Laboratoires de Recherches</h1>
                        <div className="w-[100%] bg-blue h-[8px] absolute bottom-2 z-0"></div>
                    </div>
                </div>
                <div className='flex flex-col flex-wrap items-center gap-10 lg:justify-around lg:flex-row'>
                    <Card className="max-w-[25rem] lg:max-w-[27rem] overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
                        <CardHeader
                            floated={false}
                            shadow={true}
                            color="transparent"
                            className="m-0 rounded-none"
                        >
                            <img
                                src={laboImage}
                                alt="ui/ux review check"
                            />
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h5" color="black">
                                LMCS - Laboratoire de Méthodes de Conception des Systèmes
                            </Typography>
                            <Typography variant="lead" color="gray" className="mt-3 text-[18px] font-light">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,
                                nisl eget ultricies aliquam, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl.
                                Maecenas malesuada nisl eget quam volutpat, eu cursus........
                            </Typography>
                        </CardBody>
                    </Card>
                    <Card className="max-w-[25rem] lg:max-w-[27rem] overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
                        <CardHeader
                            floated={false}
                            shadow={true}
                            color="transparent"
                            className="m-0 rounded-none"
                        >
                            <img
                                src={laboImage}
                                alt="ui/ux review check"
                            />
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h5" color="black">
                                LMCS - Laboratoire de Méthodes de Conception des Systèmes
                            </Typography>
                            <Typography variant="lead" color="gray" className="mt-3 text-[18px] font-light">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,
                                nisl eget ultricies aliquam, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl.
                                Maecenas malesuada nisl eget quam volutpat, eu cursus........
                            </Typography>
                        </CardBody>
                    </Card>
                </div>
            </div>

            {/*actualité*/}
            <div className='m-auto py-10 max-w-[1500px] px-10'>
                <div className='flex justify-center'>
                    <h1 className='text-3xl md:text-4xl font-bold z-10 relative text-blue'>Actualités de la Recherche</h1>
                </div>

                <div className="w-full m-auto">
                    <NewsSlider />
                </div>
            </div>

            {/*bilan scentifique*/}
            <div className='m-auto max-w-[1500px] flex flex-col lg:flex-row bg-lightblue'>
                <img src={bilanImage} alt="bilan laboratoires ESI" className="self-center mb-4 md:max-w-[70%] lg:max-w-[40%] lg:mb-0" />
                <div className='flex flex-col justify-center mx-10'>
                    <div className='flex justify-center'>
                        <div className='inline-block relative mb-[10px]'>
                            <h1 className='text-2xl font-bold z-10 relative'>Récapitulatif de l'Année de Recherche à l'ESI</h1>
                            <div className="w-[100%] bg-blue h-[8px] absolute bottom-2 z-0"></div>
                        </div>
                    </div>
                    <p className='text-[20px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, n
                        isl eget ultricies aliquam, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl. M
                        aecenas malesuada nisl eget quam volutpat, eu cursus.
                    </p>
                    <a href='' className="self-center border-[2px] border-darkblue text-darkblue font-medium py-2 px-5 rounded-[12px] mt-7 focus:outline-none focus:ring-2  hover:bg-darkgrey hover:scale-105 hover:text-white transition duration-300 ease-in-out">Récapitulatif de l'Année de Recherche 2023</a>
                </div>
            </div>

            {/*domaine de recherche*/}
            <div className='m-auto py-10 max-w-[1500px] px-10 flex justify-center items-center flex-col'>
                <div className='flex justify-center items-center flex-col'>
                    <h1 className='text-3xl mb-8 md:text-4xl font-bold z-10 relative text-blue'>Domaine Clé de Recherche</h1>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-10'>
                        <Card className="mt-6 w-[90%] hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
                            <CardHeader color="blue-gray" className="relative h-56">
                                <img
                                    src={domaineLabo}
                                    alt="image domaine de recherche"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography color="blue-gray" className="text-[20px] font-medium text-center" >
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam euismod, ni
                                </Typography>
                            </CardBody>
                        </Card>
                        <Card className="mt-6 w-[90%] hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
                            <CardHeader color="blue-gray" className="relative h-56">
                                <img
                                    src={domaineLabo}
                                    alt="image domaine de recherche"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography color="blue-gray" className="text-[20px] font-medium text-center" >
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam euismod, ni
                                </Typography>
                            </CardBody>
                        </Card>
                        <Card className="mt-6 w-[90%] hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out">
                            <CardHeader color="blue-gray" className="relative h-56">
                                <img
                                    src={domaineLabo}
                                    alt="image domaine de recherche"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography color="blue-gray" className="text-[20px] font-medium text-center" >
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam euismod, ni
                                </Typography>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <a href='' className="text-white self-center bg-blue font-medium py-3 px-8 rounded-[30px] focus:outline-none focus:ring-2  hover:bg-darkgrey hover:scale-105 transition duration-300 ease-in-out">Explorez tous les domaines</a>
            </div>

            {/*FAQ*/}
            <div className='m-auto py-10 max-w-[1500px] px-10 bg-lightblue'>
                <div className='flex justify-center'>
                    <div className='inline-block relative mb-[40px]'>
                        <h1 className='text-3xl md:text-4xl font-bold z-10 relative'>FAQ</h1>
                        <div className="w-[100%] bg-blue h-[8px] absolute bottom-2 z-0"></div>
                    </div>
                </div>

                <div>
                    <AccordionComp />
                </div>
            </div>
        </div>
    )
}

export default Recherche