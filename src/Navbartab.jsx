import React, { useState } from "react";
import "./Navbartab.css";
import {
  Navbar,
  Container,
  Form,
  InputGroup,
  Nav,
  Offcanvas,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  BsSearch,
  BsPerson,
  BsHeart,
  BsBag,
  BsChevronDown,
  BsX,
  BsEye,
  BsFacebook,
  BsTwitterX,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import imageone from "./assets/logo.svg";
import imagetwo from "./assets/product-img-2.jpg";
import imagethree from "./assets/product-img-1.jpg";

function Navbartab() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("Select Category");

  const [showLargeMenu, setShowLargeMenu] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
    setIsCategoryOpen(false);
  };
  return (
    <>
      <Navbar bg="white" expand="lg" className="py-3 border-bottom">
        <Container
          fluid
          className="px-4 d-flex align-items-center justify-content-between"
        >
          <Navbar.Brand
            as={NavLink}
            to="/"
            className="d-flex align-items-center gap-2 m-0"
          >
            <img src={imageone} alt="Logo" />
          </Navbar.Brand>
          <div
            className="search-bar-wrapper d-none d-lg-block my-2 my-lg-0"
            style={{ maxWidth: "500px", width: "100%" }}
          >
            <InputGroup className="border rounded-pill bg-light p-1 position-relative">
              <div className="position-relative" style={{ width: "35%" }}>
                <div
                  className="d-flex align-items-center justify-content-between px-3 py-2 cursor-pointer select-category-btn"
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  style={{ cursor: "pointer" }}
                >
                  <span
                    className="fw-bold text-dark"
                    style={{ fontSize: "0.95rem" }}
                  >
                    {selectedCategory}
                  </span>
                  <BsChevronDown
                    className={`arrow-icon ${isCategoryOpen ? "rotate-up" : ""}`}
                    style={{ fontSize: "0.85rem" }}
                  />
                </div>
                <div
                  className={`custom-dropdown-menu ${isCategoryOpen ? "open" : ""}`}
                >
                  <ul className="list-unstyled m-0 p-3">
                    <li
                      className={`py-2 px-2 category-item ${selectedCategory === "Clothing" ? "active" : ""}`}
                      onClick={() => handleSelectCategory("Clothing")}
                    >
                      Clothing
                    </li>

                    <li
                      className={`py-2 px-2 category-item ${selectedCategory === "Watches" ? "active" : ""}`}
                      onClick={() => handleSelectCategory("Watches")}
                    >
                      Watches
                    </li>

                    <li
                      className={`py-2 px-2 category-item ${selectedCategory === "Jewellery" ? "active" : ""}`}
                      onClick={() => handleSelectCategory("Jewellery")}
                    >
                      Jewellery
                    </li>

                    <li
                      className={`py-2 px-2 category-item ${selectedCategory === "Glasses" ? "active" : ""}`}
                      onClick={() => handleSelectCategory("Glasses")}
                    >
                      Glasses
                    </li>
                  </ul>
                </div>
              </div>

              <span className="border-end my-2"></span>

              <Form.Control
                type="search"
                placeholder="Search Here..."
                className="border-0 bg-transparent shadow-none px-3 py-2"
                style={{ fontSize: "1rem" }}
              />

              <InputGroup.Text className="border-0 bg-transparent pe-4 text-dark">
                <BsSearch style={{ cursor: "pointer", fontSize: "1.2rem" }} />
              </InputGroup.Text>
            </InputGroup>
          </div>
          <Nav
            className="d-none d-xl-flex align-items-center gap-3 fw-semibold text-uppercase"
            style={{ fontSize: "0.88rem" }}
          >
            <Nav.Link as={NavLink} to="/" className="nav-link-custom px-2">
              HOME
            </Nav.Link>
            <Nav.Link as={NavLink} to="/shop" className="nav-link-custom px-2">
              SHOP
            </Nav.Link>
            <Nav.Link as={NavLink} to="/women" className="nav-link-custom px-2">
              WOMEN
            </Nav.Link>
            <Nav.Link as={NavLink} to="/men" className="nav-link-custom px-2">
              MEN'S
            </Nav.Link>
            <Nav.Link as={NavLink} to="/kids" className="nav-link-custom px-2">
              KIDS
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog" className="nav-link-custom px-2">
              BLOG
            </Nav.Link>
            <div className="mega-menu-wrapper position-relative">
              <Nav.Link
                as={NavLink}
                to="/pages"
                className="nav-link-custom px-2 py-3"
              >
                PAGES
              </Nav.Link>
              <div className="mega-menu-dropdown p-4 bg-white rounded-4 shadow-lg position-absolute">
                <div className="row g-0">
                  <div className="col mega-menu-col text-start px-3">
                    <h6 className="mega-menu-title fw-bold mb-3">
                      INNER PAGES
                    </h6>
                    <ul className="list-unstyled d-flex flex-column gap-2 m-0 p-0">
                      <li>
                        <a href="#" className="mega-menu-link">
                          ABOUT
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          BLOGS
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          BLOGS LAYOUT 2
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          BLOG DETAILS
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          CONTACT
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          FAQ
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          OUR STORE
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          REVIEWS
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          LOG IN
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          SIGN UP
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col mega-menu-col text-start px-3">
                    <h6 className="mega-menu-title fw-bold mb-3">SHOP PAGES</h6>
                    <ul className="list-unstyled d-flex flex-column gap-2 m-0 p-0">
                      <li>
                        <a href="#" className="mega-menu-link">
                          SHOP LEFT SIDEBAR
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          SHOP RIGHT SIDEBAR
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          SHOP FULL WIDTH
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          SHOP DETAILS
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          WISHLIST
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          CART
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          CHECKOUT
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col mega-menu-col text-start px-3">
                    <h6 className="mega-menu-title fw-bold mb-3">MEN'S</h6>
                    <ul className="list-unstyled d-flex flex-column gap-2 m-0 p-0">
                      <li>
                        <a href="#" className="mega-menu-link">
                          CLOTHING
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          FOOTWEAR
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          ACCESSORIES
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          ACTIVEWEAR
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          GROOMING
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          ETHNIC WEAR
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col mega-menu-col text-start px-3">
                    <h6 className="mega-menu-title fw-bold mb-3">WOMEN'S</h6>
                    <ul className="list-unstyled d-flex flex-column gap-2 m-0 p-0">
                      <li>
                        <a href="#" className="mega-menu-link">
                          CLOTHING
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          FOOTWEAR
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          BAGS & ACCESSORIES
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          ACTIVEWEAR
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          BEAUTY & GROOMING
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          ETHNIC WEAR
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col mega-menu-col text-start px-3">
                    <h6 className="mega-menu-title fw-bold mb-3">CHILDREN'S</h6>
                    <ul className="list-unstyled d-flex flex-column gap-2 m-0 p-0">
                      <li>
                        <a href="#" className="mega-menu-link">
                          CLOTHING
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          FOOTWEAR
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          ACCESSORIES
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          TOYS & GAMES
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          BABY ESSENTIALS
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col mega-menu-col text-start px-3 border-0">
                    <h6 className="mega-menu-title fw-bold mb-3">JEWELLERY</h6>
                    <ul className="list-unstyled d-flex flex-column gap-2 m-0 p-0">
                      <li>
                        <a href="#" className="mega-menu-link">
                          ETHNIC & TRADITIONAL JEWELLERY
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          BRIDAL JEWELLERY
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          BRACELETS
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          RINGS
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          EARRINGS
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mega-menu-link">
                          CHAINS & PENDANTS
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Nav>

          <div className="d-flex align-items-center gap-4 text-dark fs-5">
            <NavLink to="/account" className="nav-link-custom" title="Account">
              <BsPerson style={{ cursor: "pointer" }} />
            </NavLink>
            <NavLink
              to="/wishlist"
              className="nav-link-custom"
              title="Wishlist"
            >
              <BsHeart style={{ cursor: "pointer" }} />
            </NavLink>
            <NavLink to="/cart" className="nav-link-custom" title="Cart">
              <BsBag style={{ cursor: "pointer" }} />
            </NavLink>
          </div>
          <div className="ms-3">
            <Navbar.Toggle
              aria-controls="large-screen-nav"
              className="border-0 p-0 shadow-none fs-6 show-on-large"
              onClick={() => setShowLargeMenu(true)}
            />

            <Navbar.Toggle
              aria-controls="small-screen-nav"
              className="border-0 p-0 shadow-none fs-6 show-on-small"
              onClick={() => {
                setShow(true);
              }}
            />
          </div>
        </Container>
      </Navbar>
      <Offcanvas
        show={showLargeMenu}
        onHide={() => setShowLargeMenu(false)}
        placement="end"
        className="custom-offcanvas"
      >
        <Offcanvas.Header className="px-4 pt-4 pb-3 border-bottom d-flex align-items-center justify-content-between">
          <Offcanvas.Title>
            <img src={imageone} alt="Logo" style={{ maxHeight: "30px" }} />
          </Offcanvas.Title>
          <button
            type="button"
            className="btn p-0 border-0 shadow-none custom-close-btn"
            onClick={() => setShowLargeMenu(false)}
            aria-label="Close"
          >
            <BsX size={42} />
          </button>
        </Offcanvas.Header>

        <Offcanvas.Body className="p-4">
          <h5 className="fw-bold mb-3 text-dark">About glamer</h5>
          <p className="lh-base" style={{ fontSize: "0.9rem" }}>
            Phasellus eget fermentum mauris. Suspendisse nec dignissim nulla.
            Integer non quam commodo, scelerisque felis id, eleifend turpis.
            Phasellus in nulla quis erat tempor tristique eget vel purus. Nulla
            pharetra pharetra pharetra. Praesent varius eget justo ut lacinia.
            Phasellus pharetra, velit viverra lacinia consequat, ipsum odio
            mollis dolor, nec facilisis arcu arcu ultricies sapien. Quisque ut
            dapibus nunc. Vivamus sit amet efficitur velit. Phasellus eget
            fermentum mauris. Suspendisse nec dignissim nulla. Integer non quam
            commodo, scelerisque felis id, eleifend turpis. Phasellus in nulla
            quis erat tempor tristique eget vel purus. Nulla pharetra pharetra
            pharetra. Praesent varius eget justo ut lacinia. Phasellus pharetra
            velit.
          </p>
          <div className="position-relative mt-4 pe-4">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={15}
              slidesPerView={2}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".custom-prev-btn",
                nextEl: ".custom-next-btn",
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
              </SwiperSlide>
            </Swiper>
            <div className="d-flex flex-column align-items-center gap-2 position-absolute end-0 top-50 translate-middle-y z-3">
              <button className="btn btn-sm p-0 border-0 custom-prev-btn shadow-none">
                <FaChevronUp size={14} className="text-dark" />
              </button>
              <button className="btn btn-sm p-0 border-0 custom-next-btn shadow-none">
                <FaChevronDown size={14} className="text-dark" />
              </button>
            </div>
          </div>
          <p className="lh-base mt-5" style={{ fontSize: "0.9rem" }}>
            Phasellus eget fermentum mauris. Suspendisse nec dignissim nulla.
            Integer non quam commodo, scelerisque felis id, eleifend turpis.
            Phasellus in nulla quis erat tempor tristique eget vel purus. Nulla
            pharetra pharetra pharetra. Praesent varius eget justo ut lacinia.
            Phasellus pharetra, velit viverra lacinia consequat, ipsum odio
            mollis dolor, nec facilisis arcu arcu ultricies sapien. Quisque ut
            dapibus nunc. Vivamus sit amet efficitur velit. Phasellus eget
            fermentum mauris. Suspendisse nec dignissim nulla. Integer non quam
            commodo, scelerisque felis id, eleifend turpis. Phasellus in nulla
            quis erat tempor tristique eget vel purus. Nulla pharetra pharetra
            pharetra. Praesent varius eget justo ut lacinia. Phasellus pharetra
            velit.
          </p>
          <div className="mt-4 pt-3 border-top">
            <h6 className="fw-bold text-dark mt-4 fs-4 mb-3">Follow us</h6>
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
                <BsInstagram size={16} />
              </a>
              <a
                href="#"
                className="social-icon-btn d-flex align-items-center justify-content-center rounded-circle text-decoration-none"
              >
                <BsYoutube size={16} />
              </a>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="end"
        className="offcanvasborder"
      >
        <Offcanvas.Header className="px-4 pt-4 pb-3 border-bottom d-flex align-items-center justify-content-between">
          <Offcanvas.Title>
            <img src={imageone} alt="Logo" style={{ maxHeight: "30px" }} />
          </Offcanvas.Title>
          <button
            type="button"
            className="btn p-0 border-0 shadow-none custom-close-btn"
            onClick={() => setShow(false)}
            aria-label="Close"
          >
            <BsX size={42} />
          </button>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column p-4">
          <div className="menu-list-wrapper">
            <Nav className="flex-column w-100">
              <Nav.Link
                as={NavLink}
                to="/"
                className="nav-link-custom border-bottom py-3 px-0 fw-medium text-dark text-uppercase"
              >
                HOME
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/shop"
                className="nav-link-custom border-bottom py-3 px-0 fw-medium text-dark text-uppercase"
              >
                SHOP
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/women"
                className="nav-link-custom border-bottom py-3 px-0 fw-medium text-dark text-uppercase"
              >
                WOMEN
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/mens"
                className="nav-link-custom border-bottom py-3 px-0 fw-medium text-dark text-uppercase"
              >
                MEN'S
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/kids"
                className="nav-link-custom border-bottom py-3 px-0 fw-medium text-dark text-uppercase"
              >
                KIDS
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/blog"
                className="nav-link-custom border-bottom py-3 px-0 fw-medium text-dark text-uppercase"
              >
                BLOG
              </Nav.Link>

              <div className="d-flex align-items-center justify-content-between border-bottom py-3">
                <Nav.Link
                  as={NavLink}
                  to="/pages"
                  className="nav-link-custom p-0 fw-medium text-dark text-uppercase"
                >
                  PAGES
                </Nav.Link>
                <span className="text-danger fs-5 cursor-pointer">+</span>
              </div>
            </Nav>
          </div>
          <div className="mt-auto pt-2 border-top border-2">
            <h6 className="fw-bold text-dark mt-4 fs-4 mb-3">Follow us</h6>
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
                <BsInstagram size={16} />
              </a>
              <a
                href="#"
                className="social-icon-btn d-flex align-items-center justify-content-center rounded-circle text-decoration-none"
              >
                <BsYoutube size={16} />
              </a>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navbartab;
