import React from 'react';
import useAuth from '../Hook/useAuth';
import { Navigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import useAxiosUser from '../Hook/useAxiosUser';

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [users ,isLoading] = useAxiosUser() || [];

  // Check if the logged-in user is an admin
  const admin = users && users.find(userRole => userRole.role === 'admin' && userRole.email === user.email);
  console.log(admin);

  // Show a loading spinner while authentication data is loading
  if (loading && isLoading) {
    return <Loading />;
  }

  // Allow access if the user is an admin
  if (user?.email && admin?.role === 'admin') {
    return children;
  }

  // Redirect to the home page if the user is not an admin
  return <Navigate to="/" />;
};

export default AdminRoute;
