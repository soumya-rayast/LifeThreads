import React, { useState } from 'react';

const EditPost = () => {
  const [postDetails, setPostDetails] = useState({
    title: '',
    content: '',
    image: '',
    category: '',
    tags: []
  });

  const categories = ['Technology', 'Lifestyle', 'Business', 'Sports', 'Travel', 'Health'];

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostDetails({
      ...postDetails,
      [name]: value,
    });
  };

  // Handle tag input change
  const handleTagChange = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      const newTag = e.target.value.trim();
      if (!postDetails.tags.includes(newTag)) {
        setPostDetails({
          ...postDetails,
          tags: [...postDetails.tags, newTag]
        });
        e.target.value = ''; 
      }
    }
  };

  // Handle file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPostDetails({
        ...postDetails,
        image: file,
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Post Details:', postDetails);
  };

  // Remove tag
  const handleRemoveTag = (tagToRemove) => {
    setPostDetails({
      ...postDetails,
      tags: postDetails.tags.filter(tag => tag !== tagToRemove)
    });
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-semibold text-center mb-6 text-blue-500">Edit Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        
        {/* Title */}
        <div className="form-group">
          <label htmlFor="title" className="block text-lg font-medium mb-2 text-blue-500">Post Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={postDetails.title}
            onChange={handleInputChange}
            placeholder="Enter post title"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Content */}
        <div className="form-group">
          <label htmlFor="content" className="block text-lg font-medium mb-2 text-blue-500">Content</label>
          <textarea
            id="content"
            name="content"
            value={postDetails.content}
            onChange={handleInputChange}
            placeholder="Write your content here"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="6"
            required
          />
        </div>

        {/* Image */}
        <div className="form-group">
          <label htmlFor="image" className="block text-lg font-medium mb-2 text-blue-500 ">Post Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            className="w-full p-3 border border-gray-300 rounded-lg file:border-0 file:px-6 file:py-3 file:bg-blue-500 file:text-white"
          />
          {postDetails.image && <p className="mt-2 text-sm text-gray-600 text-blue-500">Selected Image: {postDetails.image.name}</p>}
        </div>

        {/* Category & Tags Row */}
        <div className="flex gap-4">
          {/* Category */}
          <div className="form-group w-1/2">
            <label htmlFor="category" className="block text-lg font-medium mb-2 text-blue-500">Category</label>
            <select
              id="category"
              name="category"
              value={postDetails.category}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Tags */}
          <div className="form-group w-1/2">
            <label className="block text-lg font-medium mb-2 text-blue-500">Tags</label>
            <div className="flex flex-wrap gap-3 ">
              {postDetails.tags.map((tag, index) => (
                <span key={index} className="bg-blue-200 text-blue-600 px-3 py-1 rounded-full flex items-center gap-2">
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="text-sm text-blue-500 hover:text-blue-700"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
            <input
              type="text"
              placeholder="Add tags and press Enter"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyDown={handleTagChange}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <button type="submit" className="w-full py-3 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
