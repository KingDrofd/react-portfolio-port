import React from "react";

import "./App.css";
import Home from "./Home";
import About from "./About";
import AboutButtons from "./AboutButtons";
import Services from "./Services";
import ProjectEstimate from "./ProjectEstimate";
import Projects from "./Projects";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import ScrollToTopButton from "./ScrollToTop";
import "simplebar/dist/simplebar.min.css";
import SimpleBar from "simplebar";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <AboutButtons />
      <Services />
      <ProjectEstimate />
      <Testimonial />
      <Contact />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
