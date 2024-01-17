// import { useState, useEffect } from "react";
// import { Col, Row, Alert } from "react-bootstrap";

// export const Newsletter = ({ status, message, onValidated }) => {
//   const [email, setEmail] = useState('');

//   useEffect(() => {
//     if (status === 'success') clearFields();
//   }, [status])

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     email &&
//     email.indexOf("@") > -1 &&
//     onValidated({
//       EMAIL: email
//     })
//   }

//   const clearFields = () => {
//     setEmail('');
//   }

//   return (
//     <Col lg={12}>
//         <div className="newsletter-box wow slideInUp" style={{ backgroundColor: "#f8f9fa", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
//             <Row>
//                 <Col lg={12} md={6} xl={5}>
//                     <h3>Subscribe to my Newsletter</h3>
//                     {status === 'sending' && <Alert>Sending...</Alert>}
//                     {status === 'error' && <Alert variant="danger">{message}</Alert>}
//                     {status === 'success' && <Alert variant="success">{message}</Alert>}
//                 </Col>
//                 <Col md={6} xl={7}>
//                     <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center" }}>
//                         <div className="new-email-bx" style={{ width: "100%", marginRight: "10px" }}>
//                             <input 
//                                 value={email} 
//                                 type="email" 
//                                 onChange={(e) => setEmail(e.target.value)} 
//                                 placeholder="Email Address" 
//                                 style={{ width: "100%", padding: "10px", border: "1px solid #ced4da", borderRadius: "4px" }} 
//                             />
//                         </div>
//                         <button 
//                             type="submit" 
//                             style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
//                         >
//                             Submit
//                         </button>
//                     </form>
//                 </Col>
//             </Row>
//         </div>
//     </Col>
// )

// }