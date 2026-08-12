import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsInstagram } from "react-icons/bs";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Shapemorphslider.css";
import imgone from "./assets/gallery-item-1.jpg";
import imgtwo from "./assets/gallery-item-2.jpg";
import imgthree from "./assets/gallery-item-3.jpg";
import imgfour from "./assets/gallery-item-4.jpg";
import imgfive from "./assets/gallery-item-5.jpg";
import imgsix from "./assets/gallery-item-6.jpg";

const images = [imgone, imgtwo, imgthree, imgfour, imgfive, imgsix];

function Shapemorphslider() {
  return (
    <>
      <section className="shape-swiper-section py-5 overflow-hidden">
        <div className="container-fluid px-0">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            slidesPerView={5}
            spaceBetween={24}
            centeredSlides={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 12 },
              576: { slidesPerView: 3, spaceBetween: 16 },
              992: { slidesPerView: 4, spaceBetween: 20 },
              1200: { slidesPerView: 5, spaceBetween: 24 },
            }}
            className="shape-swiper"
          >
        
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="shape-card-wrapper position-relative">
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-100 h-100 object-fit-cover"
                  />
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="insta-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center text-decoration-none"
                  >
                    <BsInstagram className="insta-icon" size={32} />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Shapemorphslider;
