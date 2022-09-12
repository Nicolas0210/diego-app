import React from "react";
import "./SectionLine.scss";

export default function SectionLine() {
  return (
    <div className="all-section-line-container">
      <div className="section-line" />
      <div>
        <div className="section-line-item">
          <p>
            01
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="5" height="17" className="svg-section-line">
              <line x1="0" y1="0" x2="0" y2="100" className="little-line-svg"/>
            </svg> Home
          </p>
        </div>
        <div className="section-line-item">
          <p>
            02
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="5" height="17" className="svg-section-line">
              <line x1="0" y1="0" x2="0" y2="100" className="little-line-svg"/>
            </svg> Clientes
          </p>
        </div>
        <div className="section-line-item"> 
          <p>
            03
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="5" height="17" className="svg-section-line">
              <line x1="0" y1="0" x2="0" y2="100" className="little-line-svg"/>
            </svg> Brain in Motion
          </p>
        </div>
        <div className="section-line-item"> 
          <p>
            04
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="5" height="17" className="svg-section-line">
              <line x1="0" y1="0" x2="0" y2="100" className="little-line-svg"/>
            </svg> Modelo
          </p>
        </div>
        <div className="section-line-item"> 
          <p>
            05
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="5" height="17" className="svg-section-line">
              <line x1="0" y1="0" x2="0" y2="100" className="little-line-svg"/>
            </svg> Dónde estamos
          </p>
        </div>
        <div className="section-line-item"> 
          <p>
            06
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="5" height="17" className="svg-section-line">
              <line x1="0" y1="0" x2="0" y2="100" className="little-line-svg"/>
            </svg> Contacto
          </p>
        </div>
      </div>
    </div>
  );
}
