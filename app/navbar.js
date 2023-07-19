"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AboutPage from "./about";
import NavDropdown from "react-bootstrap/NavDropdown";
//import styles from "../styles/NavigationBar.module.css";
import { Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

//import "../styles/navbar.css";

export default function navigationBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Coupon Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {" "}
              //right nav item
              <Nav.Link href="#Shop_Coupon">Shop Coupon</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <ButtonGroup bsSize="xsmall">
                <Button variant="outline-light">
                  <Nav.Link href="/pages/consumer_sign">Sign Up </Nav.Link>
                </Button>
                <Button variant="outline-light">
                  <Nav.Link href="/pages/consumer_login">Log In</Nav.Link>
                </Button>
              </ButtonGroup>
              <Nav.Link eventKey="disabled" disabled>
                <FontAwesomeIcon
                  icon={faRightToBracket}
                  size="2xl"
                  style={{ color: "#ffffff" }}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
