import { useState } from "react";
import { FaArrowDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/icons/logo.svg";
import "../styles/Navbar.css";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar container" aria-label="Main navigation">
      <a href="#home" className="logo">
        <img src={logo} alt="Web logo" className="logo-icon" />
        Web
      </a>

      {/* Hamburger */}
      <button
        className="hamburger"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={`nav-links ${mobileOpen ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={() => setMobileOpen(false)}>Home</a>
        </li>
        <li className="nav-item-dropdown">
          <button
            type="button"
            className="nav-link-button"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Portfolio
            <span className="nav-caret" aria-hidden="true">
              <FaArrowDown />
            </span>
          </button>
          <ul className={`nav-dropdown ${dropdownOpen ? "open" : ""}`}>
            <li>
              <a href="#portfolio" onClick={() => setMobileOpen(false)}>All projects</a>
            </li>
            <li>
              <a href="#portfolio" onClick={() => setMobileOpen(false)}>Case studies</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#skills" onClick={() => setMobileOpen(false)}>Skills</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMobileOpen(false)}>About Me</a>
        </li>
     
      </ul>

      {/* Desktop Contact button */}
      <button className="btn-contact desktop-only" type="button">
        Contact me
      </button>
    </nav>
  );
}

export default Navbar;
