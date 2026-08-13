import React from "react";
import "./Sidebar.css";
import { BsChevronRight } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";

function Sidebar() {
  return (
    <>
      <section className="sectionss rounded-5 m-5 p-5">
        <Row className="text-center py-4">
          <Col>
            <h1 className="fw-bold fs-3 text-dark mb-2">Shop Left Sidebar</h1>
            <div className="d-flex align-items-center justify-content-center gap-2 fs-6 text-muted">
              <span>Home</span>
              <BsChevronRight style={{ fontSize: "10px" }} />
              <span className="text-dark fw-medium">Shop</span>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Sidebar;
