import React, { useState, useEffect } from 'react'; // 1. Added useEffect
import { Link, useNavigate } from 'react-router-dom'; // 2. Added useNavigate

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 3. State to track login
  const navigate = useNavigate();

  // 4. Check for token on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []); 

  const toggleMenu = () => setIsOpen(!isOpen);

  // 5. Logout handler
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/'); 
  };

  return (
    <header className="w-full sticky top-0 z-50 flex flex-col shadow-md bg-white relative">
      
      {/* 1. Top Orange Line */}
      <div className="h-1.5 w-full bg-krossover-orange"></div>

      {/* 2. Contact Info Bar */}
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
        
        <Link to="/" className="flex items-center cursor-pointer hover:opacity-90 transition">
          <img 
            src="src/assets/logo.png" 
            alt="Krossover Transport Agency Logo" 
            className="h-12 md:h-14 w-auto object-contain py-0.5" 
          />
        </Link>

        {/* Desktop Links and Auth Wrapper */}
        <div className="hidden lg:flex items-center space-x-10">
          <ul className="flex space-x-8 text-gray-700 font-poppins font-semibold text-sm">
            <li className="hover:text-krossover-orange transition cursor-pointer"><Link to="/">Home</Link></li>
            <li className="hover:text-krossover-orange transition cursor-pointer"><Link to="/about">About Us</Link></li>
            <li className="hover:text-krossover-orange transition cursor-pointer"><Link to="/services">Our Services</Link></li>
            <li className="hover:text-krossover-orange transition cursor-pointer"><Link to="/bookings">My Bookings</Link></li>
          </ul>

          {/* 6. CONDITIONAL RENDERING for Auth Buttons */}
          <div className="flex space-x-4 items-center font-poppins border-l-2 border-gray-200 pl-6">
            {isLoggedIn ? (
              <button onClick={handleLogout} className="text-krossover-blue text-sm font-bold hover:text-red-600 transition">
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="text-krossover-blue text-sm font-bold hover:text-krossover-orange transition">Log In</Link>
                <Link to="/register" className="bg-krossover-orange hover:bg-[#e07b38] text-white text-sm px-5 py-1.5 rounded-md font-semibold transition shadow-sm">Register</Link>
              </>
            )}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 z-50">
          <ul className="flex flex-col text-gray-700 font-poppins font-semibold text-base">
            <li className="border-b border-gray-50"><Link to="/" onClick={toggleMenu} className="block px-8 py-4">Home</Link></li>
            <li className="border-b border-gray-50"><Link to="/about" onClick={toggleMenu} className="block px-8 py-4">About Us</Link></li>
            <li className="border-b border-gray-50"><Link to="/services" onClick={toggleMenu} className="block px-8 py-4">Our Services</Link></li>
            <li className="border-b border-gray-50"><Link to="/bookings" onClick={toggleMenu} className="block px-8 py-4">My Bookings</Link></li>
            
            <li className="px-8 py-6 bg-gray-50 flex flex-col space-y-4">
              {isLoggedIn ? (
                <button onClick={handleLogout} className="w-full text-center text-red-600 border-2 border-red-600 py-2.5 rounded-md font-bold">Logout</button>
              ) : (
                <>
                  <Link to="/login" onClick={toggleMenu} className="w-full text-center text-krossover-blue border-2 border-krossover-blue text-sm font-bold py-2.5 rounded-md hover:bg-krossover-blue hover:text-white transition">
                    Log In
                  </Link>
                  <Link to="/register" onClick={toggleMenu} className="w-full text-center bg-krossover-orange hover:bg-[#e07b38] text-white text-sm py-2.5 rounded-md font-semibold transition shadow-sm">
                    Register
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;