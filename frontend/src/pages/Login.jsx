import React from 'react'
import "../styles/login.css"
import { useNavigate } from 'react-router-dom';


export const Login = () => {
  const navigate = useNavigate();

  const handleStudentLogin = () => {
    navigate('/customerLogin'); 
  };

  const handleAdminLogin = () => {
    navigate('/adminLogin'); 
  };

  const handleEmployeeLogin = () => {
    navigate('/EmployeeLogin'); 
  };

  const handleClientLogin = () => {
    navigate('/clientLogin'); 
  };

  return (
    <div className="login-page container">
      <div className="background-image">
        <img src="https://images.unsplash.com/photo-1498887960847-2a5e46312788?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Car Image" />
      </div>

      <div className="login-buttons d-flex justify-content-around">
        <button className="customer-login  btn-lg rounded-pill shadow-sm" onClick={handleStudentLogin}>Student Login</button> <br />
        <button className="admin-login btn-lg rounded-pill shadow-sm" onClick={handleAdminLogin}>Admin Login</button> <br></br>
        <button className="agent-login btn-lg rounded-pill shadow-sm" onClick={handleEmployeeLogin}>Employee Login</button>
        <button className="client-login btn-lg rounded-pill shadow-sm" onClick={handleClientLogin}>Client Login</button>
      </div>
    </div>
  )
}