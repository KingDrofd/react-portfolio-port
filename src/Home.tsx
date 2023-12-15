import React, { useState } from "react";
import "./App.css";
import hover from "./images/Hover.png";
const Home = () => {
  const scrollToSection = (section: string) => {
    const contactSection = document.getElementById(section);

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="home-id" className="container-top-section-image">
      <div className="container-top-section">
        <div className="glass-introduction">
          <div className="glass-introduction-text">
            <h2>Hello World!</h2>
            <h1>
              Regad <br />
              Abdellah
            </h1>
            <h2>Flutter Developer!</h2>
          </div>

          {/* <div className="music-player">
            <div className="amber-container">
              <h2>Hello Mommy</h2>
            </div>
          </div> */}
        </div>
        <div className="space-top-section"></div>
        <div className="container">
          <div className="Menu-Container">
            <div
              className="Menu-Item"
              onClick={() => scrollToSection("home-id")}
            >
              <h4>Home</h4>
              <img className="img-hover" src={hover} alt="" />
            </div>
            <div
              className="Menu-Item"
              onClick={() => scrollToSection("about-id")}
            >
              <h4>About</h4>
              <img className="img-hover" src={hover} alt="" />
            </div>
            <div
              className="Menu-Item"
              onClick={() => scrollToSection("services-id")}
            >
              <h4>Services</h4>
              <img className="img-hover" src={hover} alt="" />
            </div>
            <div
              className="Menu-Item"
              onClick={() => scrollToSection("projects-id")}
            >
              <h4>Portfolio</h4>
              <img className="img-hover" src={hover} alt="" />
            </div>
            <div
              className="Menu-Item"
              onClick={() => scrollToSection("testimonial-id")}
            >
              <h4>Testimonials</h4>
              <img className="img-hover" src={hover} alt="" />
            </div>
            <div
              className="Menu-Item"
              onClick={() => scrollToSection("contact-section-id")}
            >
              <h4>Contact</h4>
              <img className="img-hover" src={hover} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
