import React from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import "../styles/Stats.css";

const Stats = () => {
  return (
    <section className="stats-shell" aria-label="Key results">
      <div className="stats-card container">
        <div className="stats-item">
          <p className="stats-value">90%</p>
          <p className="stats-label">
            Job Success
            <br />
            Score on Upwork
          </p>
        </div>

        <div className="stats-icon" aria-hidden="true">✳</div>

        <div className="stats-item">
          <p className="stats-value">
            <span className="stats-arrow">
              <RiArrowDropRightLine />
            </span>
            25.000
          </p>
          <p className="stats-label">
            Duplicates on Figma
            <br />
            Community
          </p>
        </div>

        <div className="stats-icon" aria-hidden="true">✳</div>

        <div className="stats-item">
          <p className="stats-value">
            <span className="stats-arrow">
              <RiArrowDropRightLine />
            </span>
            2K
          </p>
          <p className="stats-label">
            In Finished
            <br />
            Works
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
