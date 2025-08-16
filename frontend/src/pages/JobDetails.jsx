import React, { useEffect } from "react";
import jobData from "../assets/data/jobData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import ApplicationForm from "../components/UI/ApplicationForm";

const JobDetails = () => {
  const { slug } = useParams();

  const singleJobItem = jobData.find((item) => item.jobTitle === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleJobItem]);

  return (
    <Helmet title={singleJobItem.jobTitle}>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="job__info">
                <h2 className="section__title">{singleJobItem.jobTitle}</h2>
                <h6 className="company__name">{singleJobItem.company}</h6>
                <p className="section__description">{singleJobItem.description}</p>

                <div className="job__details mt-3">
                  <span>
                    <i className="ri-map-pin-line"></i> {singleJobItem.location}
                  </span>
                  <span>
                    <i className="ri-money-dollar-circle-line"></i> ₹{singleJobItem.salary} / month
                  </span>
                  <span>
                    <i className="ri-time-line"></i> {singleJobItem.jobType}
                  </span>
                </div>
              </div>
            </Col>

            <Col lg="4" className="mt-5">
              <div className="application-info mt-5">
                <ApplicationForm />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default JobDetails;
