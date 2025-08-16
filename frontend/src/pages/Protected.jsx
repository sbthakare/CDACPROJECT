
import React from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const Protected = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" />;
  }

  const validateToken = async () => {
    try {
      const response = await axios.post('/api/validate-token', { token });
      if (!response.data.valid) {
        localStorage.removeItem('token');
        return <Navigate to="/login" />;
      }
    } catch (error) {
      console.error(error);
      localStorage.removeItem('token');
      return <Navigate to="/login" />;
    }
  };

  validateToken();

  return (
    <div>
      <h1>Protected Content</h1>
      
    </div>
  );
};

export default Protected;