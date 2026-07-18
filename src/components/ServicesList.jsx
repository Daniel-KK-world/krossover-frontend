import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API_BASE_URL from '../config';  // ← ADD THIS

const ServicesList = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // 1. Fetch live data from your FastAPI backend
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/services/`);  // ← FIXED
        if (!response.ok) throw new Error('Failed to load services from the server.');
        
        const data = await response.json();
        setServices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Handle card click to go to service detail
  const handleCardClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <section className="py-24 px-6 bg-white font-poppins relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Loading & Error States */}
        {loading && (
          <div className="text-center py-12">
            <p className="text-xl font-bold text-krossover-blue animate-pulse">Loading fleet and services...</p>
          </div>
        )}
        
        {error && (
          <div className="text-center py-12">
            <p className="text-red-500 font-bold">{error}</p>
          </div>
        )}

        {/* Services Grid matching your preview styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              onClick={() => handleCardClick(service.id)}
              className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-[0_20px_50px_rgb(31,98,141,0.12)] transition-all duration-500 group/card border border-gray-100 hover:-translate-y-2 flex flex-col h-full cursor-pointer"
            >
              {/* Animated Top Gradient Line */}
              <div className="absolute top-0 left-0 h-1.5 w-0 bg-gradient-to-r from-[#FF914C] to-[#1F628D] transition-all duration-700 ease-out group-hover/card:w-full z-20"></div>

              {/* Service Image with Cinematic Tint */}
              <div className="h-56 overflow-hidden relative bg-gray-200">
                <div className="absolute inset-0 bg-[#1F628D]/20 mix-blend-multiply group-hover/card:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={service.image_url || "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop"} 
                  alt={service.name} 
                  className="w-full h-full object-cover transform scale-100 group-hover/card:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Service Content */}
              <div className="p-8 flex flex-col flex-grow bg-white relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-2xl font-extrabold font-anton text-[#1F628D] uppercase group-hover/card:text-[#FF914C] transition-colors duration-300">
                    {service.name}
                  </h4>
                  <span className="text-sm font-bold text-[#FF914C] bg-orange-50 px-2 py-1 rounded">
                    GHS {service.base_price}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-8 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                {/* High-End Direct Booking Button Flow */}
                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <Link 
                    to="/confirm-booking"
                    state={{ service: service }}
                    onClick={(e) => e.stopPropagation()}
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

        {/* Empty Database State */}
        {!loading && services.length === 0 && (
          <div className="text-center mt-8 p-8 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-500 font-poppins">No services are currently active in the database.</p>
          </div>
        )}

      </div>
    </section>
  );
};
 
export default ServicesList;