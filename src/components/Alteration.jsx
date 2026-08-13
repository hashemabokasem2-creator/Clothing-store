import React from "react";
import "./Alteration.css";
import { Row, Col, Card } from "react-bootstrap";
import {
  BsArrowUpRight,
  BsPerson,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import blogImgone from "../assets/blog-1.jpg";
import blogImgtwo from "../assets/blog-2.jpg";
import blogImgthree from "../assets/blog-3.jpg";

function Alteration() {
  return (
    <>
      <section className="container mt-5 mb-5">
        <Row className="mb-4">
          <Col lg={4}>
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
          </Col>
          <Col lg={4}>
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
          </Col>
          <Col lg={4}>
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
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
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
          </Col>
          <Col lg={4}>
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
          </Col>
          <Col lg={4}>
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
      </section>
    </>
  );
}

export default Alteration;
