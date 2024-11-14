import React, { useState } from 'react';
import PostCard from '../Components/PostCard';
import { FaSearch } from "react-icons/fa";
import Pagination from '../Components/Pagination'; // Assuming you have the Pagination component
import { Helmet } from 'react-helmet';

const Blogs = () => {
    const blogPosts = [
        { id: 1, title: 'Blog Post 1', content: 'Content for blog post 1' },
        { id: 2, title: 'Blog Post 2', content: 'Content for blog post 2' },
        { id: 3, title: 'Blog Post 3', content: 'Content for blog post 3' },
        { id: 4, title: 'Blog Post 4', content: 'Content for blog post 4' },
        { id: 5, title: 'Blog Post 5', content: 'Content for blog post 5' },
        { id: 6, title: 'Blog Post 6', content: 'Content for blog post 6' },
        { id: 7, title: 'Blog Post 7', content: 'Content for blog post 7' },
        { id: 8, title: 'Blog Post 8', content: 'Content for blog post 8' },
        { id: 9, title: 'Blog Post 9', content: 'Content for blog post 9' },
        { id: 11, title: 'Blog Post 10', content: 'Content for blog post 10' },
        { id: 12, title: 'Blog Post 10', content: 'Content for blog post 10' },
        { id: 13, title: 'Blog Post 10', content: 'Content for blog post 10' },
        { id: 14, title: 'Blog Post 10', content: 'Content for blog post 10' },
        { id: 15, title: 'Blog Post 10', content: 'Content for blog post 10' },
        { id: 16, title: 'Blog Post 10', content: 'Content for blog post 10' },
        { id: 17, title: 'Blog Post 10', content: 'Content for blog post 10' },
        { id: 18, title: 'Blog Post 10', content: 'Content for blog post 10' },
        { id: 19, title: 'Blog Post 10', content: 'Content for blog post 10' },
        { id: 20, title: 'Blog Post 10', content: 'Content for blog post 10' },
        { id: 21, title: 'Blog Post 10', content: 'Content for blog post 10' },

    ];

    const postsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;


    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='mt-10 mb-5 mx-10 flex flex-col px-5'>
            <Helmet>
                <title>LifeThreads - Blogs</title>
            </Helmet>
            <div className='flex flex-col items-center gap-4 mb-10'>
                <div className='relative w-full md:w-1/2'>
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
                <div className='flex gap-2 flex-wrap'>
                    <button className='px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300'>#All</button>
                    <button className='px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300'>#Technology</button>
                    <button className='px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300'>#Travel</button>
                    <button className='px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300'>#Business</button>
                    <button className='px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300'>#Lifestyle</button>
                </div>
            </div>

            {/* Blog Posts List */}
            <div className='px-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 '>
                    {currentPosts.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </div>

            {/* Pagination Component */}
            <Pagination
                totalItems={blogPosts.length}
                itemsPerPage={postsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />

            <hr className="border-gray-300 my-4" />
        </div>
    );
}

export default Blogs;
