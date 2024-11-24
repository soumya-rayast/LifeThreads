import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import hero from "../assets/hero.jpg"; // Placeholder image for blogs

// Sample data for author's blogs (Replace with API data)
const sampleAuthorBlogs = [
  { id: 1, title: 'Understanding React Hooks', author: 'John Doe' },
  { id: 2, title: 'JavaScript Async Patterns', author: 'Jane Smith' },
  { id: 3, title: 'Styling in Tailwind CSS', author: 'Michael Brown' },
  { id: 4, title: 'Node.js Best Practices', author: 'Emily Davis' },
];

const AuthorBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  // Fetch author's blogs data (can be replaced with API call)
  useEffect(() => {
    setBlogs(sampleAuthorBlogs);
  }, []);

  // Handle click to navigate to BlogDetail page
  const handleBlogClick = (blogId) => {
    navigate(`/postDetail/${blogId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>LifeThreads - Author Blogs</title>
      </Helmet>
      
      <h1 className="text-2xl text-blue-500 font-semibold mb-4">Your Blogs</h1>
      
      {/* List of Author Blogs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            onClick={() => handleBlogClick(blog.id)}
          >
            {/* Blog Image */}
            <img
              src={hero}
              alt={blog.title}
              className="w-full h-[150px] object-cover hover:scale-105 transition-transform duration-300"
            />
            
            {/* Blog Details */}
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
              <p className="text-sm text-gray-700">By {blog.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorBlogs;
