import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../redux/authSlice.js';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
    const [isAvatarOpen, setIsAvatarOpen] = useState(false);
    const location = useLocation();
    const dispatch = useDispatch();
    
    // Check if the user is logged in from the Redux state
    const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

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
        <div className="navbar flex justify-between items-center px-4 py-4 shadow-md sticky top-0 bg-white z-50">
            {/* Logo Section */}
            <Link to="/" className="text-xl font-bold cursor-pointer">
                Life<span className="text-blue-500">Threads</span>
            </Link>

            {/* Show Search Bar only on Home Page */}
            {location.pathname === '/' && (
                <div className="hidden md:flex gap-4">
                    <input
                        type="text"
                        className="border rounded-full px-2 py-1"
                        placeholder="Search..."
                    />
                </div>
            )}

            {/* Navigation Links and Avatar */}
            <div className="flex items-center gap-4">
                {/* Desktop Navigation Links */}
                <div className="hidden md:flex gap-6">
                    <Link to="/" className="hover:text-blue-500 cursor-pointer">Home</Link>
                    <Link to="/blogs" className="hover:text-blue-500 cursor-pointer">Blog</Link>
                    <Link to="/categories" className="hover:text-blue-500 cursor-pointer">Categories</Link>
                    
                    {/* Show Login Link only if User is Not Logged In */}
                    {!isLoggedIn && (
                        <Link to="/auth" className="hover:text-blue-500 cursor-pointer">Login</Link>
                    )}
                </div>

                {/* Avatar for Dropdown Menu if logged in */}
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
                                {/* Display Links in Avatar Dropdown */}
                                <Link to="/" className="block px-4 py-2 hover:bg-gray-100 md:hidden cursor-pointer">Home</Link>
                                <Link to="/blogs" className="block px-4 py-2 hover:bg-gray-100 md:hidden cursor-pointer">Blog</Link>
                                <Link to="/categories" className="block px-4 py-2 hover:bg-gray-100 md:hidden cursor-pointer">Categories</Link>

                                {/* Common Links for Profile Actions */}
                                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</Link>
                                <Link to="/createPost" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Create Blog</Link>
                                <Link to="/authorblogs" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Your Blogs</Link>
                                <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Dashboard</Link>
                                
                                {/* Logout Action */}
                                <Link
                                    to="/"
                                    onClick={() => dispatch(logout())}
                                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    LogOut
                                </Link>

                                {/* Light/Dark Mode Toggle */}
                                <button
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex justify-start items-center cursor-pointer"
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
