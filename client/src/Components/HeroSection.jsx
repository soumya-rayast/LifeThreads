import React from 'react';
import hero from "../assets/hero.jpg";

const HeroSection = () => {
    return (
        <div className='relative w-full h-[50vh] md:h-[40vh] flex items-center justify-center rounded-3xl mt-7 '>
            {/* Hero Image */}
            <img 
                src={hero} 
                alt="Hero background" 
                className='w-full h-full object-cover rounded-2xl'
            />

            {/* Overlay for darkening the image */}
            <div className='absolute inset-0 bg-black/40 rounded-2xl'></div>

            {/* Hero Text Content */}
            <div className='text-black w-[400px] h-[200px] hidden border border-gray-100 absolute inset-0 md:flex flex-col items-center justify-center text-center  px-4 mt-40 ml-10 bg-white rounded-2xl shadow shadow-gray-300'>
                <h1 className='text-xl md:text-2xl font-bold mb-4'>
                    Welcome to LifeThreads
                </h1>
                <p className='text-sm md:text-lg mb-6'>
                    Discover stories, insights, and ideas from a diverse community of writers.
                </p>
                <button className='px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md'>
                    Explore Now
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
