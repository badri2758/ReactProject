import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import download from "../../Assets/download.jpg"; // Adjust the path relative to About.js

function About() {
    return (
        <Container>
            <Container fluid className="about-section" id="about">
                <Row>
                    <Col md={8} className="about-description" style={{ textAlign: "left" }}>
                        {/* <h1 style={{ fontSize: "2.6em", textAlign: "center" }}>
                            ABOUT <span>ME</span>
                        </h1> */}
                        <p className="about-description">
                            <b>Naga Badra Kali Mylavarapu</b>
                            <br />
                            Location: Houston, TX
                            <br />
                            Phone: +1(346)-541-7842
                            <br />
                            Email: <a href="mailto:badrimylavarapu2107@gmail.com">badrimylavarapu2107@gmail.com</a>
                            <br />
                           <br/>
                            {/* <h2>Professional Summary</h2>
                            With over a year of professional experience as a software developer, I specialize in <b className="blue">C# and JavaScript</b>, focusing on developing robust and scalable enterprise applications. My proficiency in utilizing <b className="blue">React.js, .NET frameworks, and Java</b> allows me to efficiently automate tasks and deploy applications. I possess extensive knowledge and hands-on experience in building web applications using <b className="blue">React, .NET Core, RESTful Web Services, and Entity Frameworks</b> for seamless integration with backend systems. Additionally, I am skilled in utilizing cloud platforms such as <b className="blue">AWS and Azure</b> for efficient application management and deployment. My strong academic background and industry-recognized certifications further solidify my expertise in machine learning, cloud computing, and data analysis.
                            <br /><br /> */}

                            <h2>Education</h2>
                            <b>Master of Science in Computer Science</b><br />
                            University of Houston, TX, USA<br />
                            May 2024<br />
                            GPA: 3.6/4.0<br /><br />
                            <b>Bachelor of Technology in Computer Science and Engineering</b><br />
                            Shri Vishnu Engineering College for Women, India<br />
                            May 2022<br />
                            GPA: 9.41/10.0<br /><br />


                            <h2>CourseWork</h2>
                            Machine Learning<br />
                            Digital Image Processing<br />
                            Cloud Computing<br />
                            Principles of Cybersecurity<br />
                            Statistical Methods in Research<br />
                            Advanced Numerical Analysis<br />
                            Visualization<br />
                            Data Science with R<br />
                            Data Structures<br />
                            Object Oriented Programming with Java<br />
                            Database Management Systems<br />
                            Artificial Intelligence<br />
                            Operating Systems<br />
                            Design and Analysis of Algorithms<br />
                            Computer Networks<br /><br />


                            <h2>Work Experience</h2>
                            <b>Software Developer</b><br />
                            Infodat, Houston, TX, USA<br />
                            May 2023 – Present<br /><br />
                            - Developed a HIPAA-compliant Clinical Management system using React.js, enhancing UI component reusability and modularity.<br />
                            - Transformed codebase by implementing React hooks, optimizing state and lifecycle management.<br />
                            - Improved data integrity with client-side form validation, enhancing application reliability and security.<br />
                            - Integrated React Router for client-side routing, resulting in a more responsive and interactive interface.<br />
                            - Orchestrated backend using .NET Core, crafting Web APIs for smooth frontend-backend communication.<br />
                            - Utilized Entity Frameworks for optimal data retrieval and manipulation with Microsoft SQL Server.<br />
                            - Implemented automated deployment via bash scripts, minimizing downtime during updates.<br />
                            - Demonstrated expertise in ORM with LINQ, showcasing deep data manipulation knowledge.<br />
                            - Utilized WebDriverIO for comprehensive test cases, ensuring application stability.<br />
                            Technologies: C#, JavaScript, React.js, Redux, .NET frameworks, IIS, GitLab, Azure DevOps, AWS EC2 server, Bash, Microsoft SQL, LINQ, WebDriverIO, Swagger UI.<br /><br />
                            
                            <b>Instructional Assistant</b><br />
                            College of Social Work, University of Houston<br />
                            December 2022 – May 2024<br /><br />
                            - Led a team in providing instructional support and assistance to faculty using Black Board and Canvas LMS.<br />
                            - Assessed and corrected accessibility issues within the course LMS and provided training and support to faculty.<br /><br />
                           
                            <b>Full Stack Developer</b><br />
                            Persistent Systems, Hyderabad, India<br />
                            February 2022 – July 2022<br /><br />
                            - Interned for a full stack project developing an online learning platform using React, Node.js, and MySQL.<br />
                            - Implemented user authentication using JWTs, enhancing security.<br />
                            - Managed development with Git for version control, ensuring seamless collaboration during deployment.<br /><br />
                           
                            <h2>Technical Skills</h2>
                            - Programming Languages: C#, Java, Python, C, C++, R, JavaScript, HTML/CSS, SQL<br />
                            - Frameworks & Libraries: .NET Frameworks, React, AngularJS, Node.js, Tailwind CSS, SQL, MySQL, Microsoft SQL Server<br />
                            - Tools: Git, GitHub, GitLab, AWS, REST, Jenkins, Swagger, Postman, IIS, WebDriverIO<br /><br />
                            
                            {/* <h2>Certifications</h2>
                            - AWS Certified Cloud Practitioner (CLF-C01)<br />
                            - SQL Essential Training by NASBA<br />
                            - Git by LinkedIn<br />
                            - Using Python to Access Web Data<br />
                            - Using Databases with Python<br />
                            - AI For Everyone<br />
                            - Python Data Structures<br />
                            - Programming for Everybody<br />
                            - Data Science with R<br /> */}
            
                        </p>
                    </Col>
                    <Col md={4} className="text-center" style={{ paddingBottom: 100 }}>
                        <img
                            src={download}
                            alt="Profile pic"
                            className="img-fluid"
                            style={{ maxHeight: "600px" }}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default About;
