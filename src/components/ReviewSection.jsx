// components/ReviewSection.jsx
import React, { useState, useEffect } from 'react';
import ReviewModal from './ReviewModal';

const ReviewSection = ({ serviceId, serviceName }) => {
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [canReview, setCanReview] = useState(false);
  const [checkingReview, setCheckingReview] = useState(true);

  const token = localStorage.getItem('access_token');

  // Fetch reviews
  const fetchReviews = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/reviews/service/${serviceId}`);
      if (response.ok) {
        const data = await response.json();
        setReviews(data);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  // Fetch average rating
  const fetchAverageRating = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/reviews/service/${serviceId}/average`);
      if (response.ok) {
        const data = await response.json();
        setAverageRating(data.average_rating);
        setTotalReviews(data.total_reviews);
      }
    } catch (error) {
      console.error('Error fetching average rating:', error);
    }
  };

  // Check if user can review (has completed booking for this service)
  const checkCanReview = async () => {
    if (!token) {
      setCheckingReview(false);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/v1/bookings/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        const bookings = await response.json();
        const completedBookings = bookings.filter(
          b => b.service_id === serviceId && b.status === 'COMPLETED'
        );
        
        // Check if already reviewed
        const alreadyReviewed = reviews.some(r => 
          completedBookings.some(b => b.id === r.booking_id)
        );
        
        setCanReview(completedBookings.length > 0 && !alreadyReviewed);
      }
    } catch (error) {
      console.error('Error checking bookings:', error);
    }
    setCheckingReview(false);
    setLoading(false);
  };

  useEffect(() => {
    fetchReviews();
    fetchAverageRating();
  }, [serviceId]);

  useEffect(() => {
    if (reviews.length > 0 || !token) {
      checkCanReview();
    } else {
      setCheckingReview(false);
      setLoading(false);
    }
  }, [reviews, token]);

  const handleReviewSuccess = (newReview) => {
    setReviews([newReview, ...reviews]);
    fetchAverageRating();
    setShowReviewModal(false);
    setCanReview(false);
  };

  // Render stars
  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);
    
    return (
      <>
        {'★'.repeat(full)}
        {half && '⭐'}
        {'☆'.repeat(empty)}
      </>
    );
  };

  if (loading || checkingReview) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-krossover-orange"></div>
      </div>
    );
  }

  return (
    <div className="mt-12 border-t border-gray-200 pt-8">
      {/* Header with Average Rating */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Customer Reviews</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-2xl text-yellow-400">
              {renderStars(Math.round(averageRating))}
            </span>
            <span className="text-lg font-bold">{averageRating.toFixed(1)}</span>
            <span className="text-gray-500">({totalReviews} reviews)</span>
          </div>
        </div>
        
        {canReview && (
          <button
            onClick={() => setShowReviewModal(true)}
            className="bg-krossover-blue hover:bg-krossover-orange text-white px-6 py-2 rounded-md font-bold transition-colors"
          >
            Write a Review
          </button>
        )}
      </div>

      {/* Review List */}
      {reviews.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-200">
          <p className="text-gray-500">No reviews yet.</p>
          {canReview && (
            <p className="text-gray-500 mt-2">Be the first to review this service!</p>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-krossover-blue text-white flex items-center justify-center font-bold text-sm">
                    {review.user_name?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{review.user_name}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(review.created_at).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
                <div className="text-yellow-400 text-xl">
                  {renderStars(review.rating)}
                </div>
              </div>
              {review.comment && (
                <p className="text-gray-700 mt-3">{review.comment}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Review Modal */}
      {showReviewModal && (
        <ReviewModal
          serviceId={serviceId}
          serviceName={serviceName}
          onClose={() => setShowReviewModal(false)}
          onSuccess={handleReviewSuccess}
        />
      )}
    </div>
  );
};

export default ReviewSection;