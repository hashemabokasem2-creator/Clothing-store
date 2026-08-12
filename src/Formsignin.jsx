import React from "react";
import "./Formsignin.css";
import peopleImg from "./assets/images.jpg";
import { BsSend, BsArrowUpRight } from "react-icons/bs";

function Formsignin() {
  return (
    <>
      <section
        className="newsletter-section position-relative rounded-4 container text-center text-white d-flex flex-column align-items-center justify-content-between pt-5 px-0 mb-5 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(229, 46, 113, 0.85), rgba(255, 152, 0, 0.85)), url(${peopleImg})`,
        }}
      >
        <div className="px-3">
          <span className="text-uppercase fw-semibold tracking-wider fs-7 text-white-50 d-block mb-2">
            GET NEWSLETTER
          </span>
          <h2 className="fw-bold mb-0">Sign Up to Newsletter</h2>
        </div>

        <div className="bg-white rounded-top-4 p-4 p-md-5 mt-auto newsletter-card-width shadow-sm position-relative">
          <div className="text-center mb-5">
            <BsSend className="fs-3 text-dark transform-plane" />
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto newsletter-form"
          >
            <div className="input-wrapper d-flex align-items-center p-1 rounded-pill position-relative">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="form-control border-0 bg-transparent ps-4 shadow-none text-dark"
                required
              />
              <button
                type="submit"
                className="subscribe-btn btn rounded-pill text-white fw-semibold px-4 py-2 d-flex align-items-center gap-2 text-uppercase flex-shrink-0"
              >
                SUBSCRIBE NOW <BsArrowUpRight size={16} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Formsignin;
