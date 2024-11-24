import React, { useState, useEffect } from 'react';
import hero from "../assets/hero.jpg"; // Sample image for posts
import { useNavigate } from 'react-router-dom';

// Example data for latest posts (You can replace this with API data)
const samplePosts = [
  { id: 1, title: 'Understanding React Hooks', author: 'John Doe' },
  { id: 2, title: 'Getting Started with Next.js', author: 'Jane Smith' },
  { id: 3, title: 'Node.js Best Practices', author: 'Michael Brown' },
  { id: 4, title: 'Building a MERN App', author: 'Emily Davis' },
];

const LatestPost = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  // Fetching posts data (useEffect for API integration if needed)
  useEffect(() => {
    // Replace with API call to fetch posts
    setPosts(samplePosts);
  }, []);

  // Handle click to navigate to PostDetail page
  const handlePostClick = (postId) => {
    navigate(`/postDetail/${postId}`);
  };

  return (
    <section className='md:mt-20 lg:mt-30 px-4 mt-10'>
      <h1 className='text-3xl font-bold text-left mb-4 text-blue-500'>Latest Posts</h1>
      <hr className="border-gray-300 my-4" />

      {/* Grid Layout for Latest Posts */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {posts.map((post) => (
          <div
            key={post.id}
            className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition duration-300'
            onClick={() => handlePostClick(post.id)}
          >
            {/* Post Image */}
            <img
              src={hero}
              alt={post.title}
              className='w-full h-[150px] object-cover hover:scale-105 transition-transform duration-300'
            />
            {/* Post Details */}
            <div className='p-4'>
              <h2 className='text-lg font-bold mb-2'>{post.title}</h2>
              <p className='text-sm text-gray-700'>By {post.author}</p>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-gray-300 my-4" />
    </section>
  );
};

export default LatestPost;
