// AboutButtons.js

import handshake from "./images/handshake.png";
import floppyDisk from "./images/FloppyDisk.png";
import { useEffect, useState } from "react";
const AboutButtons = () => {
  const openLink = (link: string) => {
    window.open(link, "_blank"); // Opens the link in a new window
  };
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
    <div className="about-buttons">
      <div className="hire-me-button" onClick={scrollToContactSection}>
        <img src={handshake} alt="Handshake" />
        <h2>Hire Me!</h2>
      </div>

      <div
        className="save-resume-button"
        onClick={() =>
          openLink(
            "https://firebasestorage.googleapis.com/v0/b/portfolio-e5416.appspot.com/o/Regad Abdellah Resume.pdf?alt=media&token=a0cf0b26-752b-4cc1-b70b-bac54f9dc7d7"
          )
        }
      >
        <img src={floppyDisk} alt="Floppy Disk" />
        <h2> {width < 700 ? "Resumé" : "Save My Resumé"}</h2>
      </div>
    </div>
  );
};

export default AboutButtons;
