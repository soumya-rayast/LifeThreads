import React from 'react';
import { MdLocalMovies, MdOutlineBook, MdOutlineBusinessCenter, MdOutlineTravelExplore, MdPets } from "react-icons/md";
import { IoFastFoodSharp, IoGameControllerOutline } from "react-icons/io5";
import { MdFitnessCenter } from "react-icons/md";
import { GiBookshelf, GiMeal, GiMusicSpell, GiTravelDress, GiTrophy } from "react-icons/gi";
import { MdOutlineSportsCricket } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { FaBaby, FaLaptop } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
const category = () => [
    {
        icon: <MdOutlineTravelExplore />,
        categoryName: "Travel"
    },
    {
        icon: <IoFastFoodSharp />,
        categoryName: "Food"
    },
    {
        icon: <MdFitnessCenter />,
        categoryName: "Gym & Fitness"
    },
    {
        icon: <GiTravelDress />,
        categoryName: "Fashion"
    },
    {
        icon: <MdOutlineSportsCricket />,
        categoryName: "Sports"
    },
    {
        icon: <GiHealthNormal />,
        categoryName: "HealthCare"
    },
    {
        icon: <FaLaptop />,
        categoryName: "Technology"
    },
    {
        icon: <MdLocalMovies />,
        categoryName: "Movies"
    },
    {
        icon: <GiBookshelf />,
        categoryName: "Books"
    },
    {
        icon: <GiMusicSpell />,
        categoryName: "Music"
    },
    {
        icon: <GiMeal />,
        categoryName: "Recipes"
    },
    {
        icon: <MdOutlineBusinessCenter />,
        categoryName: "Business"
    },
    {
        icon: <FaBaby />,
        categoryName: "Parenting"
    },
    {
        icon: <MdOutlineBook />,
        categoryName: "Education"
    },
    {
        icon: <GiTrophy />,
        categoryName: "Achievements"
    },
    {
        icon: <IoGameControllerOutline />,
        categoryName: "Gaming"
    },
    {
        icon: <MdPets />,
        categoryName: "Pets"
    }
];


const Categories = () => {
    return (
        <div className='flex flex-col justify-center items-center  mt-10 mb-10'>
            <Helmet>
                <title>LifeThreads - Categories</title>
            </Helmet>
            <h1 className="text-3xl font-bold mb-10 text-blue-500">Categories</h1>
            <div className='flex flex-wrap gap-4 mb-10 px-20'>
                {category().map((data, index) => (
                    <div key={index} className='flex flex-col bg-white cursor-pointer flex-wrap w-[150px] h-[150px] justify-center text-blue-500 items-center gap-2 p-4 border rounded-lg shadow-md  hover:bg-blue-500 hover:text-white'>
                        <div className="text-2xl ">{data.icon}</div>
                        <span className="text-lg font-medium ">{data.categoryName}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
