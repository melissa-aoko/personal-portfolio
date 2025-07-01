import React from "react";
import { Mortarboard } from "react-bootstrap-icons";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png"

export const Education = () => {
  return (
    <section className="education" id="education">
    
      <Container>
        <Row className="align-items-center">
          <Col>
            <div className="education-box">
              <Mortarboard size={50} className="edu-icon" />
              <h2>Education</h2>
              <h4>Computer Science</h4>
              <p>University of Calgary</p>
              <p>Expected: June 2027</p>
              <p>GPA: 3.3 / 4.0</p>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
