import React, { useState } from 'react';
import { CiSearch, CiShoppingCart } from 'react-icons/ci';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Left Side Links */}
        <div className="font-poppins hidden lg:flex space-x-4 text-sm font-light uppercase">
          <a href="#" className="text-[#242424] hover:text-blue-500">
            Cookware
          </a>
          <a href="#" className="text-[#242424] hover:text-blue-500">
            Drinkware
          </a>
          <a href="#" className="text-[#242424] hover:text-blue-500">
            Serveware
          </a>
          <a href="#" className="text-[#242424] hover:text-blue-500">
            Gifting
          </a>
        </div>

        {/* Middle Logo/Image */}
        <div className="flex  justify-start sm:justify-center flex-grow lg:flex-grow-0">
          <img
            src={require('./Dhaatu.png')}
            alt="Logo"
            className="h-8 w-auto"
          />
        </div>

        {/* Right Side Links and Icons */}
        <div className="font-poppins hidden lg:flex space-x-4 text-sm font-light uppercase">
          <a href="#" className="text-[#242424] hover:text-blue-500">
            Home
          </a>
          <a href="#" className="text-[#242424] hover:text-blue-500">
            About
          </a>
          <a href="#" className="text-[#242424] hover:text-blue-500">
            Contact
          </a>
          <button className="text-[#242424] hover:text-blue-500">
            <CiSearch size={20} />
          </button>
          <button className="text-[#242424] hover:text-blue-500">
            <CiShoppingCart size={20} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-[#242424] hover:text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 py-2 space-y-1 font-poppins text-sm uppercase">
          <a href="#" className="block text-[#242424] hover:text-blue-500">
            Cookware
          </a>
          <a href="#" className="block text-[#242424] hover:text-blue-500">
            Drinkware
          </a>
          <a href="#" className="block text-[#242424] hover:text-blue-500">
            Serveware
          </a>
          <a href="#" className="block text-[#242424] hover:text-blue-500">
            Gifting
          </a>
          <a href="#" className="block text-[#242424] hover:text-blue-500">
            Home
          </a>
          <a href="#" className="block text-[#242424] hover:text-blue-500">
            About
          </a>
          <a href="#" className="block text-[#242424] hover:text-blue-500">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
