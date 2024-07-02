import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import download from "../../Assets/download.jpg"; // Adjust the path relative to Home2.js

function Home2() {
    return(
        <Container>
            <Container fluid className="home-about-section" id="about">
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              TECH STACK <span> </span> 
            </h1>
            <p className="home-about-body">
              Over 1+ years of professional experience as a software developer, specializing in &nbsp;
              <i>
                <b className="blue">C# and JavaScript  </b> and
                for developing robust and scalable
                enterprise applications{" "}
              </i>
              <br />
              <br />
              Proficient in utilizing &nbsp;
              <i>
                <b className="blue">React.js, .NET frameworks, and Java </b> and
                for efficient task automation and application deployment{" "}
              </i>
              <br />
              <br />
              Extensive knowledge and hands-on experience in building web applications using &nbsp;
              <i>
                <b className="blue">React, .NET Core, RESTful Web Services, and Entity Frameworks</b> and
                for seamless integration with backend systems.{" "}
              </i>
              <br />
              <br />
              Skilled in utilizing cloud platforms such as &nbsp;
              <i>
                <b className="blue">AWS and Azure </b> and
                for efficient application management and deployment{" "}
              </i>
              <br />
              <br />
              Demonstrated expertise in  &nbsp;
              <i>
                <b className="blue">machine learning, cloud computing, and data analysis</b> and
                with a strong academic background and industryrecognized certifications.{" "}
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="text-center" style={{ paddingBottom: 100 }}>
                    <img
                        src={download}
                        alt="home pic"
                        className="img-fluid"
                        style={{ maxHeight: "600px" }}
                    />
                </Col>
        </Row>
        </Container>
        </Container>
    );
}
export default Home2;