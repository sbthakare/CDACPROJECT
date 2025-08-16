import React, { useState, useEffect } from 'react';
import '../styles/userProfile.css';
import user from '../assets/data/userData';

function EmpProfile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile</h1>
      <div className="profile-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>
      <div className="profile-actions">
        <button className="btn btn-primary" onClick={() => console.log('Edit Profile')}>
          Edit Profile
        </button>
        <button className="btn btn-danger" onClick={() => handleLogout()}>
          Logout
        </button>
      </div>
    </div>
  );
}

const handleLogout = () => {
  localStorage.removeItem('user');
  window.location.href = '/login';
};

export default EmpProfile;