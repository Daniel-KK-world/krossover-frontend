import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../config';  // ← ADD THIS

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/auth/forgot-password`, {  // ← FIXED
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Something went wrong');
      }

      setSubmitted(true);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-150px)]">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-2xl border border-gray-100 text-center">
          <div className="text-6xl mb-4">📧</div>
          <h2 className="text-3xl font-anton text-krossover-blue mb-2">Check Your Email</h2>
          <p className="text-gray-600 font-poppins">
            If an account exists for <strong className="text-krossover-blue">{email}</strong>, 
            you'll receive a password reset link.
          </p>
          <p className="text-sm text-gray-500 mt-4">The link expires in 15 minutes.</p>
          <Link to="/login" className="mt-6 inline-block text-krossover-orange hover:underline font-medium">
            Back to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-grow flex items-center justify-center bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-150px)]">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-anton text-krossover-blue">Reset Password</h2>
          <p className="text-gray-500 font-poppins mt-2">
            Enter your email and we'll send you a reset link
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-md">
            <p className="text-sm text-red-700 font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 font-poppins">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-krossover-orange focus:border-transparent transition duration-200"
              placeholder="you@example.com"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 rounded-md shadow-lg text-lg font-bold text-white transition-all duration-300 ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-krossover-blue hover:bg-krossover-orange hover:-translate-y-1'
            }`}
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-gray-100 pt-6">
          <Link to="/login" className="text-sm text-gray-600 hover:text-krossover-blue font-medium">
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;