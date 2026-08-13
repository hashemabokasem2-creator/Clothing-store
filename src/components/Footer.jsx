import React from "react";
import "./Footer.css";
import {
  BsGooglePlay,
  BsApple,
  BsFacebook,
  BsTwitterX,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";

import {
  FaCcPaypal,
  FaApplePay,
  FaGooglePay,
  FaCcStripe,
  FaSquare,
  FaCcAmazonPay,
} from "react-icons/fa6";
import logoo from "../assets/logo-white.svg";

function Footer() {
  return (
    <>
      <footer className="footerr p-5">
        <div className="container">
          <div className="row g-4 border-bottom border-secondary border-opacity-25 pb-4">
            <div className="col-lg-2 col-md-4 col-6 text-start">
              <h5 className="fw-bold text-white mb-3 fs-5">Brands</h5>
              <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-2">
                <li>
                  <a href="#" className="footer-link">
                    Zara
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Guess
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Mango
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    LCWaikiki
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Monda
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-6 text-start">
              <h5 className="fw-bold text-white mb-3 fs-5">Categories</h5>
              <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-2">
                <li>
                  <a href="#" className="footer-link">
                    Watches
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Watch Accessories
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Clocks
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Jewellery
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Women’s Collection
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-6 text-start">
              <h5 className="fw-bold text-white mb-3 fs-5">Accessories</h5>
              <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-2">
                <li>
                  <a href="#" className="footer-link">
                    Order Tracking
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-6 text-start">
              <h5 className="fw-bold text-white mb-3 fs-5">Services</h5>
              <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-2">
                <li>
                  <a href="#" className="footer-link">
                    Sale
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Quick Ship
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    New Designs
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Protection Plan
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Gift Cards
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-6 text-start">
              <h5 className="fw-bold text-white mb-3 fs-5">Policies</h5>
              <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-2">
                <li>
                  <a href="#" className="footer-link">
                    Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Dressy Inside
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Company
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-6 text-start">
              <h5 className="fw-bold text-white mb-3 fs-5">Help</h5>
              <ul className="list-unstyled p-0 m-0 d-flex flex-column gap-2">
                <li>
                  <a href="#" className="footer-link">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Refund policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row align-items-center py-4 border-bottom border-secondary border-opacity-25 g-4">
            <div className="col-lg-3 col-md-6 text-start">
              <h6 className="fw-bold text-white mb-3">Download Our Apps</h6>
              <div className="d-flex align-items-center gap-2">
                <a
                  href="#"
                  className="app-icon-btn d-flex align-items-center justify-content-center rounded-circle text-decoration-none"
                >
                  <BsGooglePlay size={18} />
                </a>
                <a
                  href="#"
                  className="app-icon-btn d-flex align-items-center justify-content-center rounded-circle text-decoration-none"
                >
                  <BsApple size={18} />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-start">
              <h6 className="fw-bold text-white mb-3">Follow us</h6>
              <div className="d-flex align-items-center gap-2">
                <a
                  href="#"
                  className="social-icon-btn d-flex align-items-center justify-content-center rounded-circle text-decoration-none"
                >
                  <BsFacebook size={16} />
                </a>
                <a
                  href="#"
                  className="social-icon-btn d-flex align-items-center justify-content-center rounded-circle text-decoration-none"
                >
                  <BsTwitterX size={16} />
                </a>
                <a
                  href="#"
                  className="social-icon-btn d-flex align-items-center justify-content-center rounded-circle text-decoration-none"
                >
                  <BsLinkedin size={16} />
                </a>
                <a
                  href="#"
                  className="social-icon-btn d-flex align-items-center justify-content-center rounded-circle text-decoration-none"
                >
                  <BsYoutube size={16} />
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 text-start">
              <h6 className="fw-bold text-white mb-2">Need help? Call now!</h6>
              <a
                href="tel:50080018588"
                className="text-white fw-bold fs-4 text-decoration-none d-inline-block"
              >
                <span className="phone-number-link">(500) 8001 8588</span> ,
                <span className="phone-number-link"> (500) 544 6550</span>
              </a>
            </div>
            <div className="col-lg-2 col-md-6 d-flex justify-content-lg-end justify-content-start">
              <img src={logoo} alt="Glamics Logo" className="img-fluid" />
            </div>
          </div>
          <div className="row align-items-center pt-4 g-3">
            {/* Copyright Text */}
            <div className="col-md-6 text-start">
              <p className="mb-0 text-secondary footer-link small">
                Copyright 2024 © Temptics
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-md-end justify-content-start gap-2 align-items-center">
              <a
                href="#"
                className="payment-badge rounded-2 overflow-hidden d-inline-block"
              >
                <FaCcPaypal size={36} color="#003087" />
              </a>
              <a
                href="#"
                className="payment-badge rounded-2 overflow-hidden d-inline-block"
              >
                <FaApplePay size={36} color="#000000" />
              </a>
              <a
                href="#"
                className="payment-badge rounded-2 overflow-hidden d-inline-block"
              >
                <FaGooglePay size={36} color="#4285F4" />
              </a>
              <a
                href="#"
                className="payment-badge rounded-2 overflow-hidden d-inline-block"
              >
                <FaCcStripe size={36} color="#635BFF" />
              </a>
              <a
                href="#"
                className="payment-badge rounded-2 overflow-hidden d-inline-block"
              >
                <FaSquare size={36} color="#000000" />
              </a>
              <a
                href="#"
                className="payment-badge rounded-2 overflow-hidden d-inline-block"
              >
                <FaCcAmazonPay size={36} color="#FF9900" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
