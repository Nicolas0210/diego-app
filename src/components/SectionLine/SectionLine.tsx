import React from "react";
import "./SectionLine.scss";

export default function SectionLine() {
  return (
    <div className="all-section-line-container">
      <div className="section-line" />
      <div className="section-line-item">
        <p>
          01
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="5" height="17" className="svg-section-line">
            <line x1="0" y1="0" x2="0" y2="100" stroke="orange" stroke-width="7"/>
          </svg> Home
        </p>
      </div>
    </div>
  );
}
