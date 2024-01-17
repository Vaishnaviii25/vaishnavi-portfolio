import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from '../assets/img/html.svg';
import css from '../assets/img/css.svg';
import js from '../assets/img/js.svg';
import bs from '../assets/img/bs.svg';
import mysql from '../assets/img/mysql-logo.svg';
import cpp from '../assets/img/c++.svg';
import react from '../assets/img/react.svg';
import aws from '../assets/img/aws.svg';
import node from '../assets/img/nodejs.svg';
// import colorSharp from '../assets/img/color-sharp.png';
import colorSharp from '../assets/img/gradient.png';

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <br />
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                    <img src={html} alt="Image" />
                    <h5>HTML</h5>
                </div>
                <div className="item">
                    <img src={css} alt="Image" />
                    <h5>CSS</h5>
                </div>
                <div className="item">
                    <img src={js} alt="Image" />
                    <h5>JavaScript</h5>
                </div>
                <div className="item">
                    <img src={bs} alt="Image" />
                    <h5>Bootstrap</h5>
                </div>
                <div className="item">
                    <img src={cpp} alt="Image" />
                    <h5>C++ Development</h5>
                </div>
                <div className="item">
                    <img src={react} alt="Image" />
                    <h5>React.js</h5>
                </div>
                <div className="item">
                    <img src={mysql} alt="Image" />
                    <h5>MySQL</h5>
                </div>
                <div className="item">
                    <img src={aws} alt="Image" />
                    <h5>AWS</h5>
                </div>
                <div className="item">
                    <img src={node} alt="Image" />
                    <h5>Node.js</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="background-image-left" />
    </section>
  );
};

export default Skills;
