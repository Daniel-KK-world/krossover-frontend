import React from 'react';

const ServicesPreview = () => {
  // Array of the 6 core services outlined in the Krossover proposal
  const services = [
    {
      id: 1,
      title: "Bus Hiring Services",
      description: "Premium and reliable buses for corporate events, private trips, and commercial transport.",
      image: "src/assets/bus_hiring.JPG",
    },
    {
      id: 2,
      title: "Driving School",
      description: "Train with seasoned professionals. We also assist with license acquisition and renewals.",
      image: "src/assets/driving_school.JPG",
    },
    {
      id: 3,
      title: "Delivery Services",
      description: "Fast, secure, and efficient logistics and delivery solutions across the nation.",
      image: "src/assets/delivery.JPG",
    },
    {
      id: 4,
      title: "Travel & Tour",
      description: "Comprehensive travel management, ticketing, and tour consultancy across the globe.",
      image: "src\\assets\\travel_and_tour.JPG",
    },
    {
      id: 5,
      title: "Mechanics & Maintenance",
      description: "Expert vehicle diagnostics, routine maintenance, and full-scale mechanical repairs.",
      image: "src/assets/maintenance.JPG",
    },
    {
      id: 6,
      title: "Towing Services",
      description: "24/7 rapid response vehicle towing and roadside assistance when you need it most.",
      image: "src/assets/towing.JPG",
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50 font-poppins relative">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header - Wrapped in a group for subtle hover interactions */}
        <div className="text-center mb-16 group/header cursor-default">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#FF914C] transition-all duration-500 group-hover/header:w-16"></div>
            <h3 className="font-anton text-[#FF914C] tracking-widest text-lg uppercase transition-transform duration-500">
              What We Do
            </h3>
            <div className="w-10 h-1 bg-[#FF914C] transition-all duration-500 group-hover/header:w-16"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-anton text-[#1F628D] uppercase drop-shadow-sm">
            Our Core Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base transition-opacity duration-300">
            Providing comprehensive, efficient, and top-tier transportation solutions to meet all your personal and corporate needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-[0_20px_50px_rgb(31,98,141,0.12)] transition-all duration-500 group/card border border-gray-100 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Animated Top Gradient Line - Shoots across on hover */}
              <div className="absolute top-0 left-0 h-1.5 w-0 bg-gradient-to-r from-[#FF914C] to-[#1F628D] transition-all duration-700 ease-out group-hover/card:w-full z-20"></div>

              {/* Service Image */}
              <div className="h-56 overflow-hidden relative">
                {/* Cinematic Tint Overlay - Fades out on hover */}
                <div className="absolute inset-0 bg-[#1F628D]/20 mix-blend-multiply group-hover/card:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover/card:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Service Content */}
              <div className="p-8 flex flex-col flex-grow bg-white relative z-10">
                <h4 className="text-2xl font-extrabold font-anton text-[#1F628D] mb-3 uppercase group-hover/card:text-[#FF914C] transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-8 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                {/* Action Link with sliding arrow */}
                <a 
                  href="/services" 
                  className="inline-flex items-center text-[#FF914C] font-extrabold hover:text-[#1F628D] transition-colors mt-auto w-fit"
                >
                  <span className="relative">
                    Explore Details
                    {/* Animated Underline */}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#1F628D] transition-all duration-300 group-hover/card:w-full"></span>
                  </span>
                  <svg className="ml-2 w-5 h-5 transform translate-x-0 group-hover/card:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global Action Button with Sweep Effect */}
        <div className="text-center mt-16">
          <a 
            href="/services" 
            className="group/btn relative inline-flex items-center justify-center gap-3 border-2 border-[#1F628D] text-[#1F628D] text-lg font-extrabold py-3 px-10 rounded overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(31,98,141,0.2)]"
          >
            {/* Background Fill Sweep */}
            <div className="absolute inset-0 bg-[#1F628D] translate-y-[100%] transition-transform duration-300 ease-in-out group-hover/btn:translate-y-0 z-0"></div>
            
            <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-white">
              View All Services
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;