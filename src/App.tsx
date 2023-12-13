import React from "react";

import "./App.css";
import Home from "./Home";
import About from "./About";
import AboutButtons from "./AboutButtons";
import Services from "./Services";
import ProjectEstimate from "./ProjectEstimate";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <AboutButtons />
      <Services />
      <ProjectEstimate />
    </div>
  );
}

export default App;
