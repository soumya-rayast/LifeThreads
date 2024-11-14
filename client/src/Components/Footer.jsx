import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
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
                </div>
                
                {/* Quick Links Section */}
                <div className='w-full sm:w-1/2 md:w-1/4'>
                    <h2 className='text-lg font-bold mb-2'>Quick Links</h2>
                    <ul className='text-sm space-y-2'>
                        <li><a href="/" className='hover:text-blue-400'>Home</a></li>
                        <li><a href="/about" className='hover:text-blue-400'>About</a></li>
                        <li><a href="/blog" className='hover:text-blue-400'>Blog</a></li>
                        <li><a href="/contact" className='hover:text-blue-400'>Contact</a></li>
                        <li><a href="/author" className='hover:text-blue-400'>Author</a></li>
                    </ul>
                </div>
                
                {/* Category Section */}
                <div className='w-full sm:w-1/2 md:w-1/4'>
                    <h2 className='text-lg font-bold mb-2'>Category</h2>
                    <ul className='text-sm space-y-2'>
                        <li><a href="/category/lifestyle" className='hover:text-blue-400'>Lifestyle</a></li>
                        <li><a href="/category/technology" className='hover:text-blue-400'>Technology</a></li>
                        <li><a href="/category/travel" className='hover:text-blue-400'>Travel</a></li>
                        <li><a href="/category/business" className='hover:text-blue-400'>Business</a></li>
                        <li><a href="/category/economy" className='hover:text-blue-400'>Economy</a></li>
                        <li><a href="/category/sports" className='hover:text-blue-400'>Sports</a></li>
                    </ul>
                </div>
                
                {/* Newsletter Subscription Section */}
                <div className='w-full sm:w-1/2 md:w-1/4'>
                    <h2 className='text-lg font-bold mb-2'>Get Weekly Newsletter & Updates</h2>
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

                {/* Social Media Links Section */}
                <div className='w-full mt-6 flex justify-center md:justify-start md:w-auto'>
                    <ul className='flex gap-4'>
                        <li><a href="#" className='hover:text-blue-400'><FaFacebook /></a></li>
                        <li><a href="#" className='hover:text-blue-400'><FaSquareInstagram /></a></li>
                        <li><a href="#" className='hover:text-blue-400'><FaTwitter/></a></li>
                        <li><a href="#" className='hover:text-blue-400'><FaYoutube /></a></li>
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
