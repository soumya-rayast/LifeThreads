import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const CreatePost = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      title,
      content,
      image,
      tags: tags.split(',').map(tag => tag.trim()),
      category,
    };
    console.log(postData);

  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 mb-10">
      <Helmet>
        <title>LifeThreads - Create Blog</title>
      </Helmet>
      <h1 className="text-3xl font-semibold text-blue-500 mb-4">Create New Blog Post</h1>

      {/* Post Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-semibold text-gray-700 mb-2">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-4"
            placeholder="Enter post title"
            required
          />
        </div>

        {/* Content */}
        <div className="mb-4">
          <label htmlFor="content" className="block text-lg font-semibold text-gray-700 mb-2">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-4  resize-none"
            rows="6"
            placeholder="Enter post content"
            required
          />
        </div>

        {/* Image */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-lg font-semibold text-gray-700 mb-2">Post Image</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full border border-gray-300 rounded-lg p-4"
          />
        </div>

        <div className='flex gap-10 flex-wrap'>
          {/* Tags */}
          <div className="mb-4 w-[250px]">
            <label htmlFor="tags" className="block text-lg font-semibold text-gray-700 mb-2 ">Tags (comma separated)</label>
            <input
              type="text"
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-4 "
              placeholder="e.g. technology, travel, lifestyle"
            />
          </div>

          {/* Category */}
          <div className="mb-4 w-[250px]">
            <label htmlFor="category" className="block text-lg font-semibold text-gray-700 mb-2">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-4"
              required
            >
              <option value="">Select a category</option>
              <option value="technology">Technology</option>
              <option value="travel">Travel</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="health">Health</option>
              <option value="business">Business</option>
              <option value="food">Food</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mb-6">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition w-full sm:w-auto"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
