import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-50 flex flex-col shadow-md">
      
      {/* 1. Top Orange Line */}
      <div className="h-1.5 w-full bg-krossover-orange"></div>

      {/* 2. Contact Info Bar - Reduced from py-2 to py-1 */}
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

      {/* 3. Main Navigation - Reduced from py-3 to py-2 */}
      <nav className="flex justify-between items-center px-8 py-2 bg-white">
        
        {/* Brand Logo Area - Reduced text-4xl to text-3xl */}
        <div className="flex flex-col items-start cursor-pointer">
          <div className="leading-none">
            <span className="text-3xl font-anton text-krossover-blue tracking-wide">KROSSOVER</span>
          </div>
          <span className="text-[10px] font-poppins text-krossover-orange font-extrabold tracking-widest uppercase leading-tight mb-0.5">
            Transport Agency
          </span>
          <div className="bg-krossover-blue text-white text-[9px] italic px-2.5 py-0.5 rounded-full font-poppins">
            Your Safety and Comfort, Our Style
          </div>
        </div>

        {/* Links and Auth Wrapper */}
        <div className="flex items-center space-x-10">
          <ul className="hidden lg:flex space-x-8 text-gray-700 font-poppins font-semibold text-sm">
            <li className="hover:text-krossover-orange transition cursor-pointer"><a href="/">Home</a></li>
            <li className="hover:text-krossover-orange transition cursor-pointer"><a href="/services">Our Services</a></li>
            <li className="hover:text-krossover-orange transition cursor-pointer"><a href="/bookings">My Bookings</a></li>
          </ul>

          <div className="flex space-x-4 items-center font-poppins border-l-2 border-gray-200 pl-6">
            <a href="/login" className="text-krossover-blue text-sm font-bold hover:text-krossover-orange transition">Log In</a>
            <a href="/register" className="bg-krossover-orange hover:bg-[#e07b38] text-white text-sm px-5 py-1.5 rounded-md font-semibold transition shadow-sm">Register</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;