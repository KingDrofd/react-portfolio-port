import React from "react";
import signature from "./images/signature.png";
const About = () => {
  return (
    <div id="about-id" className="about">
      <div className="about-text-left">
        <div className="about-text">
          <h1>
            About <br />
            Me
          </h1>
          <img src={signature} alt="Signature" />
        </div>
        <div className="about-me">
          <p>
            🚀 Hi, I'm Abdellah, a software developer passionate about Flutter.
            I bring ideas to life through code, and dabble in 3D design. In my
            spare time, I turn my creative energy into game development 👾💻✨
          </p>
        </div>
      </div>
      <div className="about-years-of">
        <div className="about-years-of-1">
          <div className="about-years-of-2">
            <div className="h1-1">03</div>
            <h3>Years of experience</h3>
          </div>
        </div>
        <p className="about-years-of-text">
          From indie games to freelance Flutter gigs, my journey blends pixels
          and precision. With a year in indie games and a focus on Flutter
          freelancing, I'm here to turn concepts into code. 🚀
        </p>
      </div>
    </div>
  );
};

export default About;
