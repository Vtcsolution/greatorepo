// src/components/admin/AdminLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto">
          <Outlet /> {/* Renders child routes */}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;