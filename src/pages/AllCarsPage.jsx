// src/pages/AllCarsPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { services } from '../data/services';

const AllCarsPage = () => {
  const navigate = useNavigate();

  // Flatten all vehicles from all services
  const allVehicles = [];
  services.forEach(service => {
    if (service.fleet && service.fleet.length > 0) {
      service.fleet.forEach(vehicle => {
        allVehicles.push({
          ...vehicle,
          serviceName: service.name,
          serviceSlug: service.slug,
          serviceIcon: service.icon,
        });
      });
    }
  });

  const handleEnquire = (vehicle) => {
    // Find the parent service
    const parentService = services.find(s => s.slug === vehicle.serviceSlug);
    navigate('/enquiry', { state: { service: parentService, vehicle } });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 font-poppins">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-anton text-[#1F628D] uppercase">All Our Cars</h1>
          <p className="text-gray-600 mt-2">Browse our complete fleet of vehicles across all services</p>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-8">
          <p className="text-center text-sm text-gray-600">
            Total Vehicles: <span className="font-bold text-[#1F628D]">{allVehicles.length}</span>
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allVehicles.map((vehicle, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              {/* Image */}
              <div className="h-48 bg-gray-100">
                <img
                  src={vehicle.image || '/placeholder-car.jpg'}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-[#1F628D]">{vehicle.name}</h3>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <span>{vehicle.serviceIcon}</span>
                      {vehicle.serviceName}
                    </p>
                  </div>
                  <span className="text-sm font-bold text-[#FF914C] bg-orange-50 px-2 py-1 rounded-full whitespace-nowrap">
                    {vehicle.price}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {vehicle.description}
                </p>

                <div className="grid grid-cols-2 gap-1 mt-3 text-xs">
                  <p><span className="font-semibold">Capacity:</span> {vehicle.capacity}</p>
                  {vehicle.category && (
                    <p><span className="font-semibold">Category:</span> {vehicle.category}</p>
                  )}
                  {vehicle.location && (
                    <p className="col-span-2"><span className="font-semibold">Location:</span> {vehicle.location}</p>
                  )}
                </div>

                {/* What's Included - Short version */}
                {vehicle.includes && vehicle.includes.length > 0 && (
                  <div className="mt-3 bg-gray-50 rounded-lg p-2">
                    <p className="text-xs text-gray-500 font-medium">Includes:</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {vehicle.includes.slice(0, 3).map((item, idx) => (
                        <span key={idx} className="text-xs bg-white px-2 py-0.5 rounded-full text-gray-600">
                          ✓ {item.split('-')[0].trim()}
                        </span>
                      ))}
                      {vehicle.includes.length > 3 && (
                        <span className="text-xs text-gray-400">+{vehicle.includes.length - 3} more</span>
                      )}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => handleEnquire(vehicle)}
                  className="mt-4 w-full bg-[#FF914C] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#e8823a] transition text-sm"
                >
                  Enquire About This Vehicle
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {allVehicles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No vehicles found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCarsPage;