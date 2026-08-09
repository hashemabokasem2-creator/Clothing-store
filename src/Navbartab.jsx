import React, { useState } from "react";
import "./Navbartab.css";
import { Navbar, Container, Form, InputGroup, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  BsSearch,
  BsPerson,
  BsHeart,
  BsBag,
  BsChevronDown,
} from "react-icons/bs";

function Navbartab() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("Select Category");

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
            <span
              className="bg-danger text-white fw-bold rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "35px", height: "35px" }}
            >
              G
            </span>
            <span className="fw-bold fs-4 text-dark">Glamics</span>
          </Navbar.Brand>
          <div
            className="search-bar-wrapper my-2 my-lg-0"
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
            <Nav.Link as={NavLink} to="/pages" className="nav-link-custom px-2">
              PAGES
            </Nav.Link>
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
          <div className="d-none d-lg-block ms-3">
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="border-0 p-0 shadow-none fs-6 show-on-large"
            />
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbartab;
