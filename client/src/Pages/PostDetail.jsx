import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const PostDetail = () => {
  const navigate = useNavigate()
  // State to handle new comment input and the list of comments
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    {
      author: 'Jane Doe',
      text: 'Great post! I really enjoyed reading it.',
      profileImage: 'https://via.placeholder.com/50', // Profile image URL
    },
    {
      author: 'Sam Smith',
      text: 'Very insightful, looking forward to more content like this.',
      profileImage: 'https://via.placeholder.com/50', // Profile image URL
    },
  ]);

  // Handle new comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      setComments([
        ...comments,
        { author: 'Anonymous', text: comment, profileImage: 'https://via.placeholder.com/50' }, // Default image
      ]);
      setComment(''); // Clear the input after submission
    }
  };

  // Sample data for related blogs
  const relatedBlogs = [
    { title: 'Tech Innovations 2024', image: 'https://via.placeholder.com/300x200', link: '#' },
    { title: 'Top Travel Destinations', image: 'https://via.placeholder.com/300x200', link: '#' },
    { title: 'Lifestyle Tips and Tricks', image: 'https://via.placeholder.com/300x200', link: '#' },
    { title: 'Healthy Living Guide', image: 'https://via.placeholder.com/300x200', link: '#' },
  ];

  return (
    <div className="flex flex-col mb-2 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <Helmet>
        <title>Blog - Post Details</title>
      </Helmet>
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        {/* Blog Title */}
        <h1 className="text-3xl font-semibold text-blue-500 mb-4">Blog Title</h1>
        {/* Author and Post Date */}
        <div className="flex items-center justify-between text-gray-600 mb-4">
          <div onClick={() => navigate("/author")} className='cursor-pointer'>
            <span className="font-semibold text-blue-500">Author:</span> John Doe
          </div>
          <div>
            <span className="font-semibold text-blue-500">Posted on:</span> October 14, 2024
          </div>
        </div>
        {/* Blog Image */}
        <img
          src="https://via.placeholder.com/800x400"
          alt="Blog post image"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        {/* Tags */}
        <div className="mb-4">
          <span className="font-semibold text-blue-500">Tags:</span>
          <span className="ml-2 text-gray-600">Technology, Travel, Blogging</span>
        </div>

        {/* Category */}
        <div className="mb-4">
          <span className="font-semibold text-blue-500">Category:</span>
          <span className="ml-2 text-gray-600">Lifestyle</span>
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque cursus purus sed sapien cursus, at fermentum elit interdum. Proin tristique orci sit amet urna ullamcorper, ac tincidunt sapien auctor.
            Mauris a erat ac urna sodales tempor non vel lectus. Integer congue lorem ac lectus finibus, at dictum erat bibendum. Vivamus at risus eu turpis posuere condimentum sit amet sit amet dui.
          </p>
        </div>

        {/* Share Count */}
        <button className="mb-6 text-gray-600 flex flex-row items-center gap-2 border border-blue-600 px-2 py-1 rounded-full">
          <span className="font-semibold text-blue-500 "><FaShareNodes /></span> 120
        </button>

        {/* Social Media Share Buttons */}
        <div className="flex gap-4 justify-center mb-6 flex-wrap">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-full sm:w-auto"><FaFacebook /></button>
          <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition w-full sm:w-auto"><FaXTwitter /></button>
          <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition w-full sm:w-auto"><FaInstagramSquare /></button>
          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition w-full sm:w-auto"><FaLinkedin /></button>
        </div>

        {/* Comment Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-blue-500 mb-4">Comments</h3>

          {/* Comment List */}
          <div className="space-y-4">
            {comments.map((comment, index) => (
              <div key={index} className="flex gap-4 p-4 border-b border-gray-300">
                {/* Profile Image */}
                <img
                  src={comment.profileImage}
                  alt={comment.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                />

                {/* Comment Content */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-blue-500">{comment.author}</span>
                    <span className="text-gray-600 text-sm">2 hours ago</span>
                  </div>
                  <p className="text-gray-700">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="mt-6">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment..."
              className="w-full border border-gray-300 rounded-lg p-4 mb-4"
              rows="4"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition"
            >
              Post Comment
            </button>
          </form>
        </div>
      </div>

      {/* Related Blogs Section */}
      <div className="mt-10 w-full ">
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">Related Blogs</h3>
        <hr className="border-gray-300 my-4" />

        <div className="flex overflow-x-auto gap-6 justify-start items-start sm:px-6 md:px-10 lg:px-14 xl:px-20 cursor-pointer">
          {relatedBlogs.map((blog, index) => (
            <div key={index} className="w-60 bg-white p-4 rounded-xl border  shadow-xl flex-shrink-0">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-lg font-semibold text-blue-500 mb-2">{blog.title}</h4>
              <div className='flex items-center justify-between my-2'>
                {/* <img src="" alt="" /> */}
                <h2>Author name</h2>
                <p>date</p>
              </div>
              <button className="bg-blue-500 w-full text-white rounded-md p-3">Read more</button>
            </div>
          ))}
        </div>
        <hr className="border-gray-300 my-4" />
      </div>

    </div>
  );
};

export default PostDetail;
