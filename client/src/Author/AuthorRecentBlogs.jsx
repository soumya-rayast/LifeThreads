import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import hero from "../assets/hero.jpg"; // Placeholder image for blogs

// Sample data for recent blogs by the author (You can replace this with API data)
const sampleBlogs = [
  { id: 1, title: 'React State Management', author: 'John Doe' },
  { id: 2, title: 'Effective JavaScript Debugging', author: 'Jane Smith' },
  { id: 3, title: 'Building REST APIs with Express', author: 'Michael Brown' },
  { id: 4, title: 'Advanced CSS Techniques', author: 'Emily Davis' },
];

const AuthorRecentBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  // Fetching blogs data (can be replaced with API call)
  useEffect(() => {
    setBlogs(sampleBlogs);
  }, []);

  // Handle click to navigate to BlogDetail page
  const handleBlogClick = (blogId) => {
    navigate(`/postDetail/${blogId}`);
  };

  return (
    <section className='md:mt-20 lg:mt-30 px-4 mt-10'>
      <h1 className='text-3xl font-bold text-left mb-4 text-blue-500'>Recent Blogs by Author</h1>
      <hr className="border-gray-300 my-4" />

      {/* Grid Layout for Recent Blogs */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition duration-300'
            onClick={() => handleBlogClick(blog.id)}
          >
            {/* Blog Image */}
            <img
              src={hero}
              alt={blog.title}
              className='w-full h-[150px] object-cover hover:scale-105 transition-transform duration-300'
            />
            {/* Blog Details */}
            <div className='p-4'>
              <h2 className='text-lg font-bold mb-2'>{blog.title}</h2>
              <p className='text-sm text-gray-700'>By {blog.author}</p>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-gray-300 my-4" />
    </section>
  );
};

export default AuthorRecentBlogs;
