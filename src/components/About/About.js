import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
    return(
        <Container fluid className="about-section">
             <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="blue">I'M</strong>
            </h1>
            </Col>
            </Row>
        </Container>
    );
}
export default About;