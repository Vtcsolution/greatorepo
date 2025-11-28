import React from "react";
import { Navigate } from "react-router-dom";
import { useAdmin } from "../contexts/AdminContext";

const ProtectedAdminRoute = ({ children }) => {
  const { admin, loading } = useAdmin();

  if (loading) return null; // or return a loader
  if (!admin) return <Navigate to="/admin/login" replace />;

  return children;
};

export default ProtectedAdminRoute;
