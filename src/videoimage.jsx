import React from "react";
import "./videoimage.css";
import videoimg from "./assets/video-banner.jpg";
import { BsPlayFill } from "react-icons/bs";

function Videoimage() {
  return (
    <>
      <section
        className="video-banner-section position-relative rounded-4 overflow-hidden d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${videoimg})` }}
      >
        <button
          type="button"
          className="video-play-btn border-0 rounded-circle d-flex align-items-center justify-content-center position-relative"
          aria-label="Play Video"
        >
          <BsPlayFill className="play-icon" />
        </button>
      </section>
    </>
  );
}

export default Videoimage;
