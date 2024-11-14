import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import PostCard from '../Components/PostCard';
import { Helmet } from 'react-helmet';

const Author = () => {
  // Example author details
  const authorDetails = {
    name: 'John Doe',
    phoneNumber: '+1234567890',
    email: 'johndoe@example.com',
    profileImage: 'https://via.placeholder.com/150', // Author image URL
    socialLinks: [
      { platform: <FaTwitter />, url: 'https://twitter.com/johndoe' },
      { platform: <FaLinkedin />, url: 'https://linkedin.com/in/johndoe' },
      { platform: <FaInstagram />, url: 'https://instagram.com/johndoe' },
      { platform: <FaFacebook />, url: 'https://facebook.com/johndoe' },
    ],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula ullamcorper mi, vitae volutpat orci.',
  };

  // Example blogs
  const blogs = [
    { id: 1, title: 'First Blog', content: 'Content of the first blog' },
    { id: 2, title: 'Second Blog', content: 'Content of the second blog' },
    // Add more blog data here
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Changing Title Name */}
      <Helmet>
        <title>LifeThreads - Author Details</title>
      </Helmet>
      {/* Author Details Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 flex flex-col sm:flex-row">
        {/* Author Image */}
        <div className="w-32 h-32 flex justify-center items-center mt-4 mb-4 sm:mb-0">
          <img
            src={authorDetails.profileImage}
            alt={authorDetails.name}
            className="w-full h-full object-cover rounded-full border-2 border-blue-500"
          />
        </div>

        <div className="ml-0 sm:ml-4">
          <h1 className="text-2xl font-bold">{authorDetails.name}</h1>
          <p><span className="font-semibold">Phone:</span> {authorDetails.phoneNumber}</p>
          <p><span className="font-semibold">Email:</span> {authorDetails.email}</p>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            {authorDetails.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {link.platform}
              </a>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-700 mt-4">{authorDetails.description}</p>
        </div>
      </div>

      {/* Blogs Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-blue-500">Blogs by {authorDetails.name}</h2>
        <div className="flex justify-center items-center gap-5 flex-wrap">
          {blogs.map(blog => (
            <PostCard key={blog.id} title={blog.title} content={blog.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Author;
