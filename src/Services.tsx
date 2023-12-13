import React from "react";
import webDesign from "./images/icons/web_design.png";
import uiDesign from "./images/icons/ui_design.png";
import threeDDesign from "./images/icons/3d_design.png";
import backend from "./images/icons/graphic_design.png";
const Services = () => {
  return (
    <div className="services-section">
      <div className="section-title">
        <div className="title-small-1">
          <div className="title-small-bar-1"></div>
          <h1>My Strong Areas</h1>
        </div>
        <div className="title-big-1">
          <div className="title-big-bar-1"></div>
          <h1>Offerings</h1>
        </div>
      </div>
      <div className="oferrings-container">
        <div className="offering-container blue">
          <div className="offering-img">
            <img src={webDesign} alt="" style={{ width: "80px" }} />
          </div>
          <h1>Web & Mobile Design</h1>
        </div>
        <div className="gap"></div>
        <div className="offering-container green">
          <div className="offering-img">
            <img src={uiDesign} alt="" style={{ width: "80px" }} />
          </div>
          <h1>Ui Design</h1>
        </div>
        <div className="gap"></div>
        <div className="offering-container red">
          <div className="offering-img">
            <img src={threeDDesign} alt="" style={{ width: "80px" }} />
          </div>
          <h1>3D Design</h1>
        </div>
        <div className="gap"></div>
        <div className="offering-container yellow">
          <div className="offering-img">
            <img src={backend} alt="" style={{ width: "80px" }} />
          </div>
          <h1>Backend</h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
