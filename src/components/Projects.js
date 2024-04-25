import { Container, Row, Col, Nav, Tab, Button } from "react-bootstrap";
import projImg1 from "../assets/img/p-ai.png"
import projImg2 from "../assets/img/kw.png";
import projImg3 from "../assets/img/hb.png";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import Resume from "./Resume";

const Projects = () => {
  const projects = [
    {
      title: "Promptify",
      description: "Discover & Share AI Powered Prompts",
      overview: "PromptifyAI allows users to seamlessly search for creative prompts using tags or usernames. Whether you're looking for inspiration for web development, AI research, or any other creative endeavor, PromptifyAI offers a community-driven platform to boost your creativity.",
      imgUrl: projImg1,
      githubLink: "https://github.com/Vaishnaviii25/promptify",
    },
    {
      title: "Kisaan Welfare",
      description: "Farming Community",
      overview: "Kisaan Welfare is developed by using a Machine Learning model that can accurately predict crop yield based on environmental and soil conditions. The model is trained using a dataset containing historical crop yield data along with corresponding environmental and soil data.",
      imgUrl: projImg2,
      githubLink: "https://github.com/Vaishnaviii25/Kisaan-Welfare",
    },
    {
      title: "HooBank",
      description: "Modern Banking Web Application",
      overview: "A modern bank application developed using React.js and Tailwind CSS, a utility-first CSS framework. The application is crafted to deliver an intuitive and visually appealing user interface, enhancing the banking experience for users.",
      imgUrl: projImg3,
      githubLink: "https://github.com/Vaishnaviii25/Modern-Bank-App",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>Some of my interesting projects</p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActivityKey="first">
              <Nav
                varient="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Project 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Project 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Project 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    <ProjectCard {...projects[0]} />
                    <p>
                      <a
                        className="desc"
                        href={projects[0].githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h3>{projects[0].overview}</h3>
                        {/* <Button variant="light">View on GitHub</Button> */}
                        <p>Click on the description to view on github !</p>
                      </a>
                    </p>
                    {/* {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project[0]} />;
                    })} */}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                      <ProjectCard {...projects[1]} />
                      <p>
                        <a
                          className="desc"
                          href={projects[1].githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          >
                        <h3>{projects[1].overview}</h3>
                          <p>Click on the description to view on github !</p>
                          {/* <Button variant="light">View on GitHub</Button> */}
                        </a>
                      </p>
                    {/* {projects.map((project, index) => {
                      return <ProjectCard key={index} {...projects[1]} />;
                    })} */}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    <ProjectCard {...projects[2]} className="pc"/>
                    <p>
                      <a
                        className="desc"
                        href={projects[2].githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h3>{projects[2].overview}</h3>
                        <p>Click on the description to view on github !</p>
                        {/* <Button variant="light">View on GitHub</Button> */}
                      </a>
                    </p>
                    {/* {projects.map((project, index) => {
                      return <ProjectCard key={index} {...projects[2]} />;
                    })} */}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
        <Row className="text-center text-sm-center">
          <Resume />
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};

export default Projects;

// import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
// import ProjectCard from "./ProjectCard";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import TrackVisibility from "react-on-screen";
// import Resume from "./Resume";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Kisaan Welfare",
//       description: "A platform dedicated to enhancing the welfare of farmers.",
//       imgUrl: projImg1,
//       githubLink: "https://github.com/Vaishnaviii25/Kisaan-Welfare", // Example link
//     },
//     {
//       title: "TourUp",
//       description: "Tourism Service",
//       imgUrl: projImg2,
//       githubLink: "https://github.com/Vaishnaviii25/TourUp", // Example link
//     },
//     {
//       title: "Hospital Feedback Anays",
//       description: "Education Platform",
//       imgUrl: projImg3,
//       githubLink: "https://github.com/Vaishnaviii25/hospital-feedback-analysis", // Example link
//     },
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <div
//                   className={
//                     isVisible ? "animate__animated animate__slideInUp" : ""
//                   }
//                 >
//                   <h2>Projects</h2>
//                   <p>
//                     Some of my interesting projects
//                   </p>
//                 </div>
//               )}
//             </TrackVisibility>
//             <Tab.Container id="projects-tabs" defaultActiveKey="first">
//               <Nav
//                 variant="pills"
//                 className="nav-pills mb-5 justify-content-center align-items-center"
//                 id="pills-tab"
//               >
//                 {projects.map((project, index) => (
//                   <Nav.Item key={index}>
//                     <Nav.Link eventKey={`tab-${index}`}>{`Project ${
//                       index + 1
//                     }`}</Nav.Link>
//                   </Nav.Item>
//                 ))}
//               </Nav>
//               <Tab.Content>
//                 {projects.map((project, index) => (
//                   <Tab.Pane eventKey={`tab-${index}`} key={index}>
//                     <Row className="align-items-center">
//                       <Col md={6}>
//                         <ProjectCard {...project} />
//                       </Col>
//                       <Col md={6}>
//                         <p>{project.description}</p>
//                         <a
//                           href={project.githubLink}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="github-link"
//                         >
//                           View on GitHub
//                         </a>
//                       </Col>
//                     </Row>
//                   </Tab.Pane>
//                 ))}
//               </Tab.Content>
//             </Tab.Container>
//           </Col>
//         </Row>
//         <Row className="text-center text-sm-center">
//           <Resume />
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2} />
//     </section>
//   );
// };

// export default Projects;
