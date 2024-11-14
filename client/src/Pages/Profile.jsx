import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEditSquare } from "react-icons/md";
import PostCard from '../Components/PostCard';

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-10 px-4">
      <div className="max-w-5xl w-full bg-white rounded-lg shadow-lg mt-10 mb-10 p-8">

        {/* Profile Photo and Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <img
              src="https://via.placeholder.com/150"
              alt="User Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold text-blue-500">John Doe</h2>
              <p className="text-gray-600">johndoe@example.com</p>
              <p className="text-gray-600">+91 1234567890</p>
            </div>
          </div>
          <button className="text-blue-500 md:flex hidden items-center">
            <MdEditSquare size={24} />
          </button>
        </div>

        {/* Description Section */}
        <div className="mb-8 text-left px-4">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">About Me</h3>
          <p className="text-gray-600">
            Passionate blogger, travel enthusiast, and tech lover. Sharing my journey and insights with the world.
            Let’s connect and explore ideas together!
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* User Blog */}
      <div className="w-full px-3 sm:px-10 mb-10">
        <h1 className="text-left text-3xl font-semibold mb-5">User's Recent Blogs</h1>
        <hr className="mb-5" />
        <div className="flex flex-wrap gap-4">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </div>
  );
};

export default Profile;
