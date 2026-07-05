import React from 'react';
// 1. Import the local image bundler hashes and includes it in production
import aboutKrossoverImg from '../assets/aboutkrossover.JPG';

const AboutSnippet = () => {
  return (
    <section className="py-20 px-6 bg-white font-poppins relative overflow-hidden">
      {/* Subtle Background Accent to kill the 'flat white' dead space */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14 relative z-10">
        
        {/* Left Side: Text Content */}
        {/* Wrapped in a group so the whole text block reacts subtly when hovered */}
        <div className="lg:w-1/2 space-y-6 group/text">
          
          {/* Animated Subtitle */}
          <div className="flex items-center gap-4">
            {/* The orange line extends smoothly on hover */}
            <div className="w-12 h-1 bg-[#FF914C] transition-all duration-500 group-hover/text:w-20"></div>
            <h3 className="font-anton text-[#FF914C] tracking-widest text-lg uppercase transition-transform duration-500 group-hover/text:translate-x-2">
              Who We Are
            </h3>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold font-anton text-[#1F628D] leading-tight uppercase relative inline-block">
            The Source of Excellence in Transportation
          </h2>
          
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            With a seasoned team of professionals, we provide the most comprehensive and efficient transportation solutions and consultancy across the globe. As your best bet, we provide premium bus hiring, driving school services, and train seasoned professionals.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We take away the stress of getting your driver's license, renewing it, or replacing it when lost. We also provide dedicated mechanics and vehicle towing services.
          </p>
          
          {/* High-End Interactive Button */}
          <div className="pt-4">
            <a 
              href="/about" 
              className="group/btn relative inline-flex items-center justify-center gap-3 bg-[#1F628D] text-white text-lg font-semibold py-3 px-8 rounded shadow-[0_8px_30px_rgb(31,98,141,0.2)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(255,145,76,0.4)] hover:-translate-y-1"
            >
              {/* Background Fill Sweep (Orange wave sweeps up from the bottom) */}
              <div className="absolute inset-0 bg-[#FF914C] translate-y-[100%] transition-transform duration-300 group-hover/btn:translate-y-0 z-0"></div>
              
              <span className="relative z-10 transition-transform duration-300 group-hover/btn:-translate-x-1">
                Learn More About Us
              </span>
              
              {/* Sliding Arrow that appears on hover */}
              <svg className="w-5 h-5 relative z-10 opacity-0 -translate-x-4 transition-all duration-300 group-hover/btn:opacity-100 group-hover/btn:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side: Interactive Visual */}
        {/* The 'group/image' class triggers all the image hover effects simultaneously */}
        <div className="lg:w-1/2 w-full relative mt-8 lg:mt-0 z-10 group/img cursor-pointer">
          
          {/* The Glowing Border Effect: A blurred gradient that intensifies behind the image on hover */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#FF914C] to-[#1F628D] rounded-2xl blur-lg opacity-20 transition-opacity duration-500 group-hover/img:opacity-70 hidden md:block z-0"></div>
          
          {/* The Parallax Frame: The orange border pushes further back and left when hovered */}
          <div className="absolute top-6 -left-6 w-full h-full border-4 border-[#FF914C] rounded-lg -z-10 hidden md:block transition-all duration-500 ease-out group-hover/img:top-10 group-hover/img:-left-10 group-hover/img:border-[#1F628D]"></div>
          
          {/* Main Image Container */}
          <div className="relative overflow-hidden rounded-lg shadow-2xl z-10 border border-white/10">
            {/* 2. Use the imported image variable here */}
            <img 
              src={aboutKrossoverImg} 
              alt="Krossover Transport Professional Fleet" 
              className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
            />
            {/* A subtle dark tint that fades away to reveal the bright image on hover */}
            <div className="absolute inset-0 bg-[#1F628D]/10 transition-colors duration-500 group-hover/img:bg-transparent"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutSnippet;