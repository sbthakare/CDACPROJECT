import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import JobListing from "../pages/JobListing";
import JobDetails from "../pages/JobDetails";
// import Blog from "../pages/Blog";
// import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import { Login } from "../pages/Login";
import { AdminLogin } from "../pages/AdminLogin";
import {EmployeeLogin } from "../pages/EmployeeLogin";
import RegistrationForm from "../pages/RegistrationForm";
import UserProfile from "../pages/UserProfile";
import Agent from "../pages/Employee";
import Protected from "../pages/Protected";
import Logout from "../pages/Logout";
import StudentDashboard from "../pages/StudentDashboard";
import { StudentLogin } from "../pages/StudentLogin";
import AddNewJob from "../pages/Addnewjob";
import { ClientLogin } from "../pages/ClientLogin";

const Routers = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<JobListing />} />
        <Route path="/cars/:slug" element={<JobDetails />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/customerLogin" element={<StudentLogin />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/clientLogin" element={<ClientLogin />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/agent" element={<Agent />}/>
       <Route path="/addnew" element={<AddNewJob/>}/>
        <Route path="*" element={<NotFound />} />
        <Route path="/protected" element={<Protected />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/studentDashboard" element={<StudentDashboard />} />
        <Route path="/EmployeeLogin" element={<EmployeeLogin />} />
      </Routes>
   
  );
};

export default Routers;
