import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import aws from "../../Assets/aws.jpg";
import download from "../../Assets/download.jpg"; // Adjust the path relative to About.js
import Techstack from './Techstack';
import Toolstack from './Toolstack';



const carouselStyle = {
    maxHeight: '33vh',  // Maximum height of 33% of the viewport height
    width: '100%',      // Full width of the viewport
    overflow: 'hidden', // Hide overflow to prevent images from exceeding the height
};
function Hobby() {
    return (
        <div>
            <Carousel style={carouselStyle}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={aws}
                        alt="First slide"
                        style={{ maxHeight: '33vh', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <h3>
                            <p>
                                C# is a modern, safe, and object-oriented, programming language that spans from high-level features such as data-oriented records to low-level features such as function pointers.</p>

                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={aws}
                        alt="Second slide"
                        style={{ maxHeight: '33vh', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>
                            <p>React provides reusability of components, fast rendering, code stability, high performance, and extensive community support. It helps to create engaging user interfaces and cut back on development time. </p>
                        </h3></Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={aws}
                        alt="Third slide"
                        style={{ maxHeight: '33vh', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>
                            <p>SQL Server Management Studio (SSMS) is an integrated environment for managing any SQL infrastructure</p>
                        </h3></Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={aws}
                        alt="Third slide"
                        style={{ maxHeight: '33vh', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>
                            <p> .NET is a software framework developed by Microsoft that supports building and running applications for Windows, macOS, and Linux.</p>
                        </h3></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={aws}
                        alt="Third slide"
                        style={{ maxHeight: '33vh', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>
                            <p>Swagger is an open-source framework used for designing, building, documenting, and consuming RESTful APIs.</p>
                        </h3></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={aws}
                        alt="Third slide"
                        style={{ maxHeight: '33vh', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>
                            <p>Postman is a collaboration platform for API development that simplifies the process of testing, documenting, and sharing APIs.

</p>
                        </h3></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={aws}
                        alt="Third slide"
                        style={{ maxHeight: '33vh', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>
                            <p>Jenkins is an open-source automation server used for continuous integration and continuous delivery (CI/CD) pipelines.</p>
                        </h3></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={aws}
                        alt="Third slide"
                        style={{ maxHeight: '33vh', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>
                            <p>GitLab is a web-based DevOps lifecycle tool that provides a Git repository manager, CI/CD pipeline features, and issue tracking capabilities.</p>
                        </h3></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={aws}
                        alt="Third slide"
                        style={{ maxHeight: '33vh', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>
                            <p> GitHub is a web-based platform for version control using Git. It provides collaboration features such as bug tracking, feature requests, task management, and wikis for projects.</p>
                        </h3></Carousel.Caption>
                </Carousel.Item>





            </Carousel>


            <Container fluid className="about-section">
                <Container>

                    <h1 className="project-heading">
                        TECH STACK 
                    </h1>

                    <Techstack />

                    <h1 className="project-heading">
                        TOOL STACK
                    </h1>
                    <Toolstack />

                </Container>
            </Container>


        </div>
    );
}

export default Hobby;
