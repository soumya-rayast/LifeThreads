import React from 'react';
import hero from "../assets/hero.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowForwardCircle } from "react-icons/io5";
const PostCard = () => {
    const navigate = useNavigate()
    return (
        <div className='cursor-pointer bg-white rounded-lg shadow-md overflow-hidden w-full md:w-[300px]'>
            {/* Post Image */}
            <img
                src={hero}
                alt="Blog post"
                className='w-full h-[150px] object-cove hover:scale-110 ease-in-out'
            />
            {/* Post Content */}
            <div className='p-4'>
                <button className='text-xs border rounded-md w-[50px]'>Tag List</button>
                <p className='text-sm text-blue-500 font-semibold mb-2'>Category Name</p>
                <h2 className='text-lg font-bold mb-2'>Blog Title</h2>
                <p className='text-gray-700 mb-4'>
                    Short description of the blog post. This is a brief excerpt that captures the reader's interest.
                </p>

                {/* Author Section */}
                <div className='flex items-center gap-3 mb-4'>
                    <div className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center'>
                        {/* Replace with actual avatar */}
                        <span className='text-xs'>👤</span>
                    </div>
                    <div>
                        <p className='text-sm font-medium'>Author Name</p>
                        <p className='text-xs text-gray-500'>Posted on November 10, 2024</p>
                    </div>
                </div>

                {/* Read More Button */}
                <button
                    className='w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300'
                    onClick={() => navigate("/postDetail")}>
                    <Link className='flex justify-center items-center gap-2'>
                        Read More
                        <IoArrowForwardCircle size={24} />
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default PostCard;
