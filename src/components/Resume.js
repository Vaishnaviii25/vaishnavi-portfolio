import { Col, Row, Button } from "react-bootstrap";
import resumeFile from "../assets/resume/VP_resume.pdf";

const Resume = () => {
  const handleViewResume = () => {
    window.open(resumeFile);
  };

  return (
    <Col lg={12} id="resume">
      <div className="newsletter-bx wow slideUp">
        <Row className="text-center text-sm-center">
          {/* <Col lg={8} md={6} sm={6}>
            <h3>View My Resume</h3>
            <Button variant="primary" onClick={handleViewResume}>View</Button>
          </Col> */}
          <Col lg={9} md={6} sm={6}>
            <h3>View My Resume</h3>
          </Col>
          <Col lg={3} md={6} sm={6}>
            <Button variant="light" onClick={handleViewResume}>
              View
            </Button>
          </Col>
          {/* <Col lg={2} md={6} sm={6}>
          <h3>Download my resume</h3>
          <a href={resumeFile} download="Vaishnavi_Resume.pdf">
            <Button variant="primary">Download</Button>
          </a>
          </Col> */}
        </Row>
      </div>
    </Col>
  );
};

export default Resume;
