import React, { useState, useEffect } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

    // Close both menus on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.navbar') && !event.target.closest('.category-dropdown')) {
                setIsMenuOpen(false);
                setIsCategoryOpen(false);
            }
        };
        if (isMenuOpen || isCategoryOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen, isCategoryOpen]);

    return (
        <div className="navbar flex justify-between items-center px-4 py-2 shadow-md sticky top-0 bg-white">
            {/* Logo Section */}
            <Link  to='/' className="text-xl font-bold cursor-pointer">
                Life<span className="text-blue-500">Threads</span>
            </Link>

            {/* Search bar   */}
            <div className="hidden md:flex gap-4">
                <input
                    type="text"
                    className="border rounded-full px-2 py-1 "
                    placeholder="Search..."
                />
            </div>

            {/* Page Link Section - Desktop & Tablet */}
            <div className="hidden md:flex justify-center items-center gap-10">
                <ul className="flex gap-6">
                    <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
                    <li><Link to="/blogs" className="hover:text-blue-500">Blog</Link></li>
                    <li><Link to="/categories" className="hover:text-blue-500">Categories</Link></li>
                    <li><Link to="/profile" className="hover:text-blue-500">Profile</Link></li>
                    <li><Link to="/createPost" className="hover:text-blue-500">Create</Link></li>
                </ul>
                {/* Light/Dark button - Desktop & Tablet */}
                <button
                    className="px-3 py-1 border rounded hover:bg-gray-200"
                    onClick={() => alert('Toggle Light/Dark Mode')}
                >
                    🌗
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button
                aria-label="Toggle menu"
                className="md:hidden flex items-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <IoMdMenu size={24} />
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-10 left-0 w-full bg-white shadow-md md:hidden transition-transform transform duration-300 ">
                    <ul className="flex flex-col items-center gap-4 p-4">
                        <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
                        <li><Link to="/blogs" className="hover:text-blue-500">Blog</Link></li>
                        <li><Link to="/categories" className="hover:text-blue-500">Categories</Link></li>
                        <li><Link to="/profile" className="hover:text-blue-500">Profile</Link></li>
                        <li><Link to="/createPost" className="hover:text-blue-500">Create</Link></li>
                        <li>
                            <button
                                className="px-3 py-1 border rounded hover:bg-gray-200"
                                onClick={() => alert('Toggle Light/Dark Mode')}
                            >
                                🌗
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
