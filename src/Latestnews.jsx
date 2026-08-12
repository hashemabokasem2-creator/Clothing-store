import React from "react";
import "./Latestnews.css";
import { Card } from "react-bootstrap";
import { BsPerson, BsArrowUpRight } from "react-icons/bs";
import blogImgone from "./assets/blog-1.jpg";
import blogImgtwo from "./assets/blog-2.jpg";
import blogImgthree from "./assets/blog-3.jpg";

function Latestnews() {
  return (
    <>
      <section className="container mt-5 pt-5">
        <div className="row align-items-center justify-content-center my-4">
          <div className="col-md-5">
            <span className="text-uppercase fw-semibold text-danger-custom fs-7 tracking-wider d-block mb-1">
              NEWS & BLOG
            </span>
            <h2 className="fw-bold text-dark mb-0 fs-2">Latest News & Blog</h2>
          </div>

          <div className="col-md-5 d-flex justify-content-md-end mt-3 mt-md-0">
            <a
              href="#"
              className="view-all-btn text-decoration-none fw-semibold text-dark text-uppercase d-inline-flex align-items-center gap-1 fs-7"
            >
              VIEW ALL BLOG <BsArrowUpRight className="arrow-icon" size={16} />
            </a>
          </div>
        </div>
        <div className="row align-items-center justify-content-center my-5">
          <div className="col-md-4 mt-3">
            <Card className="border-0 bg-transparent h-100">
              <div className="position-relative overflow-hidden rounded-4">
                <Card.Img
                  variant="top"
                  src={blogImgone}
                  alt="Cuticle Pushers & Trimmers"
                  className="w-100 object-fit-cover blog-card-img"
                />
                <div className="date-badge position-absolute top-0 start-0 m-3 text-white text-center rounded-3 p-2 fw-bold">
                  <span className="fs-5 d-block lh-1">15</span>
                  <span className="small fw-normal">Dec</span>
                </div>
              </div>
              <Card.Body className="px-0 pt-3 pb-0 d-flex flex-column align-items-start">
                <div className="d-flex align-items-center gap-2 text-danger-custom mb-2">
                  <BsPerson size={18} />
                  <span className="fw-semibold small">By Admin</span>
                </div>
                <Card.Title as="h5" className="fw-bold mb-2">
                  <a
                    href="#"
                    className="blog-title-link text-decoration-none text-dark"
                  >
                    Cuticle Pushers & Trimmers
                  </a>
                </Card.Title>
                <Card.Text className="text-secondary small mb-3">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration
                </Card.Text>
                <a
                  href="#"
                  className="read-more-btn btn rounded-pill px-4 py-2 text-uppercase fw-semibold d-inline-flex align-items-center gap-2"
                >
                  READ MORE <BsArrowUpRight size={16} />
                </a>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mt-3">
              <Card className="border-0 bg-transparent h-100">
              <div className="position-relative overflow-hidden rounded-4">
                <Card.Img
                  variant="top"
                  src={blogImgtwo}
                  alt="Cuticle Pushers & Trimmers"
                  className="w-100 object-fit-cover blog-card-img"
                />
                <div className="date-badge position-absolute top-0 start-0 m-3 text-white text-center rounded-3 p-2 fw-bold">
                  <span className="fs-5 d-block lh-1">15</span>
                  <span className="small fw-normal">Dec</span>
                </div>
              </div>
              <Card.Body className="px-0 pt-3 pb-0 d-flex flex-column align-items-start">
                <div className="d-flex align-items-center gap-2 text-danger-custom mb-2">
                  <BsPerson size={18} />
                  <span className="fw-semibold small">By Admin</span>
                </div>
                <Card.Title as="h5" className="fw-bold mb-2">
                  <a
                    href="#"
                    className="blog-title-link text-decoration-none text-dark"
                  >
                    Cuticle Pushers & Trimmers
                  </a>
                </Card.Title>
                <Card.Text className="text-secondary small mb-3">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration
                </Card.Text>
                <a
                  href="#"
                  className="read-more-btn btn rounded-pill px-4 py-2 text-uppercase fw-semibold d-inline-flex align-items-center gap-2"
                >
                  READ MORE <BsArrowUpRight size={16} />
                </a>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mt-3">
              <Card className="border-0 bg-transparent h-100">
              <div className="position-relative overflow-hidden rounded-4">
                <Card.Img
                  variant="top"
                  src={blogImgthree}
                  alt="Cuticle Pushers & Trimmers"
                  className="w-100 object-fit-cover blog-card-img"
                />
                <div className="date-badge position-absolute top-0 start-0 m-3 text-white text-center rounded-3 p-2 fw-bold">
                  <span className="fs-5 d-block lh-1">15</span>
                  <span className="small fw-normal">Dec</span>
                </div>
              </div>
              <Card.Body className="px-0 pt-3 pb-0 d-flex flex-column align-items-start">
                <div className="d-flex align-items-center gap-2 text-danger-custom mb-2">
                  <BsPerson size={18} />
                  <span className="fw-semibold small">By Admin</span>
                </div>
                <Card.Title as="h5" className="fw-bold mb-2">
                  <a
                    href="#"
                    className="blog-title-link text-decoration-none text-dark"
                  >
                    Cuticle Pushers & Trimmers
                  </a>
                </Card.Title>
                <Card.Text className="text-secondary small mb-3">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration
                </Card.Text>
                <a
                  href="#"
                  className="read-more-btn btn rounded-pill px-4 py-2 text-uppercase fw-semibold d-inline-flex align-items-center gap-2"
                >
                  READ MORE <BsArrowUpRight size={16} />
                </a>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

export default Latestnews;
