// Logout.js
import React from 'react';
import { Navigate } from 'react-router-dom';

export const Logout = () => {
  localStorage.removeItem('token');
  return <Navigate to="/login" />;
};

export default Logout;