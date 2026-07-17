// context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('🔍 AuthProvider - useEffect running');
    const token = localStorage.getItem('access_token');
    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');

    console.log('🔍 AuthProvider - token found:', token ? 'YES' : 'NO');
    console.log('🔍 AuthProvider - userName:', userName);
    console.log('🔍 AuthProvider - userEmail:', userEmail);

    if (token) {
      setUser({ 
        token, 
        name: userName || 'User', 
        email: userEmail || '' 
      });
      console.log('🔍 AuthProvider - user set:', { token, name: userName, email: userEmail });
    } else {
      console.log('🔍 AuthProvider - no token, user remains null');
    }
    setLoading(false);
    console.log('🔍 AuthProvider - loading set to false');
  }, []);

  const login = (token, userData) => {
    console.log('🔐 LOGIN CALLED');
    console.log('🔐 Token:', token);
    console.log('🔐 UserData:', userData);
    
    localStorage.setItem('access_token', token);
    localStorage.setItem('userName', userData.name || 'User');
    localStorage.setItem('userEmail', userData.email || '');
    
    setUser({ token, ...userData });
    
    console.log('🔐 User set in state:', { token, ...userData });
    console.log('🔐 localStorage token after set:', localStorage.getItem('access_token'));
    console.log('🔐 localStorage userName after set:', localStorage.getItem('userName'));
  };

  const logout = () => {
    console.log('🚪 LOGOUT CALLED');
    localStorage.removeItem('access_token');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    setUser(null);
    console.log('🚪 User cleared, localStorage cleared');
  };

  const isAuthenticated = !!user;
  console.log('🔍 AuthProvider - current isAuthenticated:', isAuthenticated);
  console.log('🔍 AuthProvider - current user:', user);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};