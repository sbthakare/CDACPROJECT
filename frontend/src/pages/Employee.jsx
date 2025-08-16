import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import { FaCheckCircle } from 'react-icons/fa'; // Import Font Awesome checkmark icon
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import CarItem from '../components/UI/JobItem';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import carData from '../assets/data/jobData';
// import userData from '../assets/data/userData';
export default function Employee() {
  // const [user, setUser] = useState(userData || { name: 'Guest' });
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };
  return (
    <div>
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
                <Link  className="nav-link" to="/agentprofile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cars">
                  View Task
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
      
      <div className="text-center my-4">
        <h4 className="text-success d-flex align-items-center justify-content-center">
          <FaCheckCircle className="me-2" /> {/* Checkmark icon */}
          Logged in successfully
        </h4>
      </div>

      <Helmet title="Jobs">
      <CommonSection title=" job Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                   <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Link to="/addnew">
          <button type="button" className="btn btn-warning">Add New job</button>
        </Link>
      </div>
    </div>
  );
}