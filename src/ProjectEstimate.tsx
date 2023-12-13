import React from "react";
import letter from "./images/icons/letter.png";
import handshake from "./images/handshake.png";
import Projects from "./Projects";
const ProjectEstimate = () => {
  return (
    <div className="project-estimate">
      <div className="project-estimate-container">
        <img src={letter} alt="" style={{ width: "90px" }} />
        <div className="div-seperator"></div>
        <div className="project-estimate-text">
          <div className="project-estimate-h1">Starting a new project?</div>
          <div className="project-estimate-h3">Get an estimate!</div>
        </div>
        <div
          className="about-buttons"
          style={{ marginBottom: "0px", marginLeft: "60px" }}
        >
          <div className="hire-me-button">
            <img src={handshake} alt="Handshake" />
            <h2>Contact Me!</h2>
          </div>
        </div>
      </div>
      <Projects />
    </div>
  );
};

export default ProjectEstimate;
