import React from "react";
import "./App.css";
const Home = () => {
  return (
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

        <div className="music-player">
          <div className="amber-container">
            <h2>Hello Mommy</h2>
          </div>
        </div>
      </div>
      <div className="space-top-section"></div>
      <div className="container">
        <div className="Menu-Container">
          <h4>Home</h4>
          <h4>About</h4>
          <h4>Services</h4>
          <h4>Portfolio</h4>
          <h4>Testimonial</h4>
          <h4>Contact</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
