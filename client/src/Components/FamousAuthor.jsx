import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FamousAuthor = () => {
  const [trendingBlogs, setTrendingBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="p-4 mt-4">
      <h2 className="text-2xl font-bold text-center mb-4 text-blue-500">Trending Blogs by Famous Authors</h2>
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {trendingBlogs.length > 0 ? (
            trendingBlogs.map((blog) => (
              <div
                key={blog.id}
                className="border p-4 rounded shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-500">By: {blog.authorName}</p>
                <p className="text-gray-700 mt-2">{blog.excerpt}</p>
                <a
                  href={`/blogs/${blog.id}`}
                  className="text-blue-500 hover:underline mt-4 block"
                >
                  Read More
                </a>
              </div>
            ))
          ) : (
            <p className="text-center">No trending blogs available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FamousAuthor;
