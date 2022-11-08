import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (user) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;