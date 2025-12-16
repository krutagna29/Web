import React from "react";
import "../styles/Testimonial.css";
import { IoShieldSharp } from "react-icons/io5";

const Testimonial = () => {
  return (
    <section
      className="testimonial-section"
      id="testimonial"
      aria-labelledby="testimonial-heading"
    >
      <div className="testimonial-inner">
        <h2 id="testimonial-heading" className="testimonial-name">
          Kaleb Lechtenberg
        </h2>

        <p className="testimonial-quote">
          “Working with this freelancer has been great. His attention to detail
          is unparalleled and finished all work ahead of schedule. Will gladly
          send more work and I do not hesitate to recommend him to you on your
          project also.”
        </p>

        {/* Shield icon below quote */}
        <div className="testimonial-badge" aria-hidden="true">
          <IoShieldSharp />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
