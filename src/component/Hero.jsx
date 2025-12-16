import "../styles/Hero.css";
import { FaArrowDown } from "react-icons/fa";
import heroImage from "../assets/images/Hero.jpg";

import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaTelegramPlane,
} from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";

const Hero = () => {
  return (
    <section
      className="hero-section container"
      id="home"
      aria-labelledby="hero-title"
    >
      <div className="hero-content">
        <h1 id="hero-title" className="hero-title">
          PRODUCT <br />
          DESIGNER <br />
          <span className="hero-name">CRISTIAN MUN0Z</span>
        </h1>

        {/* ✅ Social Icons */}
        <div className="hero-social" aria-label="Social links">
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Figma">
            <FiFigma />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Telegram">
            <FaTelegramPlane />
          </a>
          <a href="#" aria-label="More">
            <HiDotsHorizontal />
          </a>
        </div>

        <button type="button" className="hero-download">
          <span>Download Curriculum Vitae</span>
          <FaArrowDown />
        </button>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Product designer workspace" />
      </div>
    </section>
  );
};

export default Hero;
