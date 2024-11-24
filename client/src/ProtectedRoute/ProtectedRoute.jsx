import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, requiresAuth = true }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const location = useLocation();

    if (requiresAuth && !isAuthenticated) {
        // Redirect to login if not authenticated
        return <Navigate to='/auth' state={{ from: location }} replace />;
    }

    if (!requiresAuth && isAuthenticated && location.pathname === '/auth') {
        // Redirect to home if authenticated and accessing the auth page
        return <Navigate to='/' replace />;
    }

    return children;
};

export default ProtectedRoute;
