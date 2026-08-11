import React from "react";
import "./Trendingflash.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { BsArrowUpRight, BsBag, BsEye, BsHeart } from "react-icons/bs";
import imageone from "./assets/product-img-1.jpg";
import imagetwo from "./assets/product-img-2.jpg";
import imagethree from "./assets/product-img-3.jpg";
import imagefour from "./assets/product-img-sm-2.jpg";
import imagefive from "./assets/product-img-4.jpg";
import imagesix from "./assets/product-img-5.jpg";

function Trendingflash() {
  return (
    <>
      <section className="container-hero m-5 pt-5 pb-5 rounded-5">
        <div className="container">
          <div className="row align-items-center border-bottom border-dark pb-4 my-3">
            <div className="col-12 col-md-4 d-flex flex-column align-items-center align-items-md-start mb-3 mb-md-0">
              <span className="text-danger fw-semibold text-uppercase fs-7 tracking-wide mb-1">
                NEW COLLECTION
              </span>
              <h2 className="fw-bold text-dark m-0 fs-3">
                Trending Flash Sell
              </h2>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center gap-2 mb-3 mb-md-0">
              <div className="timer-circle bg-white rounded-circle d-flex flex-column align-items-center justify-content-center shadow-sm">
                <span className="fw-bold fs-6 text-dark lh-1">15</span>
                <small className="text-muted fs-8">Days</small>
              </div>
              <div className="timer-circle bg-white rounded-circle d-flex flex-column align-items-center justify-content-center shadow-sm">
                <span className="fw-bold fs-6 text-dark lh-1">19</span>
                <small className="text-muted fs-8">Hours</small>
              </div>
              <div className="timer-circle bg-white rounded-circle d-flex flex-column align-items-center justify-content-center shadow-sm">
                <span className="fw-bold fs-6 text-dark lh-1">50</span>
                <small className="text-muted fs-8">Min</small>
              </div>
              <div className="timer-circle bg-white rounded-circle d-flex flex-column align-items-center justify-content-center shadow-sm">
                <span className="fw-bold fs-6 text-dark lh-1">30</span>
                <small className="text-muted fs-8">Sec</small>
              </div>
            </div>

            <div className="col-12 col-md-4 d-flex justify-content-md-end justify-content-center align-items-center">
              <a
                href="#"
                className="view-all-btn btn btn-outline-light rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2 fw-semibold text-uppercase"
              >
                VIEW ALL COLLECTION <BsArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 25,
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
                          src={imagesix}
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Trendingflash;
