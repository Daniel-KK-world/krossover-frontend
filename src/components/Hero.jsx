// src/components/Hero.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // ← ADD THIS IMPORT
import krossoverBusImg from '../assets/krossoverbus.png';

const Hero = () => {
  return (
    <section 
      className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between px-8 py-10 h-[calc(100vh-90px)] bg-cover bg-center"
      style={{ backgroundImage: "url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop)" }}
    >
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gray-900/75 z-0"></div>
      
      {/* Left Text Content */}
      <div className="max-w-2xl relative z-10 md:w-1/2">
        <h1 className="text-5xl md:text-6xl font-anton font-extrabold text-white mb-4 leading-tight uppercase drop-shadow-lg">
          Your Safety and Comfort, <br />
          <span className="text-gray-300">Our Style.</span>
        </h1>
        
        <p className="text-base md:text-lg font-poppins text-gray-200 mb-8 leading-relaxed font-medium">
          The premier source of excellence for comprehensive transportation solutions. From reliable bus hiring and driving school services to mechanics and towing.
        </p>

        {/* ─── CTA BUTTONS ─── */}
        <div className="flex flex-col sm:flex-row gap-4 font-poppins">
          {/* BOOK NOW → Goes to Enquiry Form */}
          <Link 
            to="/enquiry" 
            className="bg-krossover-orange hover:bg-krossover-blue text-white text-lg px-8 py-3 rounded-md font-semibold shadow-lg transition text-center flex items-center justify-center"
          >
            Book a Service
          </Link>
          
          {/* EXPLORE FLEET → Goes to All Cars Page */}
          <Link 
            to="/all-cars" 
            className="bg-krossover-blue hover:bg-krossover-orange text-white text-lg px-8 py-3 rounded-md font-semibold shadow-sm transition text-center flex items-center justify-center border border-transparent"
          >
            Explore Fleet
          </Link>
        </div>
      </div>

      {/* Right Visual Content */}
      <div className="md:w-1/2 mt-8 md:mt-0 relative w-full h-[300px] md:h-[450px] z-10">
        <div className="absolute inset-0 animate-drive-in flex items-center justify-center">
          <img 
            src={krossoverBusImg} 
            alt="Krossover Bus" 
            className="w-full max-w-lg object-contain drop-shadow-2xl"
          />
        </div>
      </div>
      
    </section>
  );
};

export default Hero;