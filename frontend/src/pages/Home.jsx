import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import FindjobForm from "../components/UI/FindJobForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import jobData from "../assets/data/jobData";
import jobItem from "../components/UI/JobItem";
import BecomeClientSection from "../components/UI/BecomeClientSection";
import Testimonial from "../components/UI/Testimonial";

import BlogList from "../components/UI/BlogList";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best Job here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindjobForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>

      <div className="container mt-5">
  <h2 className="text-center">Why Paarsh Infotech ?</h2> <br />
  <div className="row">
    <div className="col-md-3 text-center">
      <div className="card border-primary">
        <div className="card-body">
          <h4 className="card-title">Learning & Growth</h4>
          <p className="card-text">Gain hands-on experience and learn from industry experts in real-world projects.</p>
        </div>
      </div>
    </div>
    <div className="col-md-3 text-center">
      <div className="card border-primary">
        <div className="card-body">
          <h4 className="card-title">Internship Opportunities</h4>
          <p className="card-text">Get the chance to work as an intern, enhancing your resume with valuable industry experience.</p>
        </div>
      </div>
    </div>
    <div className="col-md-3 text-center">
      <div className="card border-primary">
        <div className="card-body">
          <h4 className="card-title">Skill Development</h4>
          <p className="card-text">Develop technical and soft skills that will set you apart in the competitive job market.</p>
        </div>
      </div>
    </div>
    <div className="col-md-3 text-center">
      <div className="card border-primary">
        <div className="card-body">
          <h4 className="card-title">Career Advancement</h4>
          <p className="card-text">Access job placement support and career guidance to help launch your professional career.</p>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* =========== job offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">See </h6>
              <h2 className="section__title">Jobs openings</h2>
            </Col>

            {jobData.slice(0, 6).map((item) => (
              <jobItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      {/* =========== become a driver section ============ */}
      <BecomeClientSection />

      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our Employee says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* =============== blog section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>
            <BlogList />
          </Row>
        </Container>
      </section>

      
    </Helmet>
  );
};

export default Home;
