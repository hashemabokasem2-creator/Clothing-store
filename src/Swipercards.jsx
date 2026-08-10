import React from "react";
import "./Swipercards.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BsArrowUpRight, BsChevronUp, BsChevronDown } from "react-icons/bs";
import imageone from "./assets/banner-slide-1.jpg";
import imagetwo from "./assets/banner-slide-2.jpg";
import imagethree from "./assets/banner-slide-3.jpg";
import imagefour from "./assets/banner-slide-4.jpg";
import imagefive from "./assets/banner-slide-5.jpg";
import imagesix from "./assets/banner-slide-6.jpg";

function Swipercards() {
  return (
    <>
      <section className="pe-0 pt-4 ps-lg-5 pt-lg-5 pb-lg-5 m-0 w-100">
        <div className="row g-0 gx-4 m-0">
          <div
            className="col-12 col-lg-12 col-xl-7"
            style={{ flex: "0 0 auto" }}
          >
            <div className="banner-slider-container position-relative overflow-hidden rounded-4">
              <Swiper
                modules={[Autoplay, Navigation]}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                speed={800}
                navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }}
                className="banner-swiper"
              >
                <SwiperSlide>
                  <div className="d-flex align-items-center justify-content-between p-4 p-md-5 position-relative h-100">
                    <div className="slide-content z-2">
                      <p className="subtitle mb-2">
                        Perfect for Summer Evenings
                      </p>
                      <h1 className="main-title fw-bold mb-3">
                        Casual and Stylish for All Seasons
                      </h1>
                      <div className="price-tag mb-4">
                        Starting From <span className="fw-bold ms-1">$129</span>
                      </div>
                      <a
                        href="#"
                        className="shop-btn d-inline-flex align-items-center gap-2"
                      >
                        SHOP NOW <BsArrowUpRight />
                      </a>
                    </div>
                    <div className="slide-image position-absolute end-0 bottom-0 top-0 h-100">
                      <img
                        src={imageone}
                        alt="Summer Style"
                        className="w-100 h-100 object-fit-cover d-none d-md-block"
                      />
                      <img
                        src={imagefour}
                        alt="Product 1"
                        className="w-100 h-100 object-fit-cover d-block d-md-none"
                      />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="d-flex align-items-center justify-content-between p-4 p-md-5 position-relative h-100">
                    <div className="slide-content z-2">
                      <p className="subtitle mb-2">
                        Perfect for Summer Evenings
                      </p>
                      <h1 className="main-title fw-bold mb-3">
                        Casual and Stylish for All Seasons
                      </h1>
                      <div className="price-tag mb-4">
                        Starting From <span className="fw-bold ms-1">$129</span>
                      </div>
                      <a
                        href="#"
                        className="shop-btn d-inline-flex align-items-center gap-2"
                      >
                        SHOP NOW <BsArrowUpRight />
                      </a>
                    </div>
                    <div className="slide-image position-absolute end-0 bottom-0 top-0 h-100">
                      <img
                        src={imagetwo}
                        alt="Summer Style"
                        className="w-100 h-100 object-fit-cover d-none d-md-block"
                      />
                      <img
                        src={imagefive}
                        alt="Product 2"
                        className="w-100 h-100 object-fit-cover d-block d-md-none"
                      />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="d-flex align-items-center justify-content-between p-4 p-md-5 position-relative h-100">
                    <div className="slide-content z-2">
                      <p className="subtitle mb-2">
                        Perfect for Summer Evenings
                      </p>
                      <h1 className="main-title fw-bold mb-3">
                        Casual and Stylish for All Seasons
                      </h1>
                      <div className="price-tag mb-4">
                        Starting From <span className="fw-bold ms-1">$129</span>
                      </div>
                      <a
                        href="#"
                        className="shop-btn d-inline-flex align-items-center gap-2"
                      >
                        SHOP NOW <BsArrowUpRight />
                      </a>
                    </div>
                    <div className="slide-image position-absolute end-0 bottom-0 top-0 h-100">
                      <img
                        src={imagethree}
                        alt="Summer Style"
                        className="w-100 h-100 object-fit-cover d-none d-md-block"
                      />
                      <img
                        src={imagesix}
                        alt="Product 3"
                        className="w-100 h-100 object-fit-cover d-block d-md-none"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="custom-nav-container position-absolute top-50 translate-middle-y z-3 bg-white rounded-pill p-2 d-flex flex-column align-items-center gap-2 shadow-sm">
                <button
                  className="nav-btn custom-prev border-0 bg-transparent p-0 d-flex align-items-center justify-content-center"
                  aria-label="Previous"
                >
                  <BsChevronUp />
                </button>
                <button
                  className="nav-btn custom-next border-0 bg-transparent p-0 d-flex align-items-center justify-content-center"
                  aria-label="Next"
                >
                  <BsChevronDown />
                </button>
              </div>
            </div>
          </div>
          <div
            className="col-12 d-none d-xl-block"
            style={{ flex: "0 0 40%", maxWidth: "40%" }}
          >
            <div className="secondary-slider-container position-relative overflow-hidden rounded-4 h-100">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={2}
                spaceBetween={15}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                speed={800}
                className="secondary-swiper h-100"
              >
                <SwiperSlide>
                  <div className="card-image-wrapper h-100 rounded-3 overflow-hidden">
                    <img
                      src={imagefour}
                      alt="Product 1"
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card-image-wrapper h-100 rounded-3 overflow-hidden">
                    <img
                      src={imagefive}
                      alt="Product 2"
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="card-image-wrapper h-100 rounded-3 overflow-hidden">
                    <img
                      src={imagesix}
                      alt="Product 3"
                      className="w-100 h-100 object-fit-cover"
                    />
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

export default Swipercards;
