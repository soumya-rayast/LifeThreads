import React from 'react';
import PostCard from '../Components/PostCard';
import { FaSearch } from "react-icons/fa";

const Blogs = () => {
    return (
        <div className='mt-20 mb-5 mx-10 flex flex-col'>
            {/* Search Functionality */}
            <div className='flex  flex-col items-center gap-4 mb-10'>
                <div className='relative  w-full md:w-1/2'>
                    <input 
                        type="text" 
                        placeholder="Search blog posts..." 
                        className='w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none'
                    />
                    <button className='absolute right-3 top-2 text-gray-500 hover:text-blue-500 flex justify-center items-center mt-1'>
                        <FaSearch />
                    </button>
                </div>
                
                {/* List of Tags */}
                <div className='flex gap-2'>
                    <button className='px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300'>#All</button>
                    <button className='px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300'>#Technology</button>
                    <button className='px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300'>#Travel</button>
                    <button className='px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300'>#Business</button>
                    <button className='px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300'>#Lifestyle</button>
                </div>
            </div>

            {/* Blog Posts List */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
            <hr className="border-gray-300 my-4" />
        </div>
    );
}

export default Blogs;