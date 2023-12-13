// AboutButtons.js

import React from "react";
import handshake from "./images/handshake.png";
import floppyDisk from "./images/FloppyDisk.png";
const AboutButtons = () => {
  return (
    <div className="about-buttons">
      <div className="hire-me-button">
        <img src={handshake} alt="Handshake" />
        <h2>Hire Me!</h2>
      </div>
      <div className="save-resume-button">
        <img src={floppyDisk} alt="Floppy Disk" />
        <h2>Save My Resumé</h2>
      </div>
    </div>
  );
};

export default AboutButtons;
