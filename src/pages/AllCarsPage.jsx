// src/pages/AllCarsPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { services } from '../data/services';

const AllCarsPage = () => {
  const navigate = useNavigate();

  // Only these services have VEHICLES (not courses or services)
  const VEHICLE_SERVICES = ['bus-hiring', 'car-rental', 'truck-rental'];

  const allVehicles = [];
  services.forEach(service => {
    if (!VEHICLE_SERVICES.includes(service.slug)) return;

    if (service.fleetGroups && service.fleetGroups.length > 0) {
      service.fleetGroups.forEach(group => {
        group.vehicles.forEach(vehicle => {
          allVehicles.push({
            ...vehicle,
            serviceName: service.name,
            serviceSlug: service.slug,
            serviceIcon: service.icon,
            groupName: group.groupName,
            groupIcon: group.groupIcon,
          });
        });
      });
    }

    if (service.fleet && service.fleet.length > 0) {
      service.fleet.forEach(vehicle => {
        allVehicles.push({
          ...vehicle,
          serviceName: service.name,
          serviceSlug: service.slug,
          serviceIcon: service.icon,
          groupName: service.name,
          groupIcon: service.icon,
        });
      });
    }
  });

  const handleEnquire = (vehicle) => {
    const parentService = services.find(s => s.slug === vehicle.serviceSlug);
    navigate('/enquiry', { state: { service: parentService, vehicle } });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 font-poppins">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-anton text-[#1F628D] uppercase">Our Fleet</h1>
          <p className="text-gray-600 mt-2">Browse our complete fleet of vehicles across all services</p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm mb-8">
          <p className="text-center text-sm text-gray-600">
            Total Vehicles: <span className="font-bold text-[#1F628D]">{allVehicles.length}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allVehicles.map((vehicle, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col"
            >
              <div className="h-48 bg-gray-100">
                <img
                  src={vehicle.image || '/placeholder-car.jpg'}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-[#1F628D]">{vehicle.name}</h3>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <span>{vehicle.groupIcon}</span>
                      {vehicle.groupName}
                    </p>
                  </div>
                  <span className="text-sm font-bold text-[#FF914C] bg-orange-50 px-2 py-1 rounded-full whitespace-nowrap">
                    {vehicle.price}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mt-2 flex-grow">
                  {vehicle.description}
                </p>

                <div className="mt-3 text-xs">
                  <span className="font-semibold">Capacity: </span>
                  <span className="text-gray-600">{vehicle.capacity}</span>
                </div>

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