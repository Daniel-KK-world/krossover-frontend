import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    password: ''
  });
  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 422 && data.detail) {
           const validationError = data.detail[0]?.msg || "Invalid input";
           throw new Error(`Validation Error: ${validationError}`);
        }
        throw new Error(data.detail || 'Failed to register. Please try again.');
      }

      navigate('/login');

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
          <h2 className="text-4xl text-krossover-blue font-anton uppercase">
            Register
          </h2>
          <p className="text-gray-500 font-poppins mt-2">
            Join us for premium transport services.
          </p>
        </div>
        
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-md">
            <p className="text-sm text-red-700 font-medium">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 font-poppins">
          
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              minLength="2"
              className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-krossover-orange focus:border-transparent transition duration-200"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-krossover-orange focus:border-transparent transition duration-200"
              placeholder="johndoe@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone_number" className="block text-sm font-semibold text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
              minLength="10"
              maxLength="15"
              className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-krossover-orange focus:border-transparent transition duration-200"
              placeholder="055 232 0210"
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
              value={formData.password}
              onChange={handleChange}
              required
              minLength="8"
              className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-krossover-orange focus:border-transparent transition duration-200"
              placeholder="••••••••"
            />
            <p className="text-xs text-gray-500 mt-2 font-medium">
              Must contain an uppercase, lowercase, number, and special character.
            </p>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className={`w-full flex justify-center py-3 px-4 mt-2 border border-transparent rounded-md shadow-lg text-lg font-bold text-white transition-all duration-300 ${
              loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-krossover-blue hover:bg-krossover-orange hover:-translate-y-1'
            }`}
          >
            {loading ? 'Registering...' : 'Create Account'}
          </button>
        </form>

        {/* UPDATED FOOTER WITH OUTLINE BUTTON */}
        <div className="mt-8 text-center border-t border-gray-100 pt-6">
          <p className="text-sm text-gray-600 font-poppins mb-4">
            Already have an account?
          </p>
          <Link 
            to="/login" 
            className="block w-full py-2.5 px-4 border-2 border-krossover-orange rounded-md shadow-sm text-md font-bold text-krossover-orange bg-white hover:bg-krossover-orange hover:text-white transition-all duration-300"
          >
            Log In Here
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default RegisterPage;