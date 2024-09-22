"use client"
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white shadow-lg fixed w-full z-10">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-900">
                    <a href="#home">MyPortfolio</a>
                </div>

                {/* Navigation (Desktop) */}
                <nav className="hidden md:flex space-x-8 text-gray-700">
                    <a href="#about" className="hover:text-gray-900">About</a>
                    <a href="#projects" className="hover:text-gray-900">Projects</a>
                    <a href="#skills" className="hover:text-gray-900">Skills</a>
                    <a href="#contact" className="hover:text-gray-900">Contact</a>
                </nav>

                {/* Contact Button (Desktop) */}
                <div className="hidden md:flex">
                    <a
                        href="#contact"
                        className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
                    >
                        Get in Touch
                    </a>
                </div>

                {/* Hamburger Menu (Mobile) */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-700 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg`}>
                <nav className="flex flex-col space-y-4 py-4 px-6 text-gray-700">
                    <a href="#about" className="hover:text-gray-900">About</a>
                    <a href="#projects" className="hover:text-gray-900">Projects</a>
                    <a href="#skills" className="hover:text-gray-900">Skills</a>
                    <a href="#contact" className="hover:text-gray-900">Contact</a>
                    <a
                        href="#contact"
                        className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 text-center"
                    >
                        Get in Touch
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
