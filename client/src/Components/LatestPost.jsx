import React from 'react';
import PostCard from './PostCard';

const LatestPost = () => {
    return (
        <section className='md:mt-20 lg:mt-30 px-4 mt-10'>
            <h1 className='text-3xl font-bold text-left mb-4 text-blue-500'>Latest Posts</h1>
            <hr className="border-gray-300 my-4" />
            {/* Grid Layout for Latest Posts */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                {/* Example Post Cards */}
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
            <hr className="border-gray-300 my-4" />
        </section>
    );
};

export default LatestPost;
