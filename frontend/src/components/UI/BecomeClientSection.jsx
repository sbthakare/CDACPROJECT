import React from "react";
import "../../styles/become-client.css";
import { Container, Row, Col } from "reactstrap";

import Img from "../../assets/all-images/Get.jpg";
import { useNavigate } from "react-router-dom";

const BecomeClientSection = () => {

  const navigate = useNavigate();

  const handleBecomeClient = () => {
    navigate('/clientLogin'); 
  };

  return (
    <section className="become__client">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__client-img">
            <img src={Img} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__client-title">
              Do You Want to work With Us? So Don't Be Late
            </h2>

            <button onClick={handleBecomeClient} className="btn become__client-btn mt-4">
              Get in Touch
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeClientSection;
