import React from 'react';
// Import CTA image
import homeCtaImg from '../assets/home_cta.jpg';

const CTASection = () => {
  return (
    <section className="bg-gray-50 py-24 px-6 font-poppins relative overflow-hidden">
      {/* Subtle Background Pattern/Shape - Keeping the soft breathing pulse for depth */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 rounded-full mix-blend-overlay -translate-y-1/2 translate-x-1/3 pointer-events-none animate-pulse" style={{ animationDuration: '6s' }}></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1F628D]/20 rounded-full mix-blend-overlay translate-y-1/3 -translate-x-1/4 pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}></div>

      {/* Main CTA Card - Wrapped in group/cta for unified hover effects */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row z-10 relative group/cta transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(31,98,141,0.4)] cursor-default">
        
        {/* Left Side: Text and Actions */}
        <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center relative z-10 bg-white">
          <div className="flex items-center gap-3 mb-4">
            {/* Stretching line on hover */}
            <div className="w-8 h-1 bg-[#FF914C] transition-all duration-500 group-hover/cta:w-16"></div>
            <h3 className="font-anton text-[#FF914C] tracking-widest text-sm md:text-base uppercase transition-transform duration-500 group-hover/cta:translate-x-1">
              Your Journey Starts Here
            </h3>
          </div>
          
          {/* Extrabold applied here */}
          <h2 className="text-4xl md:text-5xl font-extrabold font-anton text-[#1F628D] mb-6 uppercase tracking-wide leading-tight">
            Ready to Get Moving?
          </h2>
          
          <p className="text-gray-600 text-lg mb-10 font-medium leading-relaxed transition-opacity duration-300">
            Whether you need a premium bus for a corporate trip, professional driving lessons, or emergency towing, Krossover Transport Agency is just a click away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary Action: Go to Booking */}
            <a 
              href="/book" 
              className="group/btn1 relative overflow-hidden bg-[#1F628D] text-white font-extrabold py-4 px-8 rounded shadow-lg transition-all duration-300 text-center flex-1"
            >
              {/* Darker blue sweep from the left */}
              <div className="absolute inset-0 bg-[#154666] -translate-x-[100%] transition-transform duration-300 ease-in-out group-hover/btn1:translate-x-0 z-0"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Book a Service Now!
                <svg className="w-5 h-5 transform translate-x-0 opacity-0 group-hover/btn1:translate-x-1 group-hover/btn1:opacity-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
            
            {/* Secondary Action: Direct WhatsApp */}
            <a 
              href="https://wa.me/233548237732" 
              target="_blank" 
              rel="noreferrer" 
              className="group/btn2 relative overflow-hidden bg-[#25D366] text-white font-extrabold py-4 px-8 rounded shadow-lg transition-all duration-300 flex items-center justify-center gap-2 flex-1"
            >
              {/* Darker green sweep from the bottom */}
              <div className="absolute inset-0 bg-[#128C7E] translate-y-[100%] transition-transform duration-300 ease-in-out group-hover/btn2:translate-y-0 z-0"></div>
              
              <span className="relative z-10 flex items-center gap-2">
                {/* Wiggling icon on hover */}
                <svg className="w-6 h-6 fill-current group-hover/btn2:animate-bounce" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </span>
            </a>
          </div>
        </div>

        {/* Right Side: Visual/Image Container */}
        <div className="lg:w-1/2 relative h-[300px] lg:h-auto overflow-hidden">
          {/* 2. Use the imported variable here instead of the string path */}
          <img 
            src={homeCtaImg} 
            alt="Start Your Journey" 
            className="w-full h-full object-cover transform scale-100 group-hover/cta:scale-110 transition-transform duration-1000 ease-in-out"
          />
          {/* Subtle inner shadow overlay to blend it with the card */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-white/10 z-10 pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};

export default CTASection;