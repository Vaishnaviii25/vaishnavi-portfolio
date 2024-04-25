import Skills from "./Skills";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import colorSharp from "../assets/img/gradient.png";

const Certificates = () => {
  const certi = [
    {
      title: "AWS Certified Cloud Practitioner",
      certiLink: "https://drive.google.com/file/d/15-b4iQVIXaO7M9yuIMJRDm9DGp8rkExC/view?usp=sharing",
    },
    {
      title: "The Bits and Bytes of Computer Networking - Coursera",
      certiLink: "https://drive.google.com/file/d/1bvjMgQXkv3AYUHaG0rOBl4hozrKkIU0e/view?usp=sharing",
    },
  ];
  return (
    <section className="skill" id="certificates">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Certificates</h2>
              <br />
              <Container>
                
                <Row>
                  <Col>
                    <p>{certi[0].title}</p>
                    <a href={certi[0].certiLink}><Button variant="success">View</Button></a>
                  </Col>
                  <Col>
                    <p>{certi[1].title}</p>
                    <a href={certi[1].certiLink}><Button variant="success">View</Button></a>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="background-image-left" />
    </section>
  );
};

export default Certificates;
