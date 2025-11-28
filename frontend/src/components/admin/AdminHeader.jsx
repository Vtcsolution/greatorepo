// components/admin/AdminHeader.jsx (Simplified: Only admin name and logout button)
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LogOut } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

const AdminHeader = () => {
  const { admin, token, logout } = useAdmin();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAdminProfile = async () => {
      if (!token || !admin) return;
      setLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/admin/profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        // Assuming context has a way to update full admin (e.g., via updateProfile or setAdmin)
        // For simplicity, if context exposes setAdmin, use: setAdmin(response.data.admin);
        // Otherwise, extend context as noted previously
      } catch (error) {
        console.error('Error fetching admin profile:', error);
        if (error.response?.status === 401) logout();
      } finally {
        setLoading(false);
      }
    };

    fetchAdminProfile();
  }, [token, admin, logout]);

  const handleLogout = async () => {
    if (loading) return;
    setLoading(true);
    try {
      // Optional: Call server logout endpoint
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/admin/logout`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.error('Logout API error:', error);
      // Continue logout even if API fails (stateless JWT)
    } finally {
      logout(); // Clear context and localStorage
      navigate('/admin/login'); // Redirect to admin login
    }
  };

  if (!admin) {
    return null;
  }

  const displayName = admin.name || admin.email;

  return (
    <header className="bg-white shadow-sm border-b border-[#e1e1e1] sticky top-0 z-20">
      <div className="px-6 py-4">
<div className="flex justify-end items-center">
          {/* Simplified: No left section */}

          {/* Right Section: Only name and logout */}
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">{displayName}</p>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors duration-200"
              title="Logout"
              disabled={loading}
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;