import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-10'>
      <div className='container mx-auto flex flex-wrap justify-between gap-8 px-4'>
        
        {/* About Section */}
        <div className='w-full sm:w-1/2 md:w-1/4'>
          <h2 className='text-lg font-bold mb-2'>About</h2>
          <p className='text-sm'>
            LifeThreads is a blog platform where users can write and share their thoughts, stories, and experiences. It offers a simple interface for creating articles, engaging with readers, and exploring diverse content from other writers.
          </p>

          {/* Newsletter Subscription Section */}
          <h3 className='text-lg font-bold mt-6 mb-2'>Get Weekly Newsletter & Updates</h3>
          <p className='text-sm mb-4'>Get articles and offers via email</p>
          <div className='flex gap-2'>
            <input
              type="email"
              placeholder='Your Email'
              className='w-full px-2 py-2 rounded text-gray-800 border focus:outline-none'
            />
            <button className='px-3 py-2 bg-blue-500 rounded text-white hover:bg-blue-600'>
              Subscribe
            </button>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className='w-full sm:w-1/2 md:w-1/4'>
          <h2 className='text-lg font-bold mb-2'>Quick Links</h2>
          <ul className='text-sm space-y-2'>
            <li><Link to="/" className='hover:text-blue-400'>Home</Link></li>
            <li><Link to="/about" className='hover:text-blue-400'>About</Link></li>
            <li><Link to="/blogs" className='hover:text-blue-400'>Blog</Link></li>
            <li><Link to="/contact" className='hover:text-blue-400'>Contact</Link></li>
            <li><Link to="/categories" className='hover:text-blue-400'>Categories</Link></li>
          </ul>
        </div>

        {/* Category Section */}
        <div className='w-full sm:w-1/2 md:w-1/4'>
          <h2 className='text-lg font-bold mb-2'>Category</h2>
          <ul className='text-sm space-y-2'>
            <li><Link to="/category/lifestyle" className='hover:text-blue-400'>Lifestyle</Link></li>
            <li><Link to="/category/technology" className='hover:text-blue-400'>Technology</Link></li>
            <li><Link to="/category/travel" className='hover:text-blue-400'>Travel</Link></li>
            <li><Link to="/category/business" className='hover:text-blue-400'>Business</Link></li>
            <li><Link to="/category/economy" className='hover:text-blue-400'>Economy</Link></li>
            <li><Link to="/category/sports" className='hover:text-blue-400'>Sports</Link></li>
          </ul>
        </div>

        {/* Social Media Links Section */}
        <div className='w-full sm:w-1/2 md:w-1/4 flex justify-center gap-4 md:justify-start'>
          <h3 className='text-lg font-bold mb-4'>Follow Us</h3>
          <ul className='flex gap-4 mt-2 '>
            <li><Link to="/" className='hover:text-blue-400'><FaFacebook /></Link></li>
            <li><Link to="/" className='hover:text-blue-400'><FaSquareInstagram /></Link></li>
            <li><Link to="/" className='hover:text-blue-400'><FaTwitter /></Link></li>
            <li><Link to="/" className='hover:text-blue-400'><FaYoutube /></Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className='text-center mt-10 text-sm text-gray-500'>
        © 2024 LifeThreads. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
