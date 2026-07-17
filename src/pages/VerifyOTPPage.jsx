import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const VerifyOTPPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);

  // Get email from URL params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailParam = params.get('email');
    if (emailParam) {
      setEmail(emailParam);
    } else {
      // If no email in URL, redirect to login
      navigate('/login');
    }
  }, [location, navigate]);

  // Countdown timer for resend
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleVerify = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/v1/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp_code: otp }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Invalid OTP');
      }

      setSuccess(true);
      setTimeout(() => navigate('/login'), 3000);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResendLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:8000/api/v1/auth/resend-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Failed to resend OTP');
      }

      setCountdown(60);
      alert('New OTP sent to your email!');

    } catch (err) {
      setError(err.message);
    } finally {
      setResendLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-150px)]">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-2xl border border-gray-100 text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-3xl font-anton text-green-600 mb-2">Verified!</h2>
          <p className="text-gray-600 font-poppins">Your email has been verified. Redirecting to login...</p>
          <div className="mt-6">
            <Link to="/login" className="text-krossover-orange hover:underline">
              Go to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-grow flex items-center justify-center bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-150px)]">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-anton text-krossover-blue">Verify OTP</h2>
          <p className="text-gray-500 font-poppins mt-2">
            Enter the 6-digit code sent to <strong className="text-krossover-blue">{email}</strong>
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-md">
            <p className="text-sm text-red-700 font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleVerify} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              OTP Code
            </label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
              required
              maxLength="6"
              className="block w-full px-4 py-3 text-center text-2xl tracking-[0.5em] border border-gray-300 rounded-md focus:ring-2 focus:ring-krossover-orange focus:border-transparent transition duration-200"
              placeholder="000000"
              autoFocus
            />
          </div>

          <button 
            type="submit" 
            disabled={loading || otp.length !== 6}
            className={`w-full py-3 px-4 rounded-md shadow-lg text-lg font-bold text-white transition-all duration-300 ${
              loading || otp.length !== 6 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-krossover-blue hover:bg-krossover-orange hover:-translate-y-1'
            }`}
          >
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </form>

        <div className="mt-6 text-center border-t border-gray-100 pt-6">
          <p className="text-sm text-gray-600 font-poppins mb-3">Didn't receive the code?</p>
          <button
            onClick={handleResend}
            disabled={resendLoading || countdown > 0}
            className={`text-sm font-medium ${
              countdown > 0 ? 'text-gray-400 cursor-not-allowed' : 'text-krossover-orange hover:underline'
            }`}
          >
            {resendLoading ? 'Sending...' : countdown > 0 ? `Resend in ${countdown}s` : 'Resend OTP'}
          </button>
          
          <div className="mt-4">
            <Link to="/login" className="text-sm text-gray-500 hover:text-krossover-blue">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTPPage;