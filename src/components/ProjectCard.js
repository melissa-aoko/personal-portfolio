import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubLink, demoLink }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div style={{ marginTop: "10px" }}>
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light m-1"
              >
                GitHub
              </a>
            )}
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-info m-1"
              >
                Watch Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
