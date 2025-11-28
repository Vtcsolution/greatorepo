import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAdmin } from '../contexts/AdminContext';

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAdmin();

  const handleChange = (e) => {
    const value = e.target.value.trim(); // Strip leading/trailing spaces
    setFormData({ ...formData, [e.target.name]: value });
    setError(''); // Clear error on input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/admin/login`, formData);
      const { token, admin } = response.data;
      
      // Use full admin data (includes name if set)
      login({ ...admin, name: admin.name || admin.email }, token);
      
      navigate('/admin-dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo/Card Header */}
        <div className="text-center">
          <img
            src="/images/logo.jpeg"
            alt="Admin Logo"
            className="mx-auto h-16 w-16 rounded-full object-cover mb-4"
          />
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Admin Login</h2>
          <p className="text-gray-600 text-sm">Sign in to access the admin dashboard</p>
        </div>

        {/* Form Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8FA282] focus:border-[#8FA282] placeholder-gray-400 text-gray-900 transition duration-200"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8FA282] focus:border-[#8FA282] placeholder-gray-400 text-gray-900 transition duration-200"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg">
                <span className="text-sm">{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-[#8FA282] text-white rounded-lg font-medium hover:bg-[#7A8B72] focus:ring-2 focus:ring-[#8FA282]/50 focus:outline-none transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>

        {/* Footer Link */}
        <div className="text-center">
          <button
            onClick={() => navigate('/')}
            className="text-[#8FA282] hover:text-[#7A8B72] text-sm font-medium underline"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;