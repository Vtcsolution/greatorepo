// src/pages/AdminProfile.jsx (Fixed import path and minor fixes)
import React, { useState } from 'react';
import { Save, Mail, Lock, AlertTriangle, CheckCircle } from 'lucide-react';
import { useAdmin } from '../../components/contexts/AdminContext'; // Fixed relative path from pages/ to components/contexts/
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

const AdminProfile = () => {
  const { admin, updateProfile, loading: authLoading } = useAdmin();
  const [formData, setFormData] = useState({
    email: admin?.email || '',
    oldPassword: '',
    newPassword: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/admin/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess('Profile updated successfully!');
        updateProfile({ id: admin.id, email: result.admin.email }); // Update context
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(result.message || 'Failed to update profile');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (authLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#e1e1e1] via-white to-[#e1e1e1]">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Update Profile</h1>
              <p className="text-gray-600">Manage your admin account details securely.</p>
            </div>

            {/* Success/Error Messages */}
            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <p className="text-green-700">{success}</p>
              </div>
            )}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <p className="text-red-700">{error}</p>
              </div>
            )}

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#e1e1e1] p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2e7d7b] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Password Section - Only show if changing password */}
                <div className="space-y-2">
                  <div>
                    <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700 mb-2">
                      Old Password (Required for password change)
                    </label>
                    <input
                      type="password"
                      id="oldPassword"
                      name="oldPassword"
                      value={formData.oldPassword}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2e7d7b] focus:border-transparent transition-all duration-200"
                      placeholder="Enter old password"
                    />
                  </div>
                  <div>
                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">
                      New Password (Optional)
                    </label>
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2e7d7b] focus:border-transparent transition-all duration-200"
                      placeholder="Enter new password (min 6 chars)"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-[#2e7d7b] hover:bg-[#256967] text-white font-semibold rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <Save className="w-5 h-5" />
                  <span>{isSubmitting ? 'Updating...' : 'Update Profile'}</span>
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminProfile;