import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import "../styles/userDashboard.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export function CustomerDashboard() {
  const [user, setUser] = useState({ name: 'Guest' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const username = localStorage.getItem('username');
        if (username) {
          const response = await axios.get(`http://localhost:7350/user/getbyName/${username}`);
          console.log('User profile data:', response.data); // Log the response data to check
          setUser(response.data);
        } else {
          console.error('Username not found in localStorage');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };


    fetchUserProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <div className="dashboard">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* Optionally add some other content or leave it empty */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/userProfile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cars">
                  View jobs
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <h1 className="welcome-message">Welcome, {user.name}!</h1>
        <p className="description">
          You are now logged in. You can view jobs or Applied a job now.
        </p>
        <button
          className="btn btn-primary view-cars-btn"
          onClick={() => navigate('/cars')}
        >
          View Applied jobs
        </button>
      </div>
    </div>
  );
}

export default CustomerDashboard;
