// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services'; // ← IMPORT the services data

const Footer = () => {
  return (
    <footer className="bg-[#1F628D] text-white pt-16 pb-8 font-poppins mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Brand & Tagline */}
        <div>
          <h2 className="text-3xl font-anton tracking-wide mb-3">
            KROSSOVER <br />
            <span className="text-[1.2rem] text-[#FF914C] tracking-normal font-poppins font-bold">TRANSPORT AGENCY</span>
          </h2>
          <p className="text-gray-200 text-sm italic mb-4">
            "Your Safety and Comfort, Our Style"
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            The premier source of excellence for comprehensive transportation solutions and consultancy across the globe.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-anton text-xl mb-4 text-[#FF914C] tracking-wide">QUICK LINKS</h3>
          <ul className="space-y-3 text-sm text-gray-200">
            <li><Link to="/" className="hover:text-white hover:underline transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white hover:underline transition">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white hover:underline transition">Explore Fleet & Services</Link></li>
            <li><Link to="/booking" className="hover:text-white hover:underline transition">Book a Service</Link></li>
            <li><Link to="/login" className="hover:text-white hover:underline transition">Client Portal Login</Link></li>
          </ul>
        </div>

        {/* Column 3: Our Services - NOW WITH CLICKABLE LINKS */}
        <div>
          <h3 className="font-anton text-xl mb-4 text-[#FF914C] tracking-wide">OUR SERVICES</h3>
          <ul className="space-y-3 text-sm text-gray-200">
            {services.map((service) => (
              <li key={service.id}>
                <Link 
                  to={`/services/${service.slug}`}
                  className="hover:text-white hover:underline transition flex items-center gap-2"
                >
                  <span className="text-[#FF914C]">{service.icon}</span>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="font-anton text-xl mb-4 text-[#FF914C] tracking-wide">CONTACT US</h3>
          <div className="space-y-3 text-sm text-gray-200">
            <p className="font-semibold text-white">Mr. Appau Prince Kwame (CEO)</p>
            <p className="flex items-center gap-2">
              <span className="text-[#FF914C]">📞</span> +233 54 823 7732
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#FF914C]">📞</span> +233 50 587 2461
            </p>
            <p className="flex items-center gap-2">
              <span className="text-[#FF914C]">✉️</span> krossovertransport3@gmail.com
            </p>
            <p className="flex items-center gap-2 mt-2">
              <span className="text-[#FF914C]">📍</span> Ghana
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Socials */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-blue-800 flex flex-col md:flex-row items-center justify-between text-xs text-gray-300">
        <p>&copy; {new Date().getFullYear()} Krossover Transport Agency. All Rights Reserved.</p>
        
        {/* Social Media Links */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#FF914C] transition" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="#" className="hover:text-[#FF914C] transition" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="#" className="hover:text-[#FF914C] transition" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href="#" className="hover:text-[#FF914C] transition" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;