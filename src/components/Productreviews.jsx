import React from "react";
import "./Productreviews.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { BsStarFill, BsStar, BsQuote } from "react-icons/bs";
import manimgone from "../assets/review-author-1.png";
import manimgtwo from "../assets/review-author-2.png";
import manimgthre from "../assets/review-author-3.png";
import manimgfou from "../assets/review-author-4.png";
import manimgfiv from "../assets/category-1.jpg";

function Productreviews() {
  return (
    <>
      <section className="m-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-4 d-flex flex-column align-items-center mb-3 mb-md-0">
            <span className="text-danger fw-semibold text-uppercase fs-7 tracking-wide mb-3">
              Customer Reviews
            </span>
            <h2 className="fw-bold text-dark m-0 fs-3 mb-3">Product Reviews</h2>
            <p className="text-secondary">
              Our references are very valuable, the result of a great effort...
            </p>
          </div>
        </div>
        <div className="row">
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
                <div className="card p-4 p-md-5 border-0 mb-5 rounded-4 shadow position-relative">
                  <div className="product-rating d-flex align-items-center gap-1 mb-3">
                    <BsStarFill className="star-icon fs-5 text-warning" />
                    <BsStarFill className="star-icon fs-5 text-warning" />
                    <BsStarFill className="star-icon fs-5 text-warning" />
                    <BsStarFill className="star-icon fs-5 text-warning" />
                    <BsStar className="star-icon fs-5 text-warning" />
                  </div>
                  <p className="text-dark mb-4 fs-6 lh-base">
                    Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed
                    ullamcorper tristique nisl at pharetra turpis accumsan et
                    etiam eu sollicitudin eros. In imperdiet accumsan.
                  </p>

                  <div className="d-flex align-items-center justify-content-between mt-auto">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={manimgone}
                        alt="Leslie Alexander"
                        className="author-avatar rounded-circle object-fit-cover"
                      />
                      <div>
                        <h6 className="fw-bold mb-1 text-dark fs-6">
                          Leslie Alexander
                        </h6>
                        <span className="text-secondary small d-block">
                          Medical Assistant
                        </span>
                      </div>
                    </div>

                    <BsQuote className="quote-icon display-5" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card p-4 p-md-5 border-0 rounded-4 shadow position-relative">
                  <div className="product-rating d-flex align-items-center gap-1 mb-3">
                    <BsStarFill className="star-icon fs-5 text-warning" />
                    <BsStarFill className="star-icon fs-5 text-warning" />
                    <BsStarFill className="star-icon fs-5 text-warning" />
                    <BsStarFill className="star-icon fs-5 text-warning" />
                    <BsStar className="star-icon fs-5 text-warning" />
                  </div>
                  <p className="text-dark mb-4 fs-6 lh-base">
                    Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed
                    ullamcorper tristique nisl at pharetra turpis accumsan et
                    etiam eu sollicitudin eros. In imperdiet accumsan.
                  </p>

                  <div className="d-flex align-items-center justify-content-between mt-auto">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={manimgtwo}
                        alt="Leslie Alexander"
                        className="author-avatar rounded-circle object-fit-cover"
                      />
                      <div>
                        <h6 className="fw-bold mb-1 text-dark fs-6">
                          Leslie Alexander
                        </h6>
                        <span className="text-secondary small d-block">
                          Medical Assistant
                        </span>
                      </div>
                    </div>

                    <BsQuote className="quote-icon display-5" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card p-4 p-md-5 border-0 rounded-4 shadow position-relative">
                  <div className="product-rating d-flex align-items-center gap-1 mb-3">
                    <BsStarFill className="star-icon fs-5 text-warning" />
                    <BsStarFill className="star-icon fs-5 text-warning" />
                    <BsStarFill className="star-icon fs-5 text-warning" />
                    <BsStarFill className="star-icon fs-5 text-warning" />
                    <BsStar className="star-icon fs-5 text-warning" />
                  </div>
                  <p className="text-dark mb-4 fs-6 lh-base">
                    Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed
                    ullamcorper tristique nisl at pharetra turpis accumsan et
                    etiam eu sollicitudin eros. In imperdiet accumsan.
                  </p>

                  <div className="d-flex align-items-center justify-content-between mt-auto">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={manimgthre}
                        alt="Leslie Alexander"
                        className="author-avatar rounded-circle object-fit-cover"
                      />
                      <div>
                        <h6 className="fw-bold mb-1 text-dark fs-6">
                          Leslie Alexander
                        </h6>
                        <span className="text-secondary small d-block">
                          Medical Assistant
                        </span>
                      </div>
                    </div>

                    <BsQuote className="quote-icon display-5" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card p-4 p-md-5 border-0 rounded-4 shadow position-relative">
                  <div className="product-rating d-flex align-items-center gap-1 mb-3">
                    <BsStarFill className="star-icon fs-5 text-warning" />
                    <BsStarFill className="star-icon fs-5 text-warning" />
                    <BsStarFill className="star-icon fs-5 text-warning" />
                    <BsStarFill className="star-icon fs-5 text-warning" />
                    <BsStar className="star-icon fs-5 text-warning" />
                  </div>
                  <p className="text-dark mb-4 fs-6 lh-base">
                    Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed
                    ullamcorper tristique nisl at pharetra turpis accumsan et
                    etiam eu sollicitudin eros. In imperdiet accumsan.
                  </p>

                  <div className="d-flex align-items-center justify-content-between mt-auto">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={manimgfou}
                        alt="Leslie Alexander"
                        className="author-avatar rounded-circle object-fit-cover"
                      />
                      <div>
                        <h6 className="fw-bold mb-1 text-dark fs-6">
                          Leslie Alexander
                        </h6>
                        <span className="text-secondary small d-block">
                          Medical Assistant
                        </span>
                      </div>
                    </div>

                    <BsQuote className="quote-icon display-5" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card p-4 p-md-5 border-0 rounded-4 shadow position-relative">
                  <div className="product-rating d-flex align-items-center gap-1 mb-3">
                    <BsStarFill className="star-icon fs-5 text-warning" />
                    <BsStarFill className="star-icon fs-5 text-warning" />
                    <BsStarFill className="star-icon fs-5 text-warning" />
                    <BsStarFill className="star-icon fs-5 text-warning" />
                    <BsStar className="star-icon fs-5 text-warning" />
                  </div>
                  <p className="text-dark mb-4 fs-6 lh-base">
                    Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed
                    ullamcorper tristique nisl at pharetra turpis accumsan et
                    etiam eu sollicitudin eros. In imperdiet accumsan.
                  </p>

                  <div className="d-flex align-items-center justify-content-between mt-auto">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={manimgfiv}
                        alt="Leslie Alexander"
                        className="author-avatar rounded-circle object-fit-cover"
                      />
                      <div>
                        <h6 className="fw-bold mb-1 text-dark fs-6">
                          Leslie Alexander
                        </h6>
                        <span className="text-secondary small d-block">
                          Medical Assistant
                        </span>
                      </div>
                    </div>

                    <BsQuote className="quote-icon display-5" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Productreviews;
