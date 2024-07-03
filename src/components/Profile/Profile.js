import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfileCard from "./ProfileCard";
import download from "../../Assets/download.jpg"; 

function Profile() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          Tech Blogs
        </h1>
      
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProfileCard
              imgPath={download}
              isBlog={false}
              title="Machine Learning"
              description="Heart diseases include the disordered functioning of heart thatcan be saved
                through early diagnosis. This diagnosis needs a considerable amount of time to diagnose the patient through an accurate approach for
                treatment. In this paper, Logistic Regression (LR) and Support Vector Machine (SVM) models are incorporated for effective prediction of heart
                disease. The results achieved are 93% accurate when the datasets are compared with the SVM model"
                demoLink="https://link.springer.com/chapter/10.1007/978-981-19-4162-7_12"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProfileCard
              imgPath={download}
              isBlog={false}
              title="Amazon Web Services"
              description="Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud, offering over 200 fully featured services from data centers globally. Millions of customers—including the fastest-growing startups, largest enterprises, and leading government agencies—are using AWS to lower costs, become more agile, and innovate faster."
            //   ghLink="https://www.linkedin.com/pulse/aws-amazon-web-services-badri-mylavarapu-spylc/?trackingId=sbA%2FzIGiRA2a%2BhYe%2FPi23g%3D%3D"
              demoLink="https://www.linkedin.com/pulse/aws-amazon-web-services-badri-mylavarapu-spylc/?trackingId=sbA%2FzIGiRA2a%2BhYe%2FPi23g%3D%3D"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProfileCard
              imgPath={download}
              isBlog={false}
              title=".NET Framework"
              description="Tech Blog written on .NET"
            //   ghLink="https://www.linkedin.com/posts/badrimylavarapu_dotnet-flowarchitecture-activity-7196179611284561920-cU0s?utm_source=share&utm_medium=member_desktop"
              demoLink="https://www.linkedin.com/posts/badrimylavarapu_dotnet-flowarchitecture-activity-7196179611284561920-cU0s?utm_source=share&utm_medium=member_desktop"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProfileCard
              imgPath={download}
              isBlog={false}
              title="Python Game"
              description="Game built using python"
            //   ghLink="https://github.com/badri2758/gameproject"
              demoLink="https://github.com/badri2758/gameproject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProfileCard
              imgPath={download}
              isBlog={false}
              title="Emotion Detection"
              description="The main objective of this project is to recognise the facial expression of a person in real time video.The Emotions include Happy,Sad,Anger,Surprise,Neutral."
              demoLink="https://github.com/badri2758/Emotion-Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProfileCard
              imgPath={download}
              isBlog={false}
              title="Canvas LMS"
              description="Led a team in facilitating instructional support and assistance to faculty using Black Board and Canvas LMS.Assessing and correcting accessibility issues within the course LMS and providing training and support to faculty."
              ghLink="https://github.com/badri2758"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Profile;