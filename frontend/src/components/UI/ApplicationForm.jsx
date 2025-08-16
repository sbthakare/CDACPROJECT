import React, { useState } from "react";
import "../../styles/application-form.css";

import axios from "axios";
import { Link } from "react-router-dom";

const ApplicationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState(null);
  const [jobPosition, setJobPosition] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("resume", resume);
    formData.append("jobPosition", jobPosition);

    try {
      const response = await axios.post("http://localhost:7350/application/submit", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="main">
      <div className="register">
        <h2>Job Application</h2>
        <form id="register" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name:</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
          />
          <br /><br />

          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
          />
          <br /><br />

          <label htmlFor="phone">Phone Number:</label>
          <br />
          <input
            type="tel"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Your Phone Number"
          />
          <br /><br />

          <label htmlFor="jobPosition">Job Position:</label>
          <br />
          <input
            type="text"
            name="jobPosition"
            id="jobPosition"
            value={jobPosition}
            onChange={(e) => setJobPosition(e.target.value)}
            placeholder="Enter Desired Job Position"
          />
          <br /><br />

          <label htmlFor="resume">Upload Resume:</label>
          <br />
          <input
            type="file"
            name="resume"
            id="resume"
            onChange={(e) => setResume(e.target.files[0])}
          />
          <br /><br />

          <div className="submit-btn text-end mt-5">
            <button type="submit">Submit Application</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
