// components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading, user } = useAuth();

  console.log('🛡️ ProtectedRoute - isAuthenticated:', isAuthenticated);
  console.log('🛡️ ProtectedRoute - loading:', loading);
  console.log('🛡️ ProtectedRoute - user:', user);
  console.log('🛡️ ProtectedRoute - localStorage token:', localStorage.getItem('access_token'));
  console.log('🛡️ ProtectedRoute - localStorage userName:', localStorage.getItem('userName'));

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    console.log('🛡️ NOT AUTHENTICATED - Redirecting to login');
    return <Navigate to="/login" replace />;
  }

  console.log('🛡️ AUTHENTICATED - Rendering protected content');
  return children;
};

export default ProtectedRoute;