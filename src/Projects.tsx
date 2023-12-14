import React from "react";
import plugin from "./images/untitled.png";
import folder from "./images/folder.png";
import shareTo from "./images/share to glass alt.png";
const Projects = () => {
  return (
    <div id="projects-id" className="projects-section">
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
      <div className="projects-grid">
        <div
          className="project-container project-red"
          style={{ background: "images/untitled.png" }}
        >
          <img src={plugin} alt="" />
          <div className="project-text">
            <div className="project-text-small">Unity Project</div>
            <div className="project-text-big">Custom Character Controller</div>
            <div className="project-text-link">View Details</div>
          </div>
        </div>
        <div className="project-container project-red">
          <img src={plugin} alt="" />
          <div className="project-text">
            <div className="project-text-small">Unity Project</div>
            <div className="project-text-big">
              Custom Parallax Effect For 2D Games
            </div>
            <div className="project-text-link">View Details</div>
          </div>
        </div>
        <div className="project-container project-blue">
          <img src={folder} alt="" />
          <div className="project-text">
            <div className="project-text-small">Website Portfolio</div>
            <div className="project-text-big">
              Web Portfolio Inspired By The Game Nier Automata
            </div>
            <div className="project-text-link">View Details</div>
          </div>
        </div>
        <div className="project-container project-yellow">
          <img src={shareTo} alt="" />
          <div className="project-text">
            <div className="project-text-small">Flutter</div>
            <div className="project-text-big">
              Simple Local Sharing App Between Phone And Pc
            </div>
            <div className="project-text-link">View Details</div>
          </div>
        </div>
      </div>
      <div className="gap" style={{ height: "50px" }}></div>
    </div>
  );
};

export default Projects;
