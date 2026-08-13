import React, { useState } from "react";
import "./Shopping.css";
import { BsArrowUpRight, BsBag, BsEye, BsHeart } from "react-icons/bs";
import bannerImg from "../assets/products-sub-banner-1.jpg";
import imageone from "../assets/product-img-1.jpg";
import imagetwo from "../assets/product-img-2.jpg";
import imagethree from "../assets/product-img-3.jpg";
import bannerimgtw from "../assets/products-sub-banner-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/navigation";

function Shopping() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  return (
    <>
      <section
        className="m-5 rounded-5 p-5"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="container mt-4">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6 text-center">
              <p className="subtitle text-uppercase mb-2">Summer collection</p>
              <h2 className="main-title fw-bold mb-3">Shopping Every Day</h2>
            </div>
            <div className="col-md-6 mt-3">
              <div className="d-flex justify-content-center justify-content-md-end">
                <a
                  href="#"
                  className="shop-btn d-inline-flex text-uppercase py-3 fw-bold align-items-center gap-2"
                >
                  More Collection <BsArrowUpRight strokeWidth={1} />
                </a>
              </div>
            </div>
          </div>
          <div className="row g-4 align-items-center mt-3">
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="promo-card position-relative rounded-4 overflow-hidden text-center">
                <img
                  src={bannerImg}
                  alt="Trending Style"
                  className="w-100 d-block object-fit-cover"
                />
                <div className="card-overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex flex-column justify-content-end align-items-center p-3 p-md-4">
                  <h3 className="promo-title text-white fw-bold mb-2 mb-md-3">
                    Trending Now Only This Weekend!
                  </h3>
                  <a
                    href="#"
                    className="promo-btn d-inline-flex align-items-center justify-content-center text-decoration-none fw-semibold"
                  >
                    SHOP NOW{" "}
                    <BsArrowUpRight strokeWidth={1.2} className="btn-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8 col-xl-9">
              <div className="row g-3 d-none d-xl-flex">
                <div className="col-4">
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
                        <h6 className="fw-bold text-dark mb-1">
                          Orange Airsuit
                        </h6>
                        <small
                          className="text-pink fw-semibold text-uppercase"
                          style={{ color: "#e52e71", fontSize: "0.75rem" }}
                        >
                          FASHION BAG
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
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
                        <h6 className="fw-bold text-dark mb-1">
                          Orange Airsuit
                        </h6>
                        <small
                          className="text-pink fw-semibold text-uppercase"
                          style={{ color: "#e52e71", fontSize: "0.75rem" }}
                        >
                          FASHION BAG
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
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
                        <h6 className="fw-bold text-dark mb-1">
                          Orange Airsuit
                        </h6>
                        <small
                          className="text-pink fw-semibold text-uppercase"
                          style={{ color: "#e52e71", fontSize: "0.75rem" }}
                        >
                          FASHION BAG
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-xl-none">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    nextEl: ".prod-next-btn",
                    prevEl: ".prod-prev-btn",
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 15,
                    },
                    992: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                  }}
                >
                  <SwiperSlide>
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
                          <h6 className="fw-bold text-dark mb-1">
                            Orange Airsuit
                          </h6>
                          <small
                            className="text-pink fw-semibold text-uppercase"
                            style={{ color: "#e52e71", fontSize: "0.75rem" }}
                          >
                            FASHION BAG
                          </small>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
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
                          <h6 className="fw-bold text-dark mb-1">
                            Orange Airsuit
                          </h6>
                          <small
                            className="text-pink fw-semibold text-uppercase"
                            style={{ color: "#e52e71", fontSize: "0.75rem" }}
                          >
                            FASHION BAG
                          </small>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
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
                          <h6 className="fw-bold text-dark mb-1">
                            Orange Airsuit
                          </h6>
                          <small
                            className="text-pink fw-semibold text-uppercase"
                            style={{ color: "#e52e71", fontSize: "0.75rem" }}
                          >
                            FASHION BAG
                          </small>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="d-flex d-md-none justify-content-center mt-3">
                  <div className="custom-swiper-nav bg-white rounded-pill d-inline-flex align-items-center gap-3 px-3 py-2 border shadow-sm">
                    <button
                      type="button"
                      className="nav-btn prod-next-btn btn border-0 p-0 text-dark"
                    >
                      <BsChevronLeft strokeWidth={1} />
                    </button>
                    <button
                      type="button"
                      className="nav-btn prod-prev-btn btn border-0 p-0 text-dark"
                    >
                      <BsChevronRight strokeWidth={1} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="row g-4 align-items-center mt-3">
            <div className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="promo-card position-relative rounded-4 overflow-hidden text-center">
                <img
                  src={bannerimgtw}
                  alt="Trending Style"
                  className="w-100 d-block object-fit-cover"
                />
                <div className="card-overlay position-absolute top-0 bottom-0 start-0 end-0 d-flex flex-column justify-content-end align-items-center p-3 p-md-4">
                  <h3 className="promo-title text-white fw-bold mb-2 mb-md-3">
                    Trending Now Only This Weekend!
                  </h3>
                  <a
                    href="#"
                    className="promo-btn d-inline-flex align-items-center justify-content-center text-decoration-none fw-semibold"
                  >
                    SHOP NOW{" "}
                    <BsArrowUpRight strokeWidth={1.2} className="btn-icon" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8 col-xl-9">
              <div className="row g-3 d-none d-xl-flex">
                <div className="col-4">
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
                        <h6 className="fw-bold text-dark mb-1">
                          Orange Airsuit
                        </h6>
                        <small
                          className="text-pink fw-semibold text-uppercase"
                          style={{ color: "#e52e71", fontSize: "0.75rem" }}
                        >
                          FASHION BAG
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
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
                        <h6 className="fw-bold text-dark mb-1">
                          Orange Airsuit
                        </h6>
                        <small
                          className="text-pink fw-semibold text-uppercase"
                          style={{ color: "#e52e71", fontSize: "0.75rem" }}
                        >
                          FASHION BAG
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
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
                        <h6 className="fw-bold text-dark mb-1">
                          Orange Airsuit
                        </h6>
                        <small
                          className="text-pink fw-semibold text-uppercase"
                          style={{ color: "#e52e71", fontSize: "0.75rem" }}
                        >
                          FASHION BAG
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-xl-none">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    nextEl: ".prod-next-btn",
                    prevEl: ".prod-prev-btn",
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 15,
                    },
                    992: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                  }}
                >
                  <SwiperSlide>
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
                          <h6 className="fw-bold text-dark mb-1">
                            Orange Airsuit
                          </h6>
                          <small
                            className="text-pink fw-semibold text-uppercase"
                            style={{ color: "#e52e71", fontSize: "0.75rem" }}
                          >
                            FASHION BAG
                          </small>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
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
                          <h6 className="fw-bold text-dark mb-1">
                            Orange Airsuit
                          </h6>
                          <small
                            className="text-pink fw-semibold text-uppercase"
                            style={{ color: "#e52e71", fontSize: "0.75rem" }}
                          >
                            FASHION BAG
                          </small>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
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
                          <h6 className="fw-bold text-dark mb-1">
                            Orange Airsuit
                          </h6>
                          <small
                            className="text-pink fw-semibold text-uppercase"
                            style={{ color: "#e52e71", fontSize: "0.75rem" }}
                          >
                            FASHION BAG
                          </small>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="d-flex d-md-none justify-content-center mt-3">
                  <div className="custom-swiper-nav bg-white rounded-pill d-inline-flex align-items-center gap-3 px-3 py-2 border shadow-sm">
                    <button
                      type="button"
                      className="nav-btn prod-next-btn btn border-0 p-0 text-dark"
                    >
                      <BsChevronLeft strokeWidth={1} />
                    </button>
                    <button
                      type="button"
                      className="nav-btn prod-prev-btn btn border-0 p-0 text-dark"
                    >
                      <BsChevronRight strokeWidth={1} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shopping;
