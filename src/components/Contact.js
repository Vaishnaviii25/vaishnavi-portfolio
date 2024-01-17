import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser';
// import contactImg from "../assets/img/contact-img.svg";
import contactImg from "../assets/img/git.svg";

const Contact = () => {
  const form = useRef();
  const formInitialDetails = {
    // firstName: "",
    // lastName: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs.sendForm('service_g17gj5e', 'template_04n853l', form.current, 'ZETsPBcfp24gefk7a')
    .then((result) => {
        console.log(result.text);
        setButtonText("Send");
        setFormDetails(formInitialDetails);
        setStatus({success: true, message: "Message sent successfully"});
    }, (error) => {
        console.log(error.text);
        setButtonText("Send");
        setStatus({success: false, message: "Something went wrong, please try again later."});
    });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Me" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col sm={12} className="px-2 py-2">
                  <input
                    type="text"
                    name="name"
                    value={formDetails.name}
                    placeholder="What's your name?"
                    onChange={(e) => onFormUpdate("name", e.target.value)}
                  />
                </Col>
                <Col sm={7} className="px-2 py-2">
                  <input
                    type="email"
                    name="email"
                    value={formDetails.email}
                    placeholder="What's your email?"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={5} className="px-2 py-2">
                  <input
                    type="tel"
                    name="phone"
                    value={formDetails.phone}
                    placeholder="Your Phone Number"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    rows="6"
                    name="message"
                    value={formDetails.message}
                    placeholder="What do you want to say?"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >{status.message}</p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
