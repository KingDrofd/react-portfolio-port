import React from "react";
import plugin from "./images/untitled.png";
const Projects = () => {
  return (
    <div className="projects-section">
      <div className="section-title">
        <div className="title-small-1">
          <div
            className="title-small-bar-1"
            style={{
              background: "rgb(255, 193, 7)",
            }}
          ></div>
          <h1>My Projects</h1>
        </div>
        <div className="title-big-1">
          <div className="title-big-bar-1"></div>
          <h1>Recent Works</h1>
        </div>
      </div>
      <div className="gap" style={{ height: "50px" }}></div>
      <div className="project-container">
        <img src={plugin} alt="" />
        <div className="project-text">
          <div className="project-text-small">Unity Project</div>
          <div className="project-text-big">Custom Character Controller</div>
          <div className="project-text-link">View Details</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
