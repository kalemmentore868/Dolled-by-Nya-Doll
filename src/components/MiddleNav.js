import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.png";
import Form from "react-bootstrap/Form";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";

const MiddleNav = () => {
  return (
    <section className="header-main border-bottom bg-white">
      <Container fluid>
        <Row className=" p-2 pt-3 pb-3 d-flex align-items-center">
          <Col md={2}>
            <Navbar.Brand href="/">
              <img
                alt="logo"
                src={logo}
                width="80"
                height="50"
                className="d-none d-md-flex"
              />{" "}
            </Navbar.Brand>
          </Col>
          <Col md={8}>
            <Form className="d-flex form-inputs">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <BsSearch className="me-2" />
            </Form>
          </Col>
          <Col md={2}>
            <div className="d-flex d-none d-md-flex flex-row align-items-center">
              <span className="shop-bag">
                <AiOutlineShopping size={30} />
              </span>
              <div className="d-flex flex-column ms-2">
                <span className="qty">1 Product</span>
                <span className="fw-bold">$27.90</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MiddleNav;
