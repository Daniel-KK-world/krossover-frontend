// pages/ServiceDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReviewSection from '../components/ReviewSection';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/services/${id}`);
        if (!response.ok) {
          throw new Error('Service not found');
        }
        const data = await response.json();
        setService(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchService();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-krossover-orange"></div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Service Not Found</h2>
        <p className="text-gray-600 mb-6">{error || 'The service you are looking for does not exist.'}</p>
        <button
          onClick={() => navigate('/services')}
          className="bg-krossover-blue hover:bg-krossover-orange text-white px-6 py-3 rounded-md font-bold transition-colors"
        >
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen bg-white">
      {/* Service Hero */}
      <div className="relative bg-gradient-to-r from-krossover-blue to-blue-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <button
            onClick={() => navigate('/services')}
            className="text-white/80 hover:text-white mb-6 inline-flex items-center gap-2 transition-colors"
          >
            ← Back to Services
          </button>
          
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-anton mb-4">{service.name}</h1>
              <p className="text-xl text-white/90 max-w-2xl">{service.description}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center min-w-[200px]">
              <p className="text-sm text-white/70 mb-1">Price</p>
              <p className="text-3xl font-bold">GHS {parseFloat(service.base_price).toFixed(2)}</p>
              <button
                onClick={() => navigate('/confirm-booking', { state: { service } })}
                className="mt-4 w-full bg-krossover-orange hover:bg-orange-600 text-white px-6 py-3 rounded-md font-bold transition-colors shadow-md"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <ReviewSection serviceId={id} serviceName={service.name} />
      </div>
    </main>
  );
};

export default ServiceDetailPage;