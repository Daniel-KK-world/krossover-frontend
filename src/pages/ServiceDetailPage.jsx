// src/pages/ServiceDetailPage.jsx

import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getServiceBySlug, getRelatedServices } from '../data/services';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug);

  // If service not found
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">Service Not Found</h2>
          <p className="text-gray-500 mb-6">The service you're looking for doesn't exist.</p>
          <Link 
            to="/services" 
            className="bg-[#FF914C] text-white px-6 py-3 rounded-lg hover:bg-[#e8823a] transition-colors inline-block"
          >
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  const relatedServices = getRelatedServices(slug);

  // Handle Book Now click
  const handleBookNow = () => {
    navigate('/booking', { state: { service: service } });
  };

  return (
    <div className="bg-gray-50 font-poppins min-h-screen">
      
      {/* HERO SECTION */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F628D]/90 to-[#1F628D]/70 z-10"></div>
        <img 
          src={service.heroImage || service.image} 
          alt={service.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">{service.icon}</span>
                <span className="text-[#FF914C] font-anton text-sm uppercase tracking-wider bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full">
                  Our Services
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-anton text-white uppercase leading-tight">
                {service.name}
              </h1>
              <p className="text-xl text-white/90 mt-4 max-w-2xl">
                {service.shortDescription}
              </p>
              
              {/* BOOK NOW BUTTON - HERO */}
              <button 
                onClick={handleBookNow}
                className="inline-block mt-6 bg-[#FF914C] text-white font-extrabold py-3 px-10 rounded-lg hover:bg-[#e8823a] transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN - Main Content */}
          <div className="lg:col-span-2">
            
            {/* Description */}
            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-2xl font-anton text-[#1F628D] mb-4">About This Service</h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {service.fullDescription}
              </div>
            </div>

            {/* Fleet/Categories */}
            {service.fleet && service.fleet.length > 0 && (
              <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
                <h2 className="text-2xl font-anton text-[#1F628D] mb-6">Our Fleet & Packages</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.fleet.map((item, index) => (
                    <div key={index} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-[#1F628D]">{item.name}</h3>
                        <span className="text-sm font-bold text-[#FF914C] bg-orange-50 px-2 py-1 rounded">
                          {item.priceRange}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">Capacity: {item.capacity}</p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {service.features && service.features.length > 0 && (
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-anton text-[#1F628D] mb-4">Why Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#FF914C] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN - Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Booking Card - Sticky */}
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <h3 className="text-xl font-anton text-[#1F628D] mb-4">Ready to Book?</h3>
              <p className="text-gray-600 text-sm mb-6">
                Get started with our {service.name} service today.
              </p>
              
              <button 
                onClick={handleBookNow}
                className="w-full bg-[#FF914C] text-white font-extrabold py-3 px-6 rounded-lg hover:bg-[#e8823a] transition-all hover:shadow-lg"
              >
                Book Now
              </button>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-[#FF914C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call us: +233 XX XXX XXXX</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 mt-2">
                  <svg className="w-5 h-5 text-[#FF914C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email: info@krossover.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RELATED SERVICES */}
      {relatedServices.length > 0 && (
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-anton text-[#1F628D] text-center mb-12">
              Other Services You Might Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((related) => (
                <Link 
                  key={related.id}
                  to={`/services/${related.slug}`}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="text-4xl mb-3">{related.icon}</div>
                  <h3 className="font-anton text-[#1F628D] text-lg">{related.name}</h3>
                  <p className="text-gray-600 text-sm mt-2">{related.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetailPage;