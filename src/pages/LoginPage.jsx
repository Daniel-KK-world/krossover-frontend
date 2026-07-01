import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Failed to login. Please try again.');
      }

      // Store credentials and notify the Navbar to update
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('userName', data.user_name); 
      window.dispatchEvent(new Event("auth-change")); 

      navigate('/services');

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-grow flex items-center justify-center bg-gray-50 py-24 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-150px)]">
      
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
        
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-krossover-blue font-anton uppercase tracking-wide">
            Welcome Back
          </h2>
          <p className="text-gray-500 font-poppins mt-2">
            Log in to manage your bookings.
          </p>
        </div>
        
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-md">
            <p className="text-sm text-red-700 font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 font-poppins">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-krossover-orange focus:border-transparent transition duration-200"
              placeholder="adam123@gmail.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-krossover-orange focus:border-transparent transition duration-200"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-lg text-lg font-bold text-white transition-all duration-300 ${
              loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-krossover-orange hover:bg-krossover-blue hover:-translate-y-1'
            }`}
          >
            {loading ? 'Authenticating...' : 'Log In'}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-gray-100 pt-6">
          <p className="text-sm text-gray-600 font-poppins mb-4">
            Don't have an account?
          </p>
          <Link 
            to="/register" 
            className="block w-full py-2.5 px-4 border-2 border-krossover-blue rounded-md shadow-sm text-md font-bold text-krossover-blue bg-white hover:bg-krossover-blue hover:text-white transition-all duration-300"
          >
            Register Here
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default LoginPage;