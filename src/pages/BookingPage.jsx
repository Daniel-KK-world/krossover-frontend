import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem('token');
      
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await fetch('http://localhost:8000/api/v1/bookings/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to load your bookings. Please try again.');
        }

        const data = await response.json();
        setBookings(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [navigate]);

  const handlePayNow = async (bookingId) => {
    const token = localStorage.getItem('token');
    
    try {
      const paymentResponse = await fetch(`http://localhost:8000/api/v1/payments/initialize/${bookingId}`, {
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
        alert("Payment initialization failed. Please try again.");
      }
    } catch (error) {
      console.error("Error connecting to payment gateway", error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-[calc(100vh-150px)] py-16 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 border-b border-gray-200 pb-6">
          <h2 className="text-4xl font-extrabold text-krossover-blue font-anton uppercase tracking-wide">
            My Bookings
          </h2>
          <p className="mt-2 text-gray-500">Manage your upcoming and past service requests.</p>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-krossover-orange"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md mb-8">
            <p className="text-sm text-red-700 font-medium">{error}</p>
          </div>
        )}

        {!loading && !error && bookings.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-16 text-center flex flex-col items-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Bookings Yet</h3>
            <p className="text-gray-500 mb-8">You haven't booked any services yet.</p>
            <Link to="/services" className="bg-krossover-blue hover:bg-krossover-orange text-white px-8 py-3 rounded-md font-bold transition-colors">
              Explore Our Services
            </Link>
          </div>
        )}

        {!loading && !error && bookings.length > 0 && (
          <div className="space-y-6">
            {bookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg transition-shadow">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    
                    <h3 className="text-xl font-bold text-gray-900">
                      {booking.service_name || "Service Booking"}
                    </h3>
                    
                    <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase ${
                      booking.status === 'CONFIRMED' ? 'bg-green-100 text-green-700' : 
                      booking.status === 'PENDING' ? 'bg-yellow-100 text-yellow-700' : 
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {booking.status || 'PENDING'}
                    </span>
                  </div>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p><span className="font-semibold text-gray-800">Date:</span> {new Date(booking.booking_date).toLocaleDateString('en-GB')}</p>
                    {booking.special_instructions && <p><span className="font-semibold text-gray-800">Note:</span> {booking.special_instructions}</p>}
                  </div>
                </div>

                <div className="text-right md:border-l md:border-gray-100 md:pl-6">
                  {booking.status === 'PENDING' ? (
                    <button 
                      onClick={() => handlePayNow(booking.id)}
                      className="bg-krossover-orange hover:bg-orange-600 text-white px-6 py-2 rounded font-bold w-full md:w-auto transition-colors"
                    >
                      Pay Now
                    </button>
                  ) : (
                    <button className="text-krossover-blue border border-krossover-blue hover:bg-blue-50 px-6 py-2 rounded font-bold w-full md:w-auto transition-colors">
                      View Details
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingsPage;