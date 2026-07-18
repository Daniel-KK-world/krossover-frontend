// components/ReviewModal.jsx
import React, { useState } from 'react';

const ReviewModal = ({ serviceId, serviceName, bookingId, onClose, onSuccess }) => {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);  // ← ADD THIS

  const token = localStorage.getItem('access_token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    if (!bookingId) {
      setError('No booking selected');
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/v1/reviews/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          service_id: serviceId,
          booking_id: bookingId,
          rating: rating,
          comment: comment
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Failed to submit review');
      }

      // ─── SHOW SUCCESS STATE ──────────────────────────────
      setSuccess(true);
      
      // Close after 2 seconds and call onSuccess
      setTimeout(() => {
        onSuccess(data);
      }, 2000);

    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  // Close modal if user clicks outside (only if not in success state)
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && !success) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-krossover-blue">
            {success ? 'Review Submitted!' : 'Write a Review'}
          </h2>
          {!success && (
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">
              ×
            </button>
          )}
        </div>

        {success ? (
          // ─── SUCCESS STATE ──────────────────────────────────
          <div className="text-center py-8">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-green-600">Thank You!</h3>
            <p className="text-gray-600 mt-2">Your review has been submitted successfully.</p>
            <p className="text-sm text-gray-500 mt-4">Redirecting...</p>
          </div>
        ) : (
          // ─── FORM STATE ────────────────────────────────────
          <>
            <p className="text-gray-600 mb-4">
              Rate your experience with <strong>{serviceName}</strong>
            </p>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-3 mb-4 rounded">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Star Rating */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Rating
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className={`text-4xl transition-colors ${
                        (hoverRating || rating) >= star ? 'text-yellow-400' : 'text-gray-300'
                      } hover:text-yellow-400`}
                    >
                      ★
                    </button>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {rating === 1 && 'Terrible'}
                  {rating === 2 && 'Poor'}
                  {rating === 3 && 'Average'}
                  {rating === 4 && 'Good'}
                  {rating === 5 && 'Excellent!'}
                </p>
              </div>

              {/* Comment */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Review
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-krossover-orange focus:border-transparent"
                  placeholder="Share your experience with this service..."
                  maxLength="1000"
                />
                <p className="text-xs text-gray-500 text-right">{comment.length}/1000</p>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={`w-full py-3 px-4 rounded-md text-white font-bold transition ${
                  submitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-krossover-blue hover:bg-krossover-orange'
                }`}
              >
                {submitting ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ReviewModal;