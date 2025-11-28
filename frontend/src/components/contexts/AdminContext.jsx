// contexts/AdminContext.js (New frontend context for admin auth)
import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('adminToken'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      // Decode token to get user info (simplified - in real app, verify with API)
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setAdmin({ id: payload.id, email: payload.email });
      } catch {
        logout();
      }
    }
    setLoading(false);
  }, [token]);

  const login = (userData, newToken) => {
    setAdmin(userData);
    setToken(newToken);
    localStorage.setItem('adminToken', newToken);
  };

  const logout = () => {
    setAdmin(null);
    setToken(null);
    localStorage.removeItem('adminToken');
  };

  const updateProfile = (updatedAdmin) => {
    setAdmin(updatedAdmin);
  };

  return (
    <AdminContext.Provider value={{ admin, token, login, logout, updateProfile, loading }}>
      {children}
    </AdminContext.Provider>
  );
};