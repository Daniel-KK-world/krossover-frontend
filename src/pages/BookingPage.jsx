import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookingPage = () => {
  // Grab the service ID from the URL (e.g., /book/:serviceId)
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const [service, setService] = useState(null);
  const [formData, setFormData] = useState({
    booking_date: '',
    special_instructions: ''
  });
  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchingService, setFetchingService] = useState(true);

  // Fetch the service details when the page loads so the user sees what they are booking
  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/services/${serviceId}`);
        if (!response.ok) throw new Error("Service not found");
        
        const data = await response.json();
        setService(data);
      } catch (err) {
        setError("Could not load service details. It may have been removed.");
      } finally {
        setFetchingService(false);
      }
    };

    if (serviceId) {
      fetchServiceDetails();
    }
  }, [serviceId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const token = localStorage.getItem('token');
    
    // Security check: If they somehow got here without a token, boot them to login
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      // Structure matches your schemas.BookingCreate perfectly
      const payload = {
        service_id: serviceId,
        booking_date: new Date(formData.booking_date).toISOString(), // Convert HTML datetime to ISO 8601 for FastAPI
        special_instructions: formData.special_instructions
      };

      const response = await fetch('http://localhost:8000/api/v1/bookings/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // The Bouncer!
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Failed to create booking.');
      }

      // Success! Route them to their "My Bookings" dashboard
      navigate('/bookings');

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (fetchingService) {
    return <div className="flex-grow flex items-center justify-center min-h-[calc(100vh-150px)]">Loading service details...</div>;
  }

  return (
    <div className="flex-grow flex items-center justify-center bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-150px)]">
      
      <div className="max-w-lg w-full bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
        
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-krossover-blue font-anton uppercase tracking-wide">
            Book Service
          </h2>
          {service && (
            <p className="text-gray-500 font-poppins mt-2">
              You are booking: <span className="font-bold text-krossover-orange">{service.name}</span>
            </p>
          )}
        </div>
        
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-md">
            <p className="text-sm text-red-700 font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 font-poppins">
          
          {/* Booking Date & Time Input */}
          <div>
            <label htmlFor="booking_date" className="block text-sm font-semibold text-gray-700 mb-1">
              Select Date and Time
            </label>
            <input
              type="datetime-local"
              id="booking_date"
              name="booking_date"
              value={formData.booking_date}
              onChange={handleChange}
              required
              className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-krossover-orange focus:border-transparent transition duration-200"
            />
          </div>

          {/* Special Instructions Input */}
          <div>
            <label htmlFor="special_instructions" className="block text-sm font-semibold text-gray-700 mb-1">
              Special Instructions (Optional)
            </label>
            <textarea
              id="special_instructions"
              name="special_instructions"
              value={formData.special_instructions}
              onChange={handleChange}
              rows="4"
              className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-krossover-orange focus:border-transparent transition duration-200"
              placeholder="E.g., Please ensure the bus has AC, or 'Pick up at the main gate'."
            />
          </div>

          {/* Base Price Display (Read-Only) */}
          {service && (
            <div className="bg-blue-50 p-4 rounded-md border border-blue-100 flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-700">Estimated Base Price:</span>
              <span className="text-lg font-bold text-krossover-blue">GHS {service.base_price}</span>
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading || !service}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-lg text-lg font-bold text-white transition-all duration-300 ${
              loading || !service
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-krossover-orange hover:bg-krossover-blue hover:-translate-y-1'
            }`}
          >
            {loading ? 'Processing...' : 'Confirm Booking'}
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default BookingPage;