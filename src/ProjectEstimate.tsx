import React, { useEffect, useState } from "react";
import letter from "./images/icons/letter.png";
import handshake from "./images/handshake.png";
import Projects from "./Projects";
const ProjectEstimate = () => {
  const scrollToContactSection = () => {
    const contactSection = document.getElementById("contact-section-id");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="project-estimate">
      <div className="project-estimate-container">
        <img className="project-estimate-container-img" src={letter} alt="" />
        <div className="div-seperator"></div>
        <div className="project-estimate-text">
          <div className="project-estimate-h1">Starting a new project?</div>
          <div className="project-estimate-h3">Get an estimate!</div>
        </div>
        <div
          className="about-buttons"
          style={{
            marginBottom: "0px",
            marginLeft: width < 700 ? "0px" : "60px",
            marginTop: width < 700 ? "30px" : "0px",
          }}
        >
          <div className="hire-me-button" onClick={scrollToContactSection}>
            <img
              className="hire-me-button-img"
              src={handshake}
              alt="Handshake"
            />
            <h2>Contact Me!</h2>
          </div>
        </div>
      </div>
      <Projects />
    </div>
  );
};

export default ProjectEstimate;
