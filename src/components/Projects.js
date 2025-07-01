import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const aiProjects = [
    {
      title: "AI Sentiment Analyzer",
      description: "Built with Python & TensorFlow",
      imgUrl: projImg1,
      githubLink: "https://github.com/yourusername/ai-project",
      demoLink: "https://your-ai-demo-link.com"
    },
  ];

  const softwareProjects = [
    {
      title: "Task Manager App",
      description: "React & Firebase",
      imgUrl: projImg2,
      githubLink: "https://github.com/yourusername/software-project",
      demoLink: "https://your-software-demo-link.com"
    },
  ];

  const cyberProjects = [
    {
      title: "Port Scanner Tool",
      description: "Python + Nmap",
      imgUrl: projImg3,
      githubLink: "https://github.com/yourusername/cyber-project",
      demoLink: "https://your-cyber-demo-link.com"
    },
  
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A few of the projects I've worked on!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="ai-ml">AI | MACHINE LEARNNG</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="software">SOFTWARE DEVELOPMENT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="cybersecurity">CYBERSECURITY</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="ai-ml">
                      <Row>
                        {
                          aiProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="software">
                      <Row>
                        {softwareProjects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="cybersecurity">
                      <Row>
                        {cyberProjects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}