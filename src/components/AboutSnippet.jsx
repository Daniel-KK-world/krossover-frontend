import React from 'react';

const AboutSnippet = () => {
  return (
    <section className="py-20 px-6 bg-white font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 space-y-6">
          {/* Section Subtitle with Orange Accent */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-1 bg-[#FF914C]"></div>
            <h3 className="font-anton text-[#FF914C] tracking-widest text-lg uppercase">
              Who We Are
            </h3>
          </div>
          
          {/* Main Section Header */}
          <h2 className="text-4xl md:text-5xl font-anton text-[#1F628D] leading-tight uppercase">
            The Source of Excellence in Transportation
          </h2>
          
          {/* Body Text pulled directly from their brand doc */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            With a seasoned team of professionals, we provide the most comprehensive and efficient transportation solutions and consultancy across the globe. As your best bet, we provide premium bus hiring, driving school services, and train seasoned professionals.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We take away the stress of getting your driver's license, renewing it, or replacing it when lost. We also provide dedicated mechanics and vehicle towing services.
          </p>
          
          {/* Call to Action - Changed from <Link> to a standard <a> tag */}
          <div className="pt-4">
            <a 
              href="/about" 
              className="inline-block bg-[#1F628D] hover:bg-[#154666] text-white text-lg font-semibold py-3 px-8 rounded shadow-lg transition-colors duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </div>

        {/* Right Side: Visual/Image */}
        <div className="lg:w-1/2 w-full relative mt-8 lg:mt-0 z-10">
          {/* Decorative orange border box positioned behind the image */}
          <div className="absolute top-6 -left-6 w-full h-full border-4 border-[#FF914C] rounded-lg -z-10 hidden md:block"></div>
          
          {/* Main Image */}
          <img 
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop" 
            alt="Krossover Transport Professional Fleet" 
            className="w-full h-[350px] md:h-[450px] object-cover rounded-lg shadow-2xl"
          />
        </div>
        
      </div>
    </section>
  );
};

export default AboutSnippet;