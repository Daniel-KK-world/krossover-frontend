import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ReviewModal from '../components/ReviewModal';

const BookingPage = () => {
  const [bookings, setBookings] = useState([]);
  const [userReviews, setUserReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingReviews, setLoadingReviews] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState('bookings'); // 'bookings' or 'reviews'
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // ─── FETCH BOOKINGS ──────────────────────────────────────
  const fetchBookings = async () => {
    const token = localStorage.getItem('access_token');
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

  // ─── FETCH USER REVIEWS ──────────────────────────────────
  const fetchUserReviews = async () => {
    const token = localStorage.getItem('access_token');
    if (!token) return;

    setLoadingReviews(true);
    try {
      const response = await fetch('http://localhost:8000/api/v1/reviews/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setUserReviews(data);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoadingReviews(false);
    }
  };

  // ─── INITIAL LOAD ────────────────────────────────────────
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    fetchBookings();
  }, [navigate, isAuthenticated]);

  // ─── HANDLE PAYMENT ──────────────────────────────────────
  const handlePayNow = async (bookingId) => {
    const token = localStorage.getItem('access_token');
    
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

  // ─── HANDLE REVIEW CLICK ─────────────────────────────────
  const handleWriteReview = async (booking) => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/services/${booking.service_id}`);
      if (response.ok) {
        const serviceData = await response.json();
        setSelectedService(serviceData);
        setSelectedBooking(booking);
        setShowReviewModal(true);
      }
    } catch (error) {
      console.error('Error fetching service:', error);
    }
  };

  const handleReviewSuccess = (newReview) => {
    setShowReviewModal(false);
    setSelectedBooking(null);
    setSelectedService(null);
    // Refresh both bookings and reviews
    fetchBookings();
    if (activeTab === 'reviews') {
      fetchUserReviews();
    }
  };

  // ─── HANDLE TAB SWITCH ───────────────────────────────────
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'reviews') {
      fetchUserReviews();
    }
  };

  // ─── RENDER STARS ────────────────────────────────────────
  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="bg-gray-50 min-h-[calc(100vh-150px)] py-16 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 border-b border-gray-200 pb-6">
          <h2 className="text-4xl font-extrabold text-krossover-blue font-anton uppercase tracking-wide">
            My Account
          </h2>
          <p className="mt-2 text-gray-500">Manage your bookings and reviews.</p>
        </div>

        {/* ─── TABS ───────────────────────────────────────────── */}
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          <button
            onClick={() => handleTabChange('bookings')}
            className={`pb-3 px-4 font-bold text-sm transition-colors ${
              activeTab === 'bookings'
                ? 'border-b-2 border-krossover-orange text-krossover-orange'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            📋 My Bookings
          </button>
          <button
            onClick={() => handleTabChange('reviews')}
            className={`pb-3 px-4 font-bold text-sm transition-colors ${
              activeTab === 'reviews'
                ? 'border-b-2 border-krossover-orange text-krossover-orange'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            ⭐ My Reviews
          </button>
        </div>

        {/* ─── BOOKINGS TAB ──────────────────────────────────── */}
        {activeTab === 'bookings' && (
          <>
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
                          booking.status === 'COMPLETED' ? 'bg-blue-100 text-blue-700' :
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

                    <div className="flex flex-col md:flex-row gap-3 md:items-center">
                      {booking.status === 'COMPLETED' && (
                        <button
                          onClick={() => handleWriteReview(booking)}
                          className="bg-krossover-blue hover:bg-krossover-orange text-white px-4 py-2 rounded font-bold transition-colors text-sm"
                        >
                          ✍️ Write a Review
                        </button>
                      )}

                      {booking.status === 'PENDING' && (
                        <button 
                          onClick={() => handlePayNow(booking.id)}
                          className="bg-krossover-orange hover:bg-orange-600 text-white px-6 py-2 rounded font-bold transition-colors"
                        >
                          Pay Now
                        </button>
                      )}

                      <button className="text-krossover-blue border border-krossover-blue hover:bg-blue-50 px-4 py-2 rounded font-bold transition-colors text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* ─── REVIEWS TAB ───────────────────────────────────── */}
        {activeTab === 'reviews' && (
          <>
            {loadingReviews && (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-krossover-orange"></div>
              </div>
            )}

            {!loadingReviews && userReviews.length === 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-16 text-center flex flex-col items-center">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No Reviews Yet</h3>
                <p className="text-gray-500 mb-8">You haven't written any reviews yet.</p>
                <Link to="/services" className="bg-krossover-blue hover:bg-krossover-orange text-white px-8 py-3 rounded-md font-bold transition-colors">
                  Book a Service & Review
                </Link>
              </div>
            )}

            {!loadingReviews && userReviews.length > 0 && (
              <div className="space-y-4">
                {userReviews.map((review) => (
                  <div key={review.id} className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-bold text-gray-900">
                            {review.service_name || "Service"}
                          </h4>
                          <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                            {new Date(review.created_at).toLocaleDateString('en-GB')}
                          </span>
                        </div>
                        <div className="text-yellow-400 text-xl mb-2">
                          {renderStars(review.rating)}
                        </div>
                        {review.comment && (
                          <p className="text-gray-600">{review.comment}</p>
                        )}
                      </div>
                      <Link 
                        to={`/services/${review.service_id}`}
                        className="text-krossover-blue hover:text-krossover-orange text-sm font-semibold"
                      >
                        View Service →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* ─── REVIEW MODAL ───────────────────────────────────── */}
      {showReviewModal && selectedService && (
        <ReviewModal
          serviceId={selectedService.id}
          serviceName={selectedService.name}
          bookingId={selectedBooking?.id}
          onClose={() => {
            setShowReviewModal(false);
            setSelectedBooking(null);
            setSelectedService(null);
          }}
          onSuccess={handleReviewSuccess}
        />
      )}
    </div>
  );
};

export default BookingPage;