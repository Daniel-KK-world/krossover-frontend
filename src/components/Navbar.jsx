import React, { useState } from 'react';

const Navbar = () => {
  // State to manage the mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full sticky top-0 z-50 flex flex-col shadow-md bg-white relative">
      
      {/* 1. Top Orange Line */}
      <div className="h-1.5 w-full bg-krossover-orange"></div>

      {/* 2. Contact Info Bar - Hidden on mobile, visible on medium+ screens */}
      <div className="hidden md:flex justify-end items-center bg-krossover-blue text-white py-1 px-8 font-poppins text-xs space-x-8">
        <div className="flex items-center space-x-2">
          <span className="text-krossover-orange">✉</span>
          <span>krossovertransport3@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-krossover-orange">📞</span>
          <span className="font-semibold">055 232 0210 / 050 587 2461</span>
        </div>
      </div>

      {/* 3. Main Navigation */}
      <nav className="flex justify-between items-center px-6 md:px-8 py-3 bg-white">
        
        {/* Brand Logo Area - Now a clickable link to Home */}
        <a href="/" className="flex flex-col items-start cursor-pointer hover:opacity-90 transition">
          <div className="leading-none">
            <span className="text-3xl font-anton text-krossover-blue tracking-wide">KROSSOVER</span>
          </div>
          <span className="text-[10px] font-poppins text-krossover-orange font-extrabold tracking-widest uppercase leading-tight mb-0.5">
            Transport Agency
          </span>
          <div className="bg-krossover-blue text-white text-[9px] italic px-2.5 py-0.5 rounded-full font-poppins">
            Your Safety and Comfort, Our Style
          </div>
        </a>

        {/* Desktop Links and Auth Wrapper */}
        <div className="hidden lg:flex items-center space-x-10">
          <ul className="flex space-x-8 text-gray-700 font-poppins font-semibold text-sm">
            <li className="hover:text-krossover-orange transition cursor-pointer"><a href="/">Home</a></li>
            <li className="hover:text-krossover-orange transition cursor-pointer"><a href="/about">About Us</a></li>
            <li className="hover:text-krossover-orange transition cursor-pointer"><a href="/services">Our Services</a></li>
            <li className="hover:text-krossover-orange transition cursor-pointer"><a href="/bookings">My Bookings</a></li>
          </ul>

          <div className="flex space-x-4 items-center font-poppins border-l-2 border-gray-200 pl-6">
            <a href="/login" className="text-krossover-blue text-sm font-bold hover:text-krossover-orange transition">Log In</a>
            <a href="/register" className="bg-krossover-orange hover:bg-[#e07b38] text-white text-sm px-5 py-1.5 rounded-md font-semibold transition shadow-sm">Register</a>
          </div>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <button 
          className="lg:hidden text-krossover-blue focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              // X icon when open
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger icon when closed
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 z-50">
          <ul className="flex flex-col text-gray-700 font-poppins font-semibold text-base">
            <li className="border-b border-gray-50">
              <a href="/" className="block px-8 py-4 hover:bg-gray-50 hover:text-krossover-orange transition">Home</a>
            </li>
            <li className="border-b border-gray-50">
              <a href="/about" className="block px-8 py-4 hover:bg-gray-50 hover:text-krossover-orange transition">About Us</a>
            </li>
            <li className="border-b border-gray-50">
              <a href="/services" className="block px-8 py-4 hover:bg-gray-50 hover:text-krossover-orange transition">Our Services</a>
            </li>
            <li className="border-b border-gray-50">
              <a href="/bookings" className="block px-8 py-4 hover:bg-gray-50 hover:text-krossover-orange transition">My Bookings</a>
            </li>
            
            {/* Mobile Auth Buttons */}
            <li className="px-8 py-6 bg-gray-50 flex flex-col space-y-4">
              <a href="/login" className="w-full text-center text-krossover-blue border-2 border-krossover-blue text-sm font-bold py-2.5 rounded-md hover:bg-krossover-blue hover:text-white transition">
                Log In
              </a>
              <a href="/register" className="w-full text-center bg-krossover-orange hover:bg-[#e07b38] text-white text-sm py-2.5 rounded-md font-semibold transition shadow-sm">
                Register
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;