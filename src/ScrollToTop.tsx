import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const yOffset = window.scrollY;
    setIsVisible(yOffset > 100);
  };
  const scrollToSection = (section: string) => {
    const contactSection = document.getElementById(section);

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={() => scrollToSection("home-id")}
    >
      <FaArrowUp size={25} />
    </div>
  );
};

export default ScrollToTopButton;
