import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function ContactComponent() {
  return (
    <div className="contact-container-bg">
      <Container className="contact-component">
        <Row>
          <Col xs={12} md={6}>
            <h1>FOODO</h1>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known.Lorem ipsum, or
              lipsum as it is sometimes known.
            </p>
            <div>
              <a href="/"><span className="fa fa-facebook-square"></span></a>
              <a href="/"><span className="fa fa-instagram"></span></a>
              <a href="/"><span className="fa fa-linkedin-square"></span></a>
            </div>
          </Col>
          <Col xs={12} md={3}>
            <b>Links</b>
            <br />
            <br />
            <h6><a href="/">Overview</a></h6>
            <h6><a href="/">Social Media</a></h6>
            <h6><a href="/">Contact</a></h6>
          </Col>
          <Col xs={12} md={3}>
            <b>Company</b>
            <br />
            <br />
            <h6><a href="/">Overview</a></h6>
            <h6><a href="/">Social Media</a></h6>
            <h6><a href="/">Contact</a></h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactComponent;
