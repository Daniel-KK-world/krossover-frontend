import React from 'react';

const Hero = () => {
  return (
    <section 
      /* Applied the viewport-fit fixes: reduced py-20 to py-10, changed min-h-[80vh] to h-[calc(100vh-90px)] */
      className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between px-8 py-10 h-[calc(100vh-90px)] bg-cover bg-center"
      style={{ backgroundImage: "url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop)" }}
    >
      
      {/* UPDATE 1: Swapped the white overlay for a dark slate/black overlay for high contrast */}
      <div className="absolute inset-0 bg-gray-900/75 z-0"></div>
      
      {/* Left Text Content */}
      <div className="max-w-2xl relative z-10 md:w-1/2">
        {/* UPDATE 2: Changed text to white/gray-200 and added font-extrabold to make it punchy */}
        <h1 className="text-5xl md:text-6xl font-anton font-extrabold text-white mb-4 leading-tight uppercase drop-shadow-lg">
          Your Safety and Comfort, <br />
          <span className="text-gray-300">Our Style.</span>
        </h1>
        
        {/* UPDATE 3: Changed paragraph text to a light gray to pop against the dark background */}
        <p className="text-base md:text-lg font-poppins text-gray-200 mb-8 leading-relaxed font-medium">
          The premier source of excellence for comprehensive transportation solutions. From reliable bus hiring and driving school services to mechanics and towing.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 font-poppins">
          <a href="/bookings" className="bg-krossover-orange hover:opacity-90 text-white text-lg px-8 py-3 rounded-md font-semibold shadow-lg transition text-center flex items-center justify-center">
            Book a Service
          </a>
          <a href="/services" className="bg-white hover:bg-gray-100 text-krossover-blue text-lg px-8 py-3 rounded-md font-semibold shadow-sm transition text-center flex items-center justify-center border border-transparent">
            Explore Fleet
          </a>
        </div>
      </div>

      {/* Right Visual Content - Keeping the full bus exactly as you wanted it! */}
      <div className="md:w-1/2 mt-8 md:mt-0 relative w-full h-[300px] md:h-[450px] z-10">
        <div className="absolute inset-0 animate-drive-in flex items-center justify-center">
          <img 
            src="src/assets/krossoverbus.png" 
            alt="Krossover Bus" 
            className="w-full max-w-lg object-contain drop-shadow-2xl"
          />
        </div>
      </div>
      
    </section>
  );
};

export default Hero;