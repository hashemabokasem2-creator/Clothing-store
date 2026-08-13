import React from "react";
import "./backgroundgirl.css";
import bgImage from "../assets/different-clothes.avif";
import girlImage from "../assets/ad-img.png";
import { BsCheck2, BsArrowUpRight } from "react-icons/bs";

function Backgroundgirl() {
  return (
    <>
      <div className="container my-5">
        <div
          className="promo-banner-container position-relative rounded-5 overflow-visible"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="promo-banner-overlay position-absolute top-0 start-0 w-100 h-100 rounded-5"></div>
          <div className="position-relative z-1 row align-items-center g-4 p-4 ps-lg-5 pt-lg-5 pe-lg-5 pb-lg-0">
            <div className="col-12 col-lg-5 text-center text-lg-start">
              <span className="badge bg-white text-danger fw-semibold px-3 py-2 rounded-pill mb-3 small">
                TRENDING PRODUCTS
              </span>
              <h2 className="text-white fw-bold display-6 mb-3">
                Get 30% Discount On All Hudis!
              </h2>
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 text-white fw-medium small">
                <span>
                  <BsCheck2 className="fs-5 me-1" /> ZARA
                </span>
                <span>
                  <BsCheck2 className="fs-5 me-1" /> GUCIE
                </span>
                <span>
                  <BsCheck2 className="fs-5 me-1" /> PUBLO
                </span>
                <span>
                  <BsCheck2 className="fs-5 me-1" /> MEN'S
                </span>
                <span>
                  <BsCheck2 className="fs-5 me-1" /> WOMEN'S
                </span>
              </div>
            </div>
            <div className="col-12 col-lg-4 text-center my-3 my-lg-0">
              <div className="d-inline-block position-relative align-self-lg-end">
                <img
                  src={girlImage}
                  alt="Promo Model"
                  className="img-fluid promo-girl-img"
                />
              </div>
            </div>
            <div className="col-12 col-lg-3 text-center text-lg-end">
              <a
                href="#"
                className="btn btn-outline-light rounded-pill px-4 py-2 fw-semibold d-inline-flex align-items-center gap-2 promo-discount-btn"
              >
                CHECK DISCOUNT <BsArrowUpRight className="fs-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Backgroundgirl;
