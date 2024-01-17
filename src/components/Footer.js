import { Container, Row, Col } from "react-bootstrap"

import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
import githubIcon from '../assets/img/github-mark-white.svg'
// import navIcon3 from '../assets/img/nav-icon3.svg';
// import { MailchimpForm } from "./MailchimpForm";
import Resume from "./Resume";

const Footer = () => {
  return (
    <footer className="footer">
        <Container>
            <Row className="align-item-center">
                {/* <MailchimpForm/> */}
                <Col className="text-center text-sm-center">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/vaishnavi-panchal-b223461b8/"><img src={navIcon1} /></a>
                        <a href="https://www.github.com/Vaishnaviii25"><img src={githubIcon} /></a>
                        {/* <a href=""><img src={navIcon3} /></a> */}
                    </div>
                    <div className="align-item-center">
                    <p>CopyRight 2023. All Rights Resevered.</p>
                    <p>Vaishnavi Panchal</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer