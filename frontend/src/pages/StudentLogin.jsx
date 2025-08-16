import React, { useState } from 'react';
import "../styles/studentLogin.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const StudentLogin = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Customer');
  const [showRegister, setShowRegister] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleRegister = () => {
    navigate('/register'); 
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(username, password, role);

    axios.post('http://localhost:7350/user/login', { username, password, role })
      .then(result => {
        // If role is admin or agent, show a warning message
        if (role === 'admin' || role === 'agent') {
          toast.warning("You are not authorized as a Customer");
        } else if (role === 'Customer') {
          // Store the username in localStorage after successful login
          localStorage.setItem('username', username);

          // Show success message and then redirect after a delay
          toast.success('Login Successful!', {
            className: 'custom-toast-success',
          });

          // Delay redirection to ensure the toast is visible
          setTimeout(() => {
            navigate('/CustomerDashboard');
          }, 1500); // Adjust the delay (1500ms) as needed
        }
      })
      .catch(error => {
        // Extract error message from the response
        const errorMessage = error.response?.data || 'Login Failed! Please try again.';
        console.error('Login failed:', error);
        toast.error(errorMessage, {
          className: 'custom-toast-error',
        });
      });
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    // Handle forgot password logic here
    console.log("Forgot password for username:", username);
  };

  return (
    <div className="login-container">
      <h2>Student Login</h2>

      <form onSubmit={handleLogin}>
        <div className="form-group">
          <ToastContainer position="bottom-center" />
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="login-links">
        <p>
          Don't have an account?{' '}
          <button onClick={handleRegister}>Register</button>
        </p>
        <p>
          Forgot password?{' '}
          <span onClick={() => setShowForgotPassword(true)}>Forgot Password</span>
        </p>
      </div>

      {showRegister && (
        <div className="register-form">
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </form>
        </div>
      )}

      {showForgotPassword && (
        <div className="forgot-password-form">
          <h2>Forgot Password</h2>
          <form onSubmit={handleForgotPassword}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <button type="submit">Send Reset Link</button>
          </form>
        </div>
      )}
    </div>
  );
};
