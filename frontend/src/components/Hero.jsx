import React from 'react'


const Hero = (props) => {
    return (
        <div>
            <div className="relative h-[80vh] flex items-center justify-center w-full">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}></div>
                <div className="absolute inset-0 bg-black opacity-35"></div>
                <div className='flex-column z-10 absolute bottom-20 left-10'>
                    <div className=" text-white flex-column ">
                        <p className='py-[15px] text-[20px] font-light'>{props.section}</p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">{props.title}</h1>
                    </div>
                    <div className="w-[30%] bg-blue h-[6px] mt-4"></div>
                </div>
            </div>
        </div>
    )
}

export default Hero