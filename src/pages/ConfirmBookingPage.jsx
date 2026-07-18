import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import API_BASE_URL from '../config';  // ← ADD THIS

const ConfirmBookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isAuthenticated } = useAuth();
  
  const service = location.state?.service;

  useEffect(() => {
    if (!service) {
      navigate('/services');
    }
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [service, navigate, isAuthenticated]);

  if (!service) return null;

  const handleConfirm = async () => {
    setIsSubmitting(true);
    const token = localStorage.getItem('access_token');

    if (!token) {
      console.error('No token found');
      navigate('/login');
      return;
    }

    try {
      // ─── CREATE BOOKING ──────────────────────────────────
      const bookingResponse = await fetch(`${API_BASE_URL}/bookings/`, {  // ← FIXED
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          service_id: service.id,
          booking_date: new Date().toISOString(),
          service_date: new Date().toISOString(),
          special_instructions: "Standard booking"
        })
      });

      // ─── CHECK RESPONSE ──────────────────────────────────
      const bookingData = await bookingResponse.json();
      console.log('📥 Booking response:', bookingData);

      if (!bookingResponse.ok) {
        console.error('❌ Booking failed:', bookingData);
        
        if (bookingResponse.status === 422) {
          const errors = bookingData.detail?.map(e => `${e.loc.join('.')}: ${e.msg}`).join('\n');
          alert(`Validation Error:\n${errors || 'Invalid data'}`);
        } else {
          alert(bookingData.detail || 'Booking failed. Please try again.');
        }
        setIsSubmitting(false);
        return;
      }

      const bookingId = bookingData.id;

      // ─── INITIALIZE PAYMENT ──────────────────────────────
      const paymentResponse = await fetch(`${API_BASE_URL}/bookings/initialize-payment/${bookingId}`, {  // ← FIXED
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (paymentResponse.ok) {
        const paymentData = await paymentResponse.json();
        window.location.href = paymentData.checkout_url; 
      } else {
        console.error("Payment initialization failed");
        navigate('/bookings');
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