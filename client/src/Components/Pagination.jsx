import React, { useState } from 'react';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage); 


  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return; 
    setCurrentPage(page);
    onPageChange(page); 
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-5">
      {/* Previous Page Button */}
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="px-4 py-2 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
      >
        <GrFormPrevious />
      </button>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          className={`px-4 py-2 border rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-400`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      {/* Next Page Button */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="px-4 py-2 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
      >
        <GrFormNext/>
      </button>
    </div>
  );
};

export default Pagination;
