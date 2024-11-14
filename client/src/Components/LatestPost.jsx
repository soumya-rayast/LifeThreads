import React from 'react';
import PostCard from './PostCard';

const LatestPost = () => {
    return (
        <section className='md:mt-20 lg:mt-30 px-4'>
            <h1 className='text-3xl font-bold text-left mb-4'>Latest Posts</h1>
            <hr className='m-3' />
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
        </section>
    );
};

export default LatestPost;
