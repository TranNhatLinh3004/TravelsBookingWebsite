import React from "react";
import "./common-section.css";
import { Col, Container } from "reactstrap";

function CommonSection({ title }) {
  return (
    <section className="common__section">
      <Container>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Container>
    </section>
  );
}

export default CommonSection;
