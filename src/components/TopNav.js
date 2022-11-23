import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { IoIosArrowDown } from "react-icons/io";
import Button from "react-bootstrap/Button";

const TopNav = () => {
  return (
    <Navbar bg="black" variant="dark" className="p-1 navbar-expand">
      <Container fluid>
        <Button className="bg-pink">Book Us</Button>
        <Nav className="d-flex align-items-center">
          <Nav.Item>
            <div className="d-flex flex-row ">
              <img
                src="https://i.imgur.com/EYFtR83.jpg"
                class="rounded-circle"
                width="30"
              ></img>
            </div>
          </Nav.Item>
          <Nav.Item>
            <a
              href="#"
              class="nav-link d-flex align-items-center"
              data-abc="true"
            >
              <span>Nantano M</span>
              <IoIosArrowDown />
            </a>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNav;
