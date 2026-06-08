import React from 'react';
import { Link } from 'react-router-dom';

const ServicesList = () => {
  // Maintaining your imagery data from the preview, keeping styling beautifully aligned
  const services = [
    {
      id: "bus-hiring",
      title: "Bus Hiring Services",
      description: "Premium and reliable buses for corporate events, private trips, and commercial transport across the country.",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop",
    },
    {
      id: "driving-school",
      title: "Driving School",
      description: "Train with seasoned professionals. We thoroughly assist with license acquisition, stress-free renewals, and replacements.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "delivery",
      title: "Delivery Services",
      description: "Fast, secure, and efficient logistics, parcel delivery, and haulage solutions across the nation.",
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: "travel-tour",
      title: "Travel & Tour",
      description: "Comprehensive travel management, corporate ticketing arrangements, and tour consultancy across the globe.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
    },
    {
      id: "mechanics",
      title: "Mechanics & Maintenance",
      description: "Expert vehicle diagnostics, rapid routine servicing, and full-scale electrical or mechanical repairs.",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974&auto=format&fit=crop",
    },
    {
      id: "towing",
      title: "Towing Services",
      description: "24/7 rapid response vehicle towing, recovery machinery, and roadside assistance when you need it most.",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop",
    }
  ];

  return (
    <section className="py-24 px-6 bg-white font-poppins relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Services Grid matching your preview styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-[0_20px_50px_rgb(31,98,141,0.12)] transition-all duration-500 group/card border border-gray-100 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Animated Top Gradient Line - Shoots across on hover */}
              <div className="absolute top-0 left-0 h-1.5 w-0 bg-gradient-to-r from-[#FF914C] to-[#1F628D] transition-all duration-700 ease-out group-hover/card:w-full z-20"></div>

              {/* Service Image with Cinematic Tint */}
              <div className="h-56 overflow-hidden relative">
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
                
                {/* High-End Direct Booking Button Flow */}
                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <Link 
                    to={`/book?service=${service.id}`}
                    className="group/btn relative w-full inline-flex items-center justify-center gap-3 bg-[#1F628D] text-white text-sm font-extrabold py-3.5 px-6 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-[0_8px_25px_rgba(255,145,76,0.3)] hover:-translate-y-0.5"
                  >
                    {/* Orange wave sweeps up from the bottom */}
                    <div className="absolute inset-0 bg-[#FF914C] translate-y-[100%] transition-transform duration-300 ease-out group-hover/btn:translate-y-0 z-0"></div>
                    
                    <span className="relative z-10 transition-transform duration-300 group-hover/btn:-translate-x-1">
                      Book Service Now
                    </span>
                    
                    <svg className="w-4 h-4 relative z-10 opacity-0 -translate-x-4 transition-all duration-300 group-hover/btn:opacity-100 group-hover/btn:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesList;