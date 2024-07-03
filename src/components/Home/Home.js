import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import Type from "./Type";
function Home() {
 return(
    <section>
        <Container fluid className ="home-section" id="home">
            <Container fluid className = "home-content">
                <Row>
                    <Col  md={8} className="home-header" >
                    <h1 style={{ paddingBottom: 15 }} className="heading">
                HELLOOOOO!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> BADRI MYLAVARAPU</strong>
              </h1>

              

                    </Col>
                
                </Row>

            </Container>
          
            <Type/>
            <Home2 />
        </Container>
      
    </section>
 );
}
export default Home;