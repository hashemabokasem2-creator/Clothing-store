import React, { useState } from "react";
import "./Categories.css";
import { Row, Col } from "react-bootstrap";
import {
  BsChevronRight,
  BsStarFill,
  BsSearch,
  BsBag,
  BsEye,
  BsHeart,
  BsChevronLeft,
} from "react-icons/bs";
import imageone from "../assets/product-img-1.jpg";
import imagetwo from "../assets/product-img-2.jpg";
import imagethree from "../assets/product-img-3.jpg";
import imagefour from "../assets/product-img-4.jpg";
import imagefive from "../assets/product-img-5.jpg";

function Categories() {
  const [price, setPrice] = useState(19);
  const min = 19;
  const max = 69;
  const percentage = ((price - min) / (max - min)) * 100;
  return (
    <>
      <section className="container mt-5">
        <Row className="text-center">
          <Col lg={3}>
            <div className="search-card-bg p-4 mb-4 rounded-3">
              <div className="position-relative d-flex align-items-center">
                <input
                  type="text"
                  placeholder="Search Items"
                  className="form-control border-0 py-2 ps-3 pe-5 rounded-3 shadow-none text-muted search-input-bg"
                />
                <BsSearch className="search-icon position-absolute end-0 me-3" />
              </div>
            </div>
            <div className="filter-card-bg p-4 mb-4 rounded-3">
              <h6 className="fw-bold text-start mb-3 text-dark">
                Filter by price
              </h6>
              <div className="bg-white p-3 rounded-4">
                <input
                  type="range"
                  className="form-range custom-price-slider w-100 mb-2"
                  min={min}
                  max={max}
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #f82e56 ${percentage}%, #ffffff ${percentage}%)`,
                  }}
                />
                <div className="fw-bold text-dark price-text">
                  $19 - ${price}
                </div>
              </div>
            </div>
            <div className="categories-card-bg p-4 mb-4 rounded-3">
              <h6 className="fw-bold mb-3 text-start text-dark">Categories</h6>
              <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                <li>
                  <a
                    href="#"
                    className="category-link d-flex align-items-center gap-2 text-decoration-none"
                  >
                    <BsChevronRight className="category-icon" />
                    <span>Lifestyle</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="category-link d-flex align-items-center gap-2 text-decoration-none"
                  >
                    <BsChevronRight className="category-icon" />
                    <span>Beauty & Fashion</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="category-link d-flex align-items-center gap-2 text-decoration-none"
                  >
                    <BsChevronRight className="category-icon" />
                    <span>Fitness & Health</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="category-link d-flex align-items-center gap-2 text-decoration-none"
                  >
                    <BsChevronRight className="category-icon" />
                    <span>Food & Cooking</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="category-link d-flex align-items-center gap-2 text-decoration-none"
                  >
                    <BsChevronRight className="category-icon" />
                    <span>Tech & Gadgets</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="category-link d-flex align-items-center gap-2 text-decoration-none"
                  >
                    <BsChevronRight className="category-icon" />
                    <span>Entertainment</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="filter-color-card p-4 mb-4 rounded-3">
              <h6 className="fw-bold mb-3 text-start text-dark">
                Filter By Color
              </h6>
              <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                <li>
                  <a
                    href="#"
                    className="color-item d-flex align-items-center justify-content-between text-decoration-none"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span className="color-dot bg-black"></span>
                      <span>Black</span>
                    </div>
                    <span className="color-count">14</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="color-item d-flex align-items-center justify-content-between text-decoration-none"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span className="color-dot bg-success"></span>
                      <span>Green</span>
                    </div>
                    <span className="color-count">14</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="color-item d-flex align-items-center justify-content-between text-decoration-none"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span className="color-dot bg-primary"></span>
                      <span>Blue</span>
                    </div>
                    <span className="color-count">14</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="color-item d-flex align-items-center justify-content-between text-decoration-none"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span className="color-dot bg-danger"></span>
                      <span>Red</span>
                    </div>
                    <span className="color-count">14</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="color-item d-flex align-items-center justify-content-between text-decoration-none"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span className="color-dot bg-warning"></span>
                      <span>Yellow</span>
                    </div>
                    <span className="color-count">14</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="color-item d-flex align-items-center justify-content-between text-decoration-none"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span className="color-dot color-brown"></span>
                      <span>Brown</span>
                    </div>
                    <span className="color-count">14</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="color-item d-flex align-items-center justify-content-between text-decoration-none"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span className="color-dot bg-white border"></span>
                      <span>White</span>
                    </div>
                    <span className="color-count">14</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="categories-card-bg p-4 mb-4 rounded-3">
              <h6 className="fw-bold text-start mb-3 text-dark">
                Product Status
              </h6>
              <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                <li>
                  <a
                    href="#"
                    className="category-link d-flex align-items-center gap-2 text-decoration-none"
                  >
                    <BsChevronRight className="category-icon" />
                    <span> In stock</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="category-link d-flex align-items-center gap-2 text-decoration-none"
                  >
                    <BsChevronRight className="category-icon" />
                    <span> On Sale</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="filter-color-card p-5 mb-4 rounded-3">
              <h6 className="fw-bold mb-3 text-start text-dark">
                Filter By Color
              </h6>
              <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                <li>
                  <a
                    href="#"
                    className="color-item d-flex align-items-center justify-content-between text-decoration-none"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span className="fs-6">S</span>
                    </div>
                    <span className="color-count">14</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="color-item d-flex align-items-center justify-content-between text-decoration-none"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span className="fs-6">L</span>
                    </div>
                    <span className="color-count">14</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="color-item d-flex align-items-center justify-content-between text-decoration-none"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span className="fs-6">M</span>
                    </div>
                    <span className="color-count">14</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="color-item d-flex align-items-center justify-content-between text-decoration-none"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span className="fs-6">XL</span>
                    </div>
                    <span className="color-count">14</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="color-item d-flex align-items-center justify-content-between text-decoration-none"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <span className="fs-6">XXL</span>
                    </div>
                    <span className="color-count">14</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="review-star-card p-4 mb-4 rounded-3">
              <h6 className="fw-bold text-start mb-3 text-dark">Review Star</h6>
              <ul className="list-unstyled mb-0 d-flex flex-column gap-3">
                <li className="d-flex align-items-center justify-content-between">
                  <label className="d-flex align-items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="custom-star-checkbox" />
                    <div className="d-flex gap-1 text-orange">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                  </label>
                  <span className="star-label-text">5 Only</span>
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <label className="d-flex align-items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="custom-star-checkbox" />
                    <div className="d-flex gap-1 text-orange">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                  </label>
                  <span className="star-label-text">4 & up</span>
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <label className="d-flex align-items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="custom-star-checkbox" />
                    <div className="d-flex gap-1 text-orange">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                  </label>
                  <span className="star-label-text">3 & up</span>
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <label className="d-flex align-items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="custom-star-checkbox" />
                    <div className="d-flex gap-1 text-orange">
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                  </label>
                  <span className="star-label-text">2 & up</span>
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <label className="d-flex align-items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="custom-star-checkbox" />
                    <div className="d-flex gap-1 text-orange">
                      <BsStarFill />
                    </div>
                  </label>
                  <span className="star-label-text">1 & up</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={9}>
            <Row>
              <Col lg={4}>
                <div className="p-3 border border rounded-4 text-center bg-light">
                  <div className="product-card p-3 rounded-4 bg-white position-relative border border-light">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="fw-bold fs-5 text-dark">$99.00</span>
                      <span className="badge bg-dark rounded-pill px-3 py-2 fw-normal">
                        25% Off
                      </span>
                    </div>
                    <div className="product-img-wrapper position-relative overflow-hidden rounded-3 mb-3">
                      <img
                        src={imageone}
                        alt="Orange Airsuit"
                        className="w-100 h-auto product-img d-block"
                      />
                      <div className="product-actions position-absolute top-50 start-50 translate-middle d-flex gap-2">
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsBag size={16} />
                        </button>
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsEye size={16} />
                        </button>
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsHeart size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="text-start">
                      <h6 className="fw-bold text-dark mb-1">Orange Airsuit</h6>
                      <small
                        className="text-pink fw-semibold text-uppercase"
                        style={{ color: "#e52e71", fontSize: "0.75rem" }}
                      >
                        FASHION BAG
                      </small>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="p-3 border border rounded-4 text-center bg-light">
                  <div className="product-card p-3 rounded-4 bg-white position-relative border border-light">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="fw-bold fs-5 text-dark">$99.00</span>
                      <span className="badge bg-dark rounded-pill px-3 py-2 fw-normal">
                        25% Off
                      </span>
                    </div>
                    <div className="product-img-wrapper position-relative overflow-hidden rounded-3 mb-3">
                      <img
                        src={imagetwo}
                        alt="Orange Airsuit"
                        className="w-100 h-auto product-img d-block"
                      />
                      <div className="product-actions position-absolute top-50 start-50 translate-middle d-flex gap-2">
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsBag size={16} />
                        </button>
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsEye size={16} />
                        </button>
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsHeart size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="text-start">
                      <h6 className="fw-bold text-dark mb-1">Orange Airsuit</h6>
                      <small
                        className="text-pink fw-semibold text-uppercase"
                        style={{ color: "#e52e71", fontSize: "0.75rem" }}
                      >
                        FASHION BAG
                      </small>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="p-3 border border rounded-4 text-center bg-light">
                  <div className="product-card p-3 rounded-4 bg-white position-relative border border-light">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="fw-bold fs-5 text-dark">$99.00</span>
                      <span className="badge bg-dark rounded-pill px-3 py-2 fw-normal">
                        25% Off
                      </span>
                    </div>
                    <div className="product-img-wrapper position-relative overflow-hidden rounded-3 mb-3">
                      <img
                        src={imagethree}
                        alt="Orange Airsuit"
                        className="w-100 h-auto product-img d-block"
                      />
                      <div className="product-actions position-absolute top-50 start-50 translate-middle d-flex gap-2">
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsBag size={16} />
                        </button>
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsEye size={16} />
                        </button>
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsHeart size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="text-start">
                      <h6 className="fw-bold text-dark mb-1">Orange Airsuit</h6>
                      <small
                        className="text-pink fw-semibold text-uppercase"
                        style={{ color: "#e52e71", fontSize: "0.75rem" }}
                      >
                        FASHION BAG
                      </small>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={4} className="mt-4">
                <div className="p-3 border border rounded-4 text-center bg-light">
                  <div className="product-card p-3 rounded-4 bg-white position-relative border border-light">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="fw-bold fs-5 text-dark">$99.00</span>
                      <span className="badge bg-dark rounded-pill px-3 py-2 fw-normal">
                        25% Off
                      </span>
                    </div>
                    <div className="product-img-wrapper position-relative overflow-hidden rounded-3 mb-3">
                      <img
                        src={imagefour}
                        alt="Orange Airsuit"
                        className="w-100 h-auto product-img d-block"
                      />
                      <div className="product-actions position-absolute top-50 start-50 translate-middle d-flex gap-2">
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsBag size={16} />
                        </button>
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsEye size={16} />
                        </button>
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsHeart size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="text-start">
                      <h6 className="fw-bold text-dark mb-1">Orange Airsuit</h6>
                      <small
                        className="text-pink fw-semibold text-uppercase"
                        style={{ color: "#e52e71", fontSize: "0.75rem" }}
                      >
                        FASHION BAG
                      </small>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} className="mt-4">
                <div className="p-3 border border rounded-4 text-center bg-light">
                  <div className="product-card p-3 rounded-4 bg-white position-relative border border-light">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="fw-bold fs-5 text-dark">$99.00</span>
                      <span className="badge bg-dark rounded-pill px-3 py-2 fw-normal">
                        25% Off
                      </span>
                    </div>
                    <div className="product-img-wrapper position-relative overflow-hidden rounded-3 mb-3">
                      <img
                        src={imagefive}
                        alt="Orange Airsuit"
                        className="w-100 h-auto product-img d-block"
                      />
                      <div className="product-actions position-absolute top-50 start-50 translate-middle d-flex gap-2">
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsBag size={16} />
                        </button>
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsEye size={16} />
                        </button>
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsHeart size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="text-start">
                      <h6 className="fw-bold text-dark mb-1">Orange Airsuit</h6>
                      <small
                        className="text-pink fw-semibold text-uppercase"
                        style={{ color: "#e52e71", fontSize: "0.75rem" }}
                      >
                        FASHION BAG
                      </small>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} className="mt-4">
                <div className="p-3 border border rounded-4 text-center bg-light">
                  <div className="product-card p-3 rounded-4 bg-white position-relative border border-light">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="fw-bold fs-5 text-dark">$99.00</span>
                      <span className="badge bg-dark rounded-pill px-3 py-2 fw-normal">
                        25% Off
                      </span>
                    </div>
                    <div className="product-img-wrapper position-relative overflow-hidden rounded-3 mb-3">
                      <img
                        src={imagetwo}
                        alt="Orange Airsuit"
                        className="w-100 h-auto product-img d-block"
                      />
                      <div className="product-actions position-absolute top-50 start-50 translate-middle d-flex gap-2">
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsBag size={16} />
                        </button>
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsEye size={16} />
                        </button>
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsHeart size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="text-start">
                      <h6 className="fw-bold text-dark mb-1">Orange Airsuit</h6>
                      <small
                        className="text-pink fw-semibold text-uppercase"
                        style={{ color: "#e52e71", fontSize: "0.75rem" }}
                      >
                        FASHION BAG
                      </small>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={4} className="mt-4">
                <div className="p-3 border border rounded-4 text-center bg-light">
                  <div className="product-card p-3 rounded-4 bg-white position-relative border border-light">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="fw-bold fs-5 text-dark">$99.00</span>
                      <span className="badge bg-dark rounded-pill px-3 py-2 fw-normal">
                        25% Off
                      </span>
                    </div>
                    <div className="product-img-wrapper position-relative overflow-hidden rounded-3 mb-3">
                      <img
                        src={imageone}
                        alt="Orange Airsuit"
                        className="w-100 h-auto product-img d-block"
                      />
                      <div className="product-actions position-absolute top-50 start-50 translate-middle d-flex gap-2">
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsBag size={16} />
                        </button>
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsEye size={16} />
                        </button>
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsHeart size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="text-start">
                      <h6 className="fw-bold text-dark mb-1">Orange Airsuit</h6>
                      <small
                        className="text-pink fw-semibold text-uppercase"
                        style={{ color: "#e52e71", fontSize: "0.75rem" }}
                      >
                        FASHION BAG
                      </small>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} className="mt-4">
                <div className="p-3 border border rounded-4 text-center bg-light">
                  <div className="product-card p-3 rounded-4 bg-white position-relative border border-light">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="fw-bold fs-5 text-dark">$99.00</span>
                      <span className="badge bg-dark rounded-pill px-3 py-2 fw-normal">
                        25% Off
                      </span>
                    </div>
                    <div className="product-img-wrapper position-relative overflow-hidden rounded-3 mb-3">
                      <img
                        src={imagetwo}
                        alt="Orange Airsuit"
                        className="w-100 h-auto product-img d-block"
                      />
                      <div className="product-actions position-absolute top-50 start-50 translate-middle d-flex gap-2">
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsBag size={16} />
                        </button>
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsEye size={16} />
                        </button>
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsHeart size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="text-start">
                      <h6 className="fw-bold text-dark mb-1">Orange Airsuit</h6>
                      <small
                        className="text-pink fw-semibold text-uppercase"
                        style={{ color: "#e52e71", fontSize: "0.75rem" }}
                      >
                        FASHION BAG
                      </small>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} className="mt-4">
                <div className="p-3 border border rounded-4 text-center bg-light">
                  <div className="product-card p-3 rounded-4 bg-white position-relative border border-light">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="fw-bold fs-5 text-dark">$99.00</span>
                      <span className="badge bg-dark rounded-pill px-3 py-2 fw-normal">
                        25% Off
                      </span>
                    </div>
                    <div className="product-img-wrapper position-relative overflow-hidden rounded-3 mb-3">
                      <img
                        src={imagethree}
                        alt="Orange Airsuit"
                        className="w-100 h-auto product-img d-block"
                      />
                      <div className="product-actions position-absolute top-50 start-50 translate-middle d-flex gap-2">
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsBag size={16} />
                        </button>
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsEye size={16} />
                        </button>
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsHeart size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="text-start">
                      <h6 className="fw-bold text-dark mb-1">Orange Airsuit</h6>
                      <small
                        className="text-pink fw-semibold text-uppercase"
                        style={{ color: "#e52e71", fontSize: "0.75rem" }}
                      >
                        FASHION BAG
                      </small>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mb-4 border-bottom pb-4">
              <Col lg={4} className="mt-4">
                <div className="p-3 border border rounded-4 text-center bg-light">
                  <div className="product-card p-3 rounded-4 bg-white position-relative border border-light">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="fw-bold fs-5 text-dark">$99.00</span>
                      <span className="badge bg-dark rounded-pill px-3 py-2 fw-normal">
                        25% Off
                      </span>
                    </div>
                    <div className="product-img-wrapper position-relative overflow-hidden rounded-3 mb-3">
                      <img
                        src={imagefour}
                        alt="Orange Airsuit"
                        className="w-100 h-auto product-img d-block"
                      />
                      <div className="product-actions position-absolute top-50 start-50 translate-middle d-flex gap-2">
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsBag size={16} />
                        </button>
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsEye size={16} />
                        </button>
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsHeart size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="text-start">
                      <h6 className="fw-bold text-dark mb-1">Orange Airsuit</h6>
                      <small
                        className="text-pink fw-semibold text-uppercase"
                        style={{ color: "#e52e71", fontSize: "0.75rem" }}
                      >
                        FASHION BAG
                      </small>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} className="mt-4">
                <div className="p-3 border border rounded-4 text-center bg-light">
                  <div className="product-card p-3 rounded-4 bg-white position-relative border border-light">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="fw-bold fs-5 text-dark">$99.00</span>
                      <span className="badge bg-dark rounded-pill px-3 py-2 fw-normal">
                        25% Off
                      </span>
                    </div>
                    <div className="product-img-wrapper position-relative overflow-hidden rounded-3 mb-3">
                      <img
                        src={imagefive}
                        alt="Orange Airsuit"
                        className="w-100 h-auto product-img d-block"
                      />
                      <div className="product-actions position-absolute top-50 start-50 translate-middle d-flex gap-2">
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsBag size={16} />
                        </button>
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsEye size={16} />
                        </button>
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsHeart size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="text-start">
                      <h6 className="fw-bold text-dark mb-1">Orange Airsuit</h6>
                      <small
                        className="text-pink fw-semibold text-uppercase"
                        style={{ color: "#e52e71", fontSize: "0.75rem" }}
                      >
                        FASHION BAG
                      </small>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} className="mt-4">
                <div className="p-3 border border rounded-4 text-center bg-light">
                  <div className="product-card p-3 rounded-4 bg-white position-relative border border-light">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="fw-bold fs-5 text-dark">$99.00</span>
                      <span className="badge bg-dark rounded-pill px-3 py-2 fw-normal">
                        25% Off
                      </span>
                    </div>
                    <div className="product-img-wrapper position-relative overflow-hidden rounded-3 mb-3">
                      <img
                        src={imagetwo}
                        alt="Orange Airsuit"
                        className="w-100 h-auto product-img d-block"
                      />
                      <div className="product-actions position-absolute top-50 start-50 translate-middle d-flex gap-2">
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsBag size={16} />
                        </button>
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsEye size={16} />
                        </button>
                        <button className="action-btn d-flex align-items-center justify-content-center rounded-circle border p-0">
                          <BsHeart size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="text-start">
                      <h6 className="fw-bold text-dark mb-1">Orange Airsuit</h6>
                      <small
                        className="text-pink fw-semibold text-uppercase"
                        style={{ color: "#e52e71", fontSize: "0.75rem" }}
                      >
                        FASHION BAG
                      </small>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="my-5 justify-content-center">
              <Col xs="auto">
                <div className="d-flex align-items-center gap-2">
                  <a
                    href="#"
                    className="pagination-arrow me-2 text-decoration-none"
                  >
                    <BsChevronLeft />
                  </a>
                  <a
                    href="#"
                    className="pagination-num active text-decoration-none"
                  >
                    01
                  </a>
                  <a href="#" className="pagination-num text-decoration-none">
                    02
                  </a>
                  <a href="#" className="pagination-num text-decoration-none">
                    03
                  </a>
                  <a href="#" className="pagination-num text-decoration-none">
                    04
                  </a>
                  <a href="#" className="pagination-num text-decoration-none">
                    05
                  </a>
                  <a
                    href="#"
                    className="pagination-arrow ms-2 text-decoration-none"
                  >
                    <BsChevronRight />
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Categories;
