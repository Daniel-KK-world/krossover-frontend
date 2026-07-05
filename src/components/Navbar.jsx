import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// 1.  brand logo 
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const navigate = useNavigate();

  // FIX: Force Navbar to update whenever storage changes (login/logout)
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem('token'));
    };

    window.addEventListener('storage', handleStorageChange);
    // Also listen for custom event we'll dispatch in Login/Logout
    window.addEventListener('auth-change', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('auth-change', handleStorageChange);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    window.dispatchEvent(new Event("auth-change"));
    navigate('/');
  };

  const getInitials = (name) => name ? name.charAt(0).toUpperCase() : 'U';

  return (
    <header className="w-full sticky top-0 z-50 flex flex-col shadow-md bg-white font-poppins">
      <div className="h-1.5 w-full bg-krossover-orange"></div>

      <div className="hidden md:flex justify-end items-center bg-krossover-blue text-white py-1 px-8 text-xs space-x-8">
        <div className="flex items-center space-x-2">
          <span>✉ krossovertransport3@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>📞 055 232 0210 / 050 587 2461</span>
        </div>
      </div>

      <nav className="flex justify-between items-center px-6 md:px-8 py-3 bg-white">
        {/* 2. Use the imported variable inside the src attribute */}
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="Logo" className="h-12 md:h-14 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center space-x-10">
          <ul className="flex space-x-8 text-gray-700 font-semibold text-sm">
            <li><Link to="/" className="hover:text-krossover-orange">Home</Link></li>
            <li><Link to="/about" className="hover:text-krossover-orange">About Us</Link></li>
            <li><Link to="/services" className="hover:text-krossover-orange">Our Services</Link></li>
            <li><Link to="/bookings" className="hover:text-krossover-orange">My Bookings</Link></li>
          </ul>

          <div className="flex items-center border-l-2 border-gray-200 pl-6">
            {isLoggedIn ? (
              <div className="relative group">
                <button className="h-10 w-10 rounded-full bg-krossover-blue text-white font-bold flex items-center justify-center shadow-md hover:ring-2 hover:ring-krossover-orange transition">
                  {getInitials(localStorage.getItem('userName'))}
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                  <div className="py-2">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Profile</Link>
                    <Link to="/change-password" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Security</Link>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-bold">Logout</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-x-4">
                <Link to="/login" className="text-krossover-blue text-sm font-bold hover:text-krossover-orange">Log In</Link>
                <Link to="/register" className="bg-krossover-orange text-white text-sm px-5 py-1.5 rounded-md font-semibold shadow-sm">Register</Link>
              </div>
            )}
          </div>
        </div>

        <button className="lg:hidden" onClick={toggleMenu}>
          <svg className="w-8 h-8 text-krossover-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <ul className="flex flex-col text-gray-700 font-semibold">
            {['Home', 'About Us', 'Our Services', 'My Bookings'].map((item) => (
              <li key={item} className="border-b border-gray-50">
                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} onClick={toggleMenu} className="block px-8 py-4">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;