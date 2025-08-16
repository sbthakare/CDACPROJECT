import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/JobItem";
import carData from "../assets/data/jobData";
import { Link } from "react-router-dom";

const JobListing = () => {
  return (
    <Helmet title="Cars">
      <CommonSection title="Jobs Listing" />

      <section>
        <Container>
          <Row>
           

            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default JobListing;
