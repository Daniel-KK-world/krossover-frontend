import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tokenParam = params.get('token');
    if (!tokenParam) {
      navigate('/login');
    } else {
      setToken(tokenParam);
    }
  }, [location, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/v1/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, new_password: newPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Failed to reset password');
      }

      setSuccess(true);
      setTimeout(() => navigate('/login'), 3000);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-150px)]">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-2xl border border-gray-100 text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-3xl font-anton text-green-600 mb-2">Password Reset!</h2>
          <p className="text-gray-600 font-poppins">Your password has been reset successfully. Redirecting to login...</p>
          <div className="mt-6">
            <Link to="/login" className="text-krossover-orange hover:underline font-medium">
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
          <h2 className="text-4xl font-anton text-krossover-blue">New Password</h2>
          <p className="text-gray-500 font-poppins mt-2">
            Enter your new password below
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-md">
            <p className="text-sm text-red-700 font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 font-poppins">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              minLength="8"
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-krossover-orange focus:border-transparent transition duration-200"
              placeholder="••••••••"
            />
            <p className="text-xs text-gray-500 mt-2">
              Must contain an uppercase, lowercase, number, and special character.
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-krossover-orange focus:border-transparent transition duration-200"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 rounded-md shadow-lg text-lg font-bold text-white transition-all duration-300 ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-krossover-blue hover:bg-krossover-orange hover:-translate-y-1'
            }`}
          >
            {loading ? 'Resetting...' : 'Reset Password'}
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

export default ResetPasswordPage;