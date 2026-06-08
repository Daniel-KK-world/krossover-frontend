import React from 'react';

export default function ServicesHero() {
  return (
    <section className="relative text-white py-36 px-6 md:px-12 text-center overflow-hidden z-0">
      
      {/* High-Visibility Background Image focused on fleet/logistics */}
      <div 
        className="absolute inset-0 z-[-2] opacity-85 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop')" }} 
      ></div>

      {/* Balanced Overlay for Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1F628D]/80 via-[#1F628D]/65 to-[#1F628D]/80 z-[-1]"></div>

      {/* FIXED: Added bg-[size:20px_20px] and updated SVG base64 for optimized dot visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNyIvPjwvc3ZnPg==')] z-[-1]"></div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        
        <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#FF914C] font-poppins text-xs font-bold tracking-widest uppercase mb-8 shadow-md">
          Professional Solutions
        </span>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 font-anton tracking-wide uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF914C] to-[#FF914C]">Services</span>
        </h1>
        
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-white font-poppins leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] font-medium">
          From corporate logistics to professional driver training, we deliver elite, structured transport solutions tailored to your absolute safety and comfort.
        </p>

        <div className="w-24 h-1.5 bg-[#FF914C] mt-12 rounded-full shadow-[0_0_15px_rgba(255,145,76,0.8)]"></div>
        
      </div>
    </section>
  );
}