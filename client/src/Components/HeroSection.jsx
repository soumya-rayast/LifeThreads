import React from 'react';
import hero from "../assets/hero.jpg";
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate()
    return (
        <div className='relative w-full h-[50vh] md:h-[40vh] flex items-center justify-center rounded-3xl mt-7 overflow-hidden'>
            {/* Hero Image */}
            <img 
                src={hero} 
                alt="Hero background" 
                className='w-full h-full object-cover rounded-2xl'
            />

            {/* Overlay for darkening the image */}
            <div className='absolute inset-0 bg-black opacity-50 rounded-2xl'></div>

            {/* Hero Text Content */}
            <div className='absolute text-white w-[400px] h-[200px] flex flex-col items-center justify-center text-center px-4 rounded-2xl shadow'>
                <h1 className='text-xl md:text-2xl font-bold mb-4'>
                    Welcome to LifeThreads
                </h1>
                <p className='text-sm md:text-lg mb-6'>
                    Discover stories, insights, and ideas from a diverse community of writers.
                </p>
                <button className='px-6 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-md' onClick={()=>navigate('/blogs')}>
                    Explore Now
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
