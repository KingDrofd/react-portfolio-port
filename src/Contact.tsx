import React, { useEffect, useState } from "react";
import linkedIn from "./images/Linkedin-logo.png";
import discord from "./images/Discord-Emblem.png";
import gitHub from "./images/github-mark.png";
import letter from "./images/icons/letter.png";
const Contact = () => {
  const openLink = (link: string) => {
    window.open(link, "_blank"); // Opens the link in a new window
  };

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="contact-section">
      <a id="contact-section-id"></a>
      <div className="gap" style={{ height: "100px" }}></div>
      <div className="section-title">
        <div className="title-small-1">
          <div
            className="title-small-bar-1"
            style={{
              background: "rgb(155, 39, 176)",
            }}
          ></div>
          <h1>For Project Inquiry</h1>
        </div>
        <div className="title-big-1">
          <div className="title-big-bar-1"></div>
          <h1>Contact Me</h1>
        </div>
      </div>
      <div className="contact-form-container">
        <div className="contact-cards">
          <div
            className="contact-card contact-card-blue"
            onClick={() =>
              openLink("https://www.linkedin.com/in/abdellah-regad-509877206/")
            }
          >
            <div className="contact-card-content">
              <img src={linkedIn} alt="" />{" "}
              <div className="contact-card-content-name">LinkedIn</div>
            </div>
          </div>

          <div
            className="contact-card contact-card-blue-grey"
            onClick={() =>
              openLink("https://discord.com/users/430135831051763714")
            }
          >
            <div className="contact-card-content">
              <img src={discord} alt="" />{" "}
              <div className="contact-card-content-name">Discord</div>
            </div>
          </div>
          <div
            className="contact-card contact-card-grey"
            onClick={() => openLink("https://github.com/KingDrofd")}
          >
            <div className="contact-card-content">
              <img src={gitHub} alt="" />{" "}
              <div className="contact-card-content-name">GitHub</div>
            </div>
          </div>
        </div>
        <div className="contact-form-fields">
          <div className="contact-form-field">
            <div className="custom-input">
              <input type="text" id="input1" placeholder="Enter Your Name" />
              <label htmlFor="input1">Name</label>
            </div>
          </div>
          <div className="contact-form-field">
            <div className="custom-input">
              <input type="text" id="input1" placeholder="Enter Your Email" />
              <label htmlFor="input1">Email</label>
            </div>
          </div>
          <div className="contact-form-field">
            <div className="custom-input">
              <input
                type="text"
                id="input1"
                placeholder="Enter The Project Type"
              />
              <label htmlFor="input1">Project Type</label>
            </div>
          </div>
          <div className="contact-form-field">
            <div className="custom-input">
              <input
                type="text"
                id="input1"
                placeholder="Enter Project Budget"
              />
              <label htmlFor="input1">Project Budget</label>
            </div>
          </div>
        </div>
        <div className="gap" style={{ height: "50px" }}></div>
        <div
          className="contact-form-field"
          style={{
            width: width < 1100 ? "100%" : "950px",
            maxWidth: width < 1100 ? "100%" : "950px",
            marginTop: width < 700 ? "20px" : "0",
            marginLeft: width < 700 ? "20px" : "0",
          }}
        >
          <div
            className="custom-input"
            style={{
              width: width < 1100 ? "100%" : "950px",
              maxWidth: width < 1100 ? "100%" : "950px",
            }}
          >
            <textarea
              placeholder="Enter Project Description"
              style={{
                width: width < 1100 ? "80%" : "900px",
                maxWidth: width < 1100 ? "80%" : "900px",
              }}
            />
            <label htmlFor="input1">Project Description</label>
          </div>
        </div>
        <div className="gap" style={{ height: "20px" }}></div>
        <div className="about-buttons">
          <div className="save-resume-button">
            <img src={letter} alt="Floppy Disk" />
            <h2>Send</h2>
          </div>
        </div>
        <div className="gap" style={{ height: "30px" }}></div>
      </div>
    </div>
  );
};

export default Contact;
