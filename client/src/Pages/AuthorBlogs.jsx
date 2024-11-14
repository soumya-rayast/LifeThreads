import React from 'react';
import PostCard from '../Components/PostCard';

const AuthorBlogs = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl text-blue-500 font-semibold mb-4">Your Blogs</h1>
            <div className="space-y-4">
                <PostCard />
            </div>
        </div>
    );
};

export default AuthorBlogs;
