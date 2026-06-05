import React from 'react';

const ServicesPreview = () => {
  // Array of the 6 core services outlined in the Krossover proposal
  const services = [
    {
      id: 1,
      title: "Bus Hiring Services",
      description: "Premium and reliable buses for corporate events, private trips, and commercial transport.",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Driving School",
      description: "Train with seasoned professionals. We also assist with license acquisition and renewals.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Delivery Services",
      description: "Fast, secure, and efficient logistics and delivery solutions across the nation.",
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Travel & Tour",
      description: "Comprehensive travel management, ticketing, and tour consultancy across the globe.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Mechanics & Maintenance",
      description: "Expert vehicle diagnostics, routine maintenance, and full-scale mechanical repairs.",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Towing Services",
      description: "24/7 rapid response vehicle towing and roadside assistance when you need it most.",
      image: "https://images.unsplash.com/photo-1605342417770-49658db4f4a3?q=80&w=2070&auto=format&fit=crop",
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#FF914C]"></div>
            <h3 className="font-anton text-[#FF914C] tracking-widest text-lg uppercase">
              What We Do
            </h3>
            <div className="w-10 h-1 bg-[#FF914C]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-anton text-[#1F628D] uppercase drop-shadow-sm">
            Our Core Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base">
            Providing comprehensive, efficient, and top-tier transportation solutions to meet all your personal and corporate needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Service Image */}
              <div className="h-56 overflow-hidden relative">
                {/* Overlay for a slight dark tint */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Service Content */}
              <div className="p-6 border-t-4 border-[#1F628D]">
                <h4 className="text-2xl font-anton text-[#1F628D] mb-3 uppercase">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                {/* Action Link */}
                <a 
                  href="/services" 
                  className="inline-flex items-center text-[#FF914C] font-semibold hover:text-[#1F628D] transition-colors"
                >
                  Explore Details 
                  <span className="ml-2 text-xl group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global Action Button */}
        <div className="text-center mt-12">
          <a 
            href="/services" 
            className="inline-block border-2 border-[#1F628D] text-[#1F628D] hover:bg-[#1F628D] hover:text-white font-semibold py-3 px-8 rounded transition-colors duration-300"
          >
            View All Services
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;