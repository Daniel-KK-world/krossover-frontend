import React from 'react';
import { Link } from 'react-router-dom';

const MiniCTA = () => {
  return (
    <section className="bg-white text-gray-800 py-20 px-6 text-center font-poppins relative border-t border-gray-100">
      <div className="max-w-3xl mx-auto space-y-6">
        <h3 className="text-3xl md:text-4xl font-extrabold tracking-wide uppercase text-[#1F628D]">
          Need a Customized Logistic Package?
        </h3>
        <p className="text-gray-600 text-base max-w-xl mx-auto leading-relaxed">
          For long-term commercial leasing, corporate staff school packages, or multi-vehicle towing service accounts, contact our administrative panel directly.
        </p>
        
<div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
          {/* Primary Action: Now Solid Blue to pop against the white background */}
          <Link 
            to="/book" 
            className="group/btn relative inline-flex items-center justify-center bg-[#1F628D] hover:bg-[#154a6b] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 overflow-hidden"
          >
            Book Instant Service
          </Link>
          
          {/* Secondary Action: Now Orange Outline to maintain brand balance */}
          <a 
            href="mailto:krossovertransport3@gmail.com" 
            className="border-2 border-[#FF914C] text-[#FF914C] hover:bg-[#FF914C] hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
          >
            Contact Support Panel
          </a>
        </div>
      </div>
    </section>
  );
};

export default MiniCTA;