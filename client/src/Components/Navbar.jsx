import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isAvatarOpen, setIsAvatarOpen] = useState(false);

    const isLoggedIn =  useState(true)

    // Close avatar dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.navbar') && !event.target.closest('.dropdown-menu')) {
                setIsAvatarOpen(false);
            }
        };
        if (isAvatarOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isAvatarOpen]);

    return (
        <div className="navbar flex justify-between items-center px-4 py-2 shadow-md sticky top-0 bg-white z-50">
            {/* Logo Section */}
            <Link to="/" className="text-xl font-bold cursor-pointer">
                Life<span className="text-blue-500">Threads</span>
            </Link>

            {/* Search bar (visible on desktop) */}
            <div className="hidden md:flex gap-4">
                <input
                    type="text"
                    className="border rounded-full px-2 py-1"
                    placeholder="Search..."
                />
            </div>

            {/* Navigation Links and Avatar */}
            <div className="flex items-center gap-4">
                {/* Desktop Navigation Links */}
                <div className="hidden md:flex gap-6">
                    <Link to="/" className="hover:text-blue-500">Home</Link>
                    <Link to="/blogs" className="hover:text-blue-500">Blog</Link>
                    <Link to="/categories" className="hover:text-blue-500">Categories</Link>
                    <Link to="/auth" className="hover:text-blue-500">Login</Link>
                </div>

                {/* Avatar for Dropdown Menu */}
                {isLoggedIn && (
                    <div className="relative">
                        <img
                            src="https://via.placeholder.com/40" 
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full cursor-pointer"
                            onClick={() => setIsAvatarOpen(!isAvatarOpen)}
                        />
                        {isAvatarOpen && (
                            <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-white shadow-2xl rounded-md py-2 z-10">
                                {/* Display Links in Avatar Dropdown on Mobile */}
                                <Link to="/" className="block px-4 py-2 hover:bg-gray-100 md:hidden">Home</Link>
                                <Link to="/blogs" className="block px-4 py-2 hover:bg-gray-100 md:hidden">Blog</Link>
                                <Link to="/categories" className="block px-4 py-2 hover:bg-gray-100 md:hidden">Categories</Link>

                                {/* Common Links for Profile Actions */}
                                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                                <Link to="/createPost" className="block px-4 py-2 hover:bg-gray-100">Create Blog</Link>
                                <Link to="/authorblogs" className="block px-4 py-2 hover:bg-gray-100">Your Blogs</Link>
                                <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
                                <Link to="/" onClick={() => localStorage.removeItem('userToken')} className="block px-4 py-2 hover:bg-gray-100">LogOut</Link>
                                {/* Light/Dark Mode Toggle */}
                                <button
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-start items-center"
                                    onClick={() => alert('Toggle Light/Dark Mode')}
                                >
                                    🌗
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
