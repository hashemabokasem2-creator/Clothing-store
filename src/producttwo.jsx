import React from "react";
import "./producttwo.css";
import WomenImage from "./assets/sub-banner-1.png";
import manImage from "./assets/sub-banner-2.png";
import KidImage from "./assets/sub-banner-3.png";
import { BsArrowUpRight } from "react-icons/bs";

function Producttwo() {
  return (
    <>
      <section className="container mt-5">
        <div className="row mb-5">
          <div className="col-md-4">
            <div className="promo-card-one rounded-4 p-4 position-relative overflow-hidden d-flex justify-content-between align-items-center">
              <div className="promo-card-content position-relative z-1 d-flex flex-column align-items-start gap-2">
                <span className="badge bg-white text-danger rounded-pill px-3 py-2 fw-semibold fs-7">
                  TRENDING PRODUCTS
                </span>

                <h3 className="text-white fw-bold my-1">Women's COLLECTIONS</h3>

                <p className="text-white opacity-75 mb-4">
                  Up to 22% off Gimbals
                </p>

                <a
                  href="#"
                  className="promo-link text-white text-decoration-none fw-semibold d-inline-flex align-items-center gap-2"
                >
                  COLLECTION <BsArrowUpRight size={18} />
                </a>
              </div>
              <img
                src={WomenImage}
                alt="Men's Collection"
                className="promo-card-img position-absolute bottom-0 end-0"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="promo-card-two rounded-4 p-4 position-relative overflow-hidden d-flex justify-content-between align-items-center">
              <div className="promo-card-content position-relative z-1 d-flex flex-column align-items-start gap-2">
                <span className="badge bg-white text-danger rounded-pill px-3 py-2 fw-semibold fs-7">
                  TRENDING PRODUCTS
                </span>

                <h3 className="text-white fw-bold my-1">Men's COLLECTIONS</h3>

                <p className="text-white opacity-75 mb-4">
                  Up to 22% off Gimbals
                </p>

                <a
                  href="#"
                  className="promo-link text-white text-decoration-none fw-semibold d-inline-flex align-items-center gap-2"
                >
                  COLLECTION <BsArrowUpRight size={18} />
                </a>
              </div>
              <img
                src={manImage}
                alt="Men's Collection"
                className="promo-card-img position-absolute bottom-0 end-0"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="promo-card-three rounded-4 p-4 position-relative overflow-hidden d-flex justify-content-between align-items-center">
              <div className="promo-card-content position-relative z-1 d-flex flex-column align-items-start gap-2">
                <span className="badge bg-white text-danger rounded-pill px-3 py-2 fw-semibold fs-7">
                  TRENDING PRODUCTS
                </span>

                <h3 className="text-white fw-bold my-1">Kid's COLLECTIONS</h3>

                <p className="text-white opacity-75 mb-4">
                  Up to 22% off Gimbals
                </p>

                <a
                  href="#"
                  className="promo-link text-white text-decoration-none fw-semibold d-inline-flex align-items-center gap-2"
                >
                  COLLECTION <BsArrowUpRight size={18} />
                </a>
              </div>
              <img
                src={KidImage}
                alt="Men's Collection"
                className="promo-card-img position-absolute bottom-0 end-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Producttwo;
