// components/admin/AdminSidebar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Building2,
  Users,
  Heart,
  BarChart3,
  Settings,
  Menu,
  X,
  ChartArea,
  MessageCircle,
} from 'lucide-react';

const AdminSidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      href: '/admin-dashboard',
      active: location.pathname === '/admin-dashboard',
    },
    {
      title: 'Add Blog',
      icon: FileText,
      href: '/admin-dashboard/add-blog',
      active: location.pathname === '/admin-dashboard/add-blog',
    },
    {
      title: 'Manage Blogs',
      icon: Building2,
      href: '/admin-dashboard/manage-blogs',
      active: location.pathname === '/admin-dashboard/manage-blogs',
    },
    {
      title: 'Chat History',
      icon: MessageCircle,
      href: '/admin-dashboard/chats',
      active: location.pathname === '/admin-dashboard/chats',
    },
    {
      title: 'Emails',
      icon: Heart,
      href: '/admin-dashboard/emails',
      active: location.pathname === '/admin-dashboard/emails',
    },
  
    {
      title: 'Update Profile',
      icon: Settings,
      href: '/admin-dashboard/update-profile',
      active: location.pathname === '/admin-dashboard/update-profile',
    },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-6 left-6 z-50 p-3 bg-[#2e7d7b] text-white rounded-xl shadow-lg hover:bg-[#256967] transition-colors duration-200"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Overlay (Mobile) - This should close sidebar when clicked */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar - Increased z-index to be above overlay */}
      <aside
        className={`
          bg-white border-r border-[#e1e1e1] w-80 fixed h-full z-50 overflow-y-auto
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:z-auto
          shadow-xl lg:shadow-none
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6 border-b border-[#e1e1e1]">
            <Link 
              to="/admin-dashboard" 
              className="flex items-center space-x-3"
              onClick={handleLinkClick}
            >
              <div className="w-10 h-10 bg-[#2e7d7b] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
                <p className="text-sm text-gray-500">Dashboard</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={index}
                  to={item.href}
                  onClick={handleLinkClick}
                  className={`
                    group flex items-center px-4 py-3 text-sm font-medium rounded-xl 
                    transition-all duration-200 transform hover:scale-[1.02]
                    ${item.active
                      ? 'bg-[#2e7d7b] text-white shadow-lg shadow-[#2e7d7b]/25'
                      : 'text-gray-600 hover:bg-[#e1e1e1] hover:text-gray-900'
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 mr-3 flex-shrink-0 ${item.active ? 'text-white' : 'text-gray-400'}`} />
                  {item.title}
                  {item.active && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-[#e1e1e1]">
            <div className="bg-[#e1e1e1] rounded-lg p-3 text-center">
              <p className="text-xs text-gray-600">
                Admin Panel v1.0
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;