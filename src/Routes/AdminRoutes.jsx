import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../hooks/useAdmin";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner text-neutral"></span>
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
