import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Portfolio
                    </h1>
                    <div className="space-x-6">
                        <a href="#profile" className="hover:text-blue-600 transition-colors duration-200">Profile</a>
                        <a href="#projects" className="hover:text-blue-600 transition-colors duration-200">Projects</a>
                        <a href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;