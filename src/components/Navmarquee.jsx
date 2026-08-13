import React from "react";
import "./Navmarquee.css";
import { BsStars } from "react-icons/bs";

function Navmarquee() {
  const items = Array(8).fill("LIMITED TIME OFFER");
  return (
    <>
      <nav className="marquee-container text-white py-2 fw-bold text-uppercase">
        <div className="marquee-wrapper mx-auto">
          <div className="marquee-track d-flex align-items-center">
            <div className="marquee-group d-flex align-items-center justify-content-around flex-shrink-0">
              {items.map((text, index) => (
                <React.Fragment key={index}>
                  <span className="mx-3">{text}</span>
                  <BsStars className="fs-5" />
                </React.Fragment>
              ))}
            </div>
            <div
              className="marquee-group d-flex align-items-center justify-content-around flex-shrink-0"
              aria-hidden="true"
            >
              {items.map((text, index) => (
                <React.Fragment key={`dup-${index}`}>
                  <span className="mx-3">{text}</span>
                  <BsStars className="fs-5" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navmarquee;
