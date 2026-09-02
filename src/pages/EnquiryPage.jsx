// src/pages/EnquiryPage.jsx

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EnquiryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { service, vehicle } = location.state || {};

  const [formData, setFormData] = useState({
    // Personal
    full_name: '',
    gender: '',
    nationality: '',
    city: '',
    phone: '',
    email: '',
    
    // Trip Details
    purpose: '',
    travel_date: '',
    departure_time: '',
    pickup_point: '',
    destinations: '',
    
    // Hire Duration
    hire_duration: '',
    
    // Group
    group_composition: '',
    passengers: '',
    
    // Vehicle Preference
    preferred_vehicle: vehicle?.name || '',
    preferred_capacity: vehicle?.capacity || '',
    alternative_vehicle: '',
    alternative_capacity: '',
    
    // Budget
    budget: '',
    
    // Service info
    service_name: service?.name || '',
    vehicle_name: vehicle?.name || '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-8 text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-[#1F628D] mb-2">Enquiry Submitted!</h2>
          <p className="text-gray-600 mb-4">
            Thank you! Our team will contact you within 24 hours.
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-[#FF914C] text-white px-6 py-2 rounded-lg hover:bg-[#e8823a] transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 font-poppins">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-[#1F628D] text-white rounded-t-xl p-6">
          <h1 className="text-3xl font-anton">Transport Enquiry Form</h1>
          <p className="text-sm text-white/80 mt-1">Fill in your details and we'll get back to you</p>
          {vehicle && (
            <div className="mt-3 bg-white/20 rounded-lg p-3 text-sm">
              <span className="font-bold">{vehicle.name}</span> – {vehicle.capacity} – {vehicle.price}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-b-xl shadow-lg p-6 md:p-8">
          
          {/* PERSONAL INFORMATION */}
          <div className="mb-6">
            <h2 className="text-lg font-anton text-[#1F628D] mb-3">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Full Name *</label>
                <input type="text" name="full_name" required value={formData.full_name} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914C]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914C]">
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Nationality</label>
                <input type="text" name="nationality" value={formData.nationality} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914C]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">City</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914C]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number *</label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914C]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914C]" />
              </div>
            </div>
          </div>

          {/* TRIP DETAILS */}
          <div className="mb-6 border-t pt-6">
            <h2 className="text-lg font-anton text-[#1F628D] mb-3">Trip Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Purpose of Trip</label>
                <select name="purpose" value={formData.purpose} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914C]">
                  <option value="">Select</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Church">Church</option>
                  <option value="Wedding/Event">Wedding/Event</option>
                  <option value="Tour/Excursion">Tour/Excursion</option>
                  <option value="School">School</option>
                  <option value="Airport Transfer">Airport Transfer</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Travel Date *</label>
                <input type="date" name="travel_date" required value={formData.travel_date} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914C]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Departure Time</label>
                <input type="time" name="departure_time" value={formData.departure_time} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914C]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Pickup Point *</label>
                <input type="text" name="pickup_point" required value={formData.pickup_point} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914C]" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-1">Destination(s)</label>
                <input type="text" name="destinations" value={formData.destinations} onChange={handleChange}
                  placeholder="e.g. Accra → Kumasi, or multiple stops"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914C]" />
              </div>
            </div>
          </div>

          {/* HIRE DURATION */}
          <div className="mb-6 border-t pt-6">
            <h2 className="text-lg font-anton text-[#1F628D] mb-3">Hire Duration</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['One-way', 'Return trip', 'Full day', 'Multiple days'].map((option) => (
                <label key={option} className="flex items-center gap-2 text-sm">
                  <input type="radio" name="hire_duration" value={option} checked={formData.hire_duration === option} onChange={handleChange}
                    className="w-4 h-4 text-[#FF914C]" />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* GROUP INFORMATION */}
          <div className="mb-6 border-t pt-6">
            <h2 className="text-lg font-anton text-[#1F628D] mb-3">Group Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Composition of Group</label>
                <input type="text" name="group_composition" value={formData.group_composition} onChange={handleChange}
                  placeholder="e.g. Family, Corporate, Students"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914C]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Number of Passengers *</label>
                <input type="number" name="passengers" required min="1" value={formData.passengers} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914C]" />
              </div>
            </div>
          </div>

          {/* VEHICLE PREFERENCE */}
          <div className="mb-6 border-t pt-6">
            <h2 className="text-lg font-anton text-[#1F628D] mb-3">Vehicle Preference</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Preferred Vehicle</label>
                <input type="text" name="preferred_vehicle" value={formData.preferred_vehicle} onChange={handleChange}
                  placeholder={vehicle?.name || 'e.g. Toyota Coaster Bus'}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914C]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Capacity</label>
                <input type="text" name="preferred_capacity" value={formData.preferred_capacity} onChange={handleChange}
                  placeholder={vehicle?.capacity || 'e.g. 30 seater'}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914C]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Alternative Vehicle</label>
                <input type="text" name="alternative_vehicle" value={formData.alternative_vehicle} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914C]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Capacity</label>
                <input type="text" name="alternative_capacity" value={formData.alternative_capacity} onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914C]" />
              </div>
            </div>
          </div>

          {/* BUDGET */}
          <div className="mb-6 border-t pt-6">
            <h2 className="text-lg font-anton text-[#1F628D] mb-3">Budget</h2>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Budgeting for</label>
              <input type="text" name="budget" value={formData.budget} onChange={handleChange}
                placeholder="e.g. GHS 1,500 - 2,000"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF914C]" />
            </div>
          </div>

          {/* HIDDEN FIELDS */}
          <input type="hidden" name="service_name" value={formData.service_name} />
          <input type="hidden" name="vehicle_name" value={formData.vehicle_name} />

          {/* SUBMIT */}
          <div className="border-t pt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FF914C] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#e8823a] transition disabled:opacity-50 text-lg"
            >
              {loading ? 'Submitting...' : 'Get a Quote'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryPage;