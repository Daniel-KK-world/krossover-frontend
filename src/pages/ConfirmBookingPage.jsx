import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ConfirmBookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isAuthenticated } = useAuth();
  
  // Access the state safely
  const service = location.state?.service;

  // Redirect using useEffect so it doesn't happen during rendering
  useEffect(() => {
    if (!service) {
      navigate('/services');
    }
    // If not authenticated, redirect to login
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [service, navigate, isAuthenticated]);

  // If service is missing, don't try to render the rest
  if (!service) return null;

  const handleConfirm = async () => {
    setIsSubmitting(true);
    // ✅ FIXED: Use 'access_token' not 'token'
    const token = localStorage.getItem('access_token');

    if (!token) {
      console.error('No token found');
      navigate('/login');
      return;
    }

    try {
      // 1. Create the PENDING booking in your DB
      const bookingResponse = await fetch('http://localhost:8000/api/v1/bookings/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          service_id: service.id,
          booking_date: new Date().toISOString(),
          special_instructions: "Standard booking"
        })
      });

      if (bookingResponse.ok) {
        const bookingData = await bookingResponse.json();
        const bookingId = bookingData.id;

        // 2. IMMEDIATELY call your /initialize/{booking_id} endpoint
        const paymentResponse = await fetch(`http://localhost:8000/api/v1/payments/initialize/${bookingId}`, {
          method: 'POST',
          headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (paymentResponse.ok) {
          const paymentData = await paymentResponse.json();
          
          // 3. Redirect the user to the Payment Gateway's URL
          window.location.href = paymentData.checkout_url; 
        } else {
          console.error("Payment initialization failed");
          navigate('/bookings');
        }
      } else {
        const errorData = await bookingResponse.json();
        console.error("Booking creation failed:", errorData.detail);
        // Show error to user
        alert(`Booking failed: ${errorData.detail || 'Please try again'}`);
      }
    } catch (error) {
      console.error("Booking/Payment flow failed", error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-16 px-4 font-poppins">
      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Confirm Your Service</h2>
        <p className="text-gray-500 mb-8">You are about to book the following service:</p>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8 text-left">
          <h3 className="text-xl font-bold text-krossover-blue">{service.name}</h3>
          <p className="text-gray-700 mt-2 font-semibold">Total: GHS {parseFloat(service.base_price).toFixed(2)}</p>
        </div>

        <button 
          onClick={handleConfirm}
          disabled={isSubmitting}
          className="w-full bg-krossover-orange hover:bg-orange-600 text-white font-bold py-4 rounded-md shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Processing...' : 'Confirm & Create Booking'}
        </button>
      </div>
    </div>
  );
};

export default ConfirmBookingPage;