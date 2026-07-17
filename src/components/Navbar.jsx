// components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();  // ← Added user
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate('/');
  };

  const getInitials = () => {
    const name = user?.name || localStorage.getItem('userName') || 'User';
    return name.charAt(0).toUpperCase();
  };

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
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="Logo" className="h-12 md:h-14 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center space-x-10">
          <ul className="flex space-x-8 text-gray-700 font-semibold text-sm">
            <li><Link to="/" className="hover:text-krossover-orange">Home</Link></li>
            <li><Link to="/about" className="hover:text-krossover-orange">About Us</Link></li>
            <li><Link to="/services" className="hover:text-krossover-orange">Our Services</Link></li>
            <li>
              {/* ✅ REMOVED manual auth check - let ProtectedRoute handle it */}
              <Link to="/bookings" className="hover:text-krossover-orange">
                My Bookings
              </Link>
            </li>
          </ul>

          <div className="flex items-center border-l-2 border-gray-200 pl-6">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="h-10 w-10 rounded-full bg-krossover-blue text-white font-bold flex items-center justify-center shadow-md hover:ring-2 hover:ring-krossover-orange transition"
                >
                  {getInitials()}
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-xl py-2">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-800">
                        {user?.name || localStorage.getItem('userName') || 'User'}
                      </p>
                      <p className="text-xs text-gray-500">
                        {user?.email || localStorage.getItem('userEmail') || ''}
                      </p>
                    </div>

                    <Link
                      to="/change-password"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      🔒 Change Password
                    </Link>

                    <Link
                      to="/bookings"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      📋 My Bookings
                    </Link>

                    <hr className="my-1 border-gray-100" />

                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-semibold"
                    >
                      🚪 Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-x-4">
                <Link to="/login" className="text-krossover-blue text-sm font-bold hover:text-krossover-orange">
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="bg-krossover-orange text-white text-sm px-5 py-1.5 rounded-md font-semibold shadow-sm hover:bg-krossover-blue transition"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={toggleMenu}>
          <svg className="w-8 h-8 text-krossover-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <ul className="flex flex-col text-gray-700 font-semibold">
            <li className="border-b border-gray-50">
              <Link to="/" onClick={toggleMenu} className="block px-8 py-4 hover:bg-gray-50">
                Home
              </Link>
            </li>
            <li className="border-b border-gray-50">
              <Link to="/about" onClick={toggleMenu} className="block px-8 py-4 hover:bg-gray-50">
                About Us
              </Link>
            </li>
            <li className="border-b border-gray-50">
              <Link to="/services" onClick={toggleMenu} className="block px-8 py-4 hover:bg-gray-50">
                Our Services
              </Link>
            </li>
            <li className="border-b border-gray-50">
              {/* ✅ REMOVED manual auth check - let ProtectedRoute handle it */}
              <Link 
                to="/bookings" 
                onClick={toggleMenu}
                className="block px-8 py-4 hover:bg-gray-50"
              >
                My Bookings
              </Link>
            </li>

            {isAuthenticated ? (
              <>
                <li className="border-b border-gray-50">
                  <Link to="/change-password" onClick={toggleMenu} className="block px-8 py-4 hover:bg-gray-50">
                    🔒 Change Password
                  </Link>
                </li>
                <li className="border-b border-gray-50">
                  <button
                    onClick={() => {
                      handleLogout();
                      toggleMenu();
                    }}
                    className="block w-full text-left px-8 py-4 text-red-600 font-bold hover:bg-red-50"
                  >
                    🚪 Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="border-b border-gray-50">
                  <Link to="/login" onClick={toggleMenu} className="block px-8 py-4 hover:bg-gray-50">
                    Log In
                  </Link>
                </li>
                <li className="border-b border-gray-50">
                  <Link to="/register" onClick={toggleMenu} className="block px-8 py-4 bg-krossover-orange text-white font-bold hover:bg-krossover-blue">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;