import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import vp from "../assets/img/VP-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import github from "../assets/img/github-mark-white.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isShrink, setIsShrink] = useState(false);

  useEffect(() => {

    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  useEffect(() => { 
    const handleScroll = () => {
      if(window.scrollY > 100) {
        setIsShrink(true);
      } else {
        setIsShrink(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })
  return (
    <Router>
      <Navbar expand="lg" className={`${scrolled ? "scrolled" : ""} ${isShrink ? "navbarShrink" : ""}`}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={vp} alt="Logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#resume"
                className={
                  activeLink === "resume"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("resume")}
              >
                Resume
              </Nav.Link>
              <Nav.Link
                href="#certificates"
                className={
                  activeLink === "certificates"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("certificates")}
              >
                Certificates
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/vaishnavi-panchal-b223461b8/">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://github.com/Vaishnaviii25">
                  <img src={github} alt="" />
                </a>
                {/* <a href="#">
                <img src={navIcon3} alt="" />
              </a> */}
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Let's Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
