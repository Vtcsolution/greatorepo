// pages/AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import { BarChart3, Eye, FileText, MessageSquare, Users, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';

const AdminDashboard = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/stats`);
      if (response.ok) {
        const { data } = await response.json();
        // Map API data to stats cards with paths
        setStats([
          { 
            title: 'Total Blogs', 
            value: data.totalBlogs.toLocaleString(), 
            path: '/admin-dashboard/manage-blogs',
            icon: FileText, 
            color: 'text-[#2e7d7b]',
            bgColor: 'bg-[#2e7d7b]'
          },
          { 
            title: 'Total Contacts', 
            value: data.totalContacts.toLocaleString(), 
            path: '/admin-dashboard/emails',
            icon: Users, 
            color: 'text-[#256967]',
            bgColor: 'bg-[#256967]'
          },
          { 
            title: 'Total Chats', 
            value: data.totalChats.toLocaleString(), 
            path: '/admin-dashboard/chats',
            icon: MessageSquare, 
            color: 'text-[#1e5553]',
            bgColor: 'bg-[#1e5553]'
          },
        ]);
      } else {
        throw new Error('Failed to fetch stats');
      }
    } catch (err) {
      console.error('Error fetching stats:', err);
      setError('Failed to load dashboard stats');
      // Fallback to hardcoded stats with paths
      setStats([
        { 
          title: 'Total Blogs', 
          value: '1,234', 
          path: '/admin-dashboard/manage-blogs',
          icon: FileText, 
          color: 'text-[#2e7d7b]',
          bgColor: 'bg-[#2e7d7b]'
        },
        { 
          title: 'Total Contacts', 
          value: '567', 
          path: '/admin-dashboard/emails',
          icon: Users, 
          color: 'text-[#256967]',
          bgColor: 'bg-[#256967]'
        },
        { 
          title: 'Total Chats', 
          value: '890', 
          path: '/admin-dashboard/chats',
          icon: MessageSquare, 
          color: 'text-[#1e5553]',
          bgColor: 'bg-[#1e5553]'
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen bg-gradient-to-br from-[#e1e1e1] via-white to-[#e1e1e1] items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-[#2e7d7b] border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const StatCard = ({ stat }) => {
    const Icon = stat.icon;
    return (
      <Link to={stat.path} className="block">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e1e1e1] hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
          <div className="flex items-center justify-between">
            <div className={`p-3 rounded-xl ${stat.bgColor} bg-opacity-10`}>
              <Icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#e1e1e1] via-white to-[#e1e1e1]">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto p-6">
          {/* Error Alert */}
          {error && (
            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div className="flex-1">
                <p className="text-yellow-700 font-medium">Warning</p>
                <p className="text-yellow-600 text-sm mt-1">{error}</p>
              </div>
            </div>
          )}

          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
            {/* Blog Views Analytics */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e1e1e1]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Blog Views Analytics</h3>
                <button className="text-sm text-[#2e7d7b] font-medium transition-colors duration-200">
                  View Report
                </button>
              </div>
              <div className="h-64 bg-gradient-to-br from-[#e1e1e1] to-white rounded-xl flex flex-col items-center justify-center border border-[#e1e1e1]">
                <BarChart3 className="w-12 h-12 text-[#2e7d7b] mb-3" />
                <span className="text-gray-500 text-center">
                  Blog views chart will be rendered here
                </span>
                <span className="text-xs text-gray-400 mt-2">
                  Integration with Chart.js or Recharts
                </span>
              </div>
            </div>

            {/* Revenue Overview */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e1e1e1]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
                <button className="text-sm text-[#2e7d7b] font-medium transition-colors duration-200">
                  View Details
                </button>
              </div>
              <div className="h-64 bg-gradient-to-br from-[#e1e1e1] to-white rounded-xl flex flex-col items-center justify-center border border-[#e1e1e1]">
                <Eye className="w-12 h-12 text-[#2e7d7b] mb-3" />
                <span className="text-gray-500 text-center">
                  Revenue analytics chart
                </span>
                <span className="text-xs text-gray-500 mt-2">
                  Real-time data visualization
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;