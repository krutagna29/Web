import React from "react";
import "../styles/Footer.css";
import logo from "../assets/icons/logo.svg"; // your logo
import footerImg from "../assets/images/hero.jpg"; // floating card image

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      {/* ===== PURPLE MESSAGE STRIP ===== */}
      <div className="footer-message container">
        <div className="footer-message-card">
          <div className="footer-message-image">
            <img src={footerImg} alt="Workspace" />
          </div>

          <p className="footer-message-text">
            Thanks for visiting my website. <br />
            If you have any questions, feel free to reach out on my social networks; I’ll be happy to answer.
          </p>
        </div>
      </div>

      {/* ===== BOTTOM FOOTER BAR ===== */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner container">
          {/* Logo */}
          <div className="footer-logo">
            <img src={logo} alt="Website Logo" className="footer-logo-img" />
            <span>Web</span>
          </div>

          {/* Navigation */}
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#home">Home</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#skills">Skills</a>
            <a href="#about">About Me</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
