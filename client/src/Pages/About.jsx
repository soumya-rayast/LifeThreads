import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const About = () => {
  return (
    <div className='bg-gray-100 py-10'>
      <Helmet>
        <title>LifeThreads - About</title>
      </Helmet>
      <div className='container mx-auto px-4 bg-white py-4 rounded-md shadow-xl'>

        {/* About Section */}
        <section className='text-center'>
          <h1 className='text-4xl font-bold mb-4 text-blue-500'>About LifeThreads</h1>
          <p className='text-lg mb-6'>
            LifeThreads is a blog platform where users can write and share their thoughts, stories, and experiences. It offers a simple interface for creating articles, engaging with readers, and exploring diverse content from other writers.
          </p>
        </section>

        {/* Newsletter Subscription Section */}
        <section className='text-center mt-12'>
          <h2 className='text-2xl font-bold mb-4 text-blue-500'>Get Weekly Newsletter & Updates</h2>
          <p className='text-sm mb-4'>Get articles and offers via email</p>
          <div className='flex justify-center flex-wrap gap-2'>
            <input
              type="email"
              placeholder='Your Email'
              className='px-4 py-2 rounded text-gray-800 border focus:outline-none'
            />
            <button className='px-4 py-2 bg-blue-500 rounded text-white hover:bg-blue-600'>
              Subscribe
            </button>
          </div>
        </section>

        {/* Social Media Links Section */}
        <section className='text-center mt-12 text-blue-500'>
          <h2 className='text-2xl font-bold mb-4'>Follow Us</h2>
          <ul className='flex justify-center gap-6  '>
            <li><Link to="/" className='hover:text-blue-400'><FaFacebook size={24} /></Link></li>
            <li><Link to="/" className='hover:text-blue-400'><FaSquareInstagram size={24} /></Link></li>
            <li><Link to="/" className='hover:text-blue-400'><FaTwitter size={24} /></Link></li>
            <li><Link to="/" className='hover:text-blue-400'><FaYoutube size={24} /></Link></li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default About;
