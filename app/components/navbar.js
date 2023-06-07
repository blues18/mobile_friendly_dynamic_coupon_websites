"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "../styles/NavigationBar.module.css";
import { Button, ButtonGroup } from "react-bootstrap";

//import "../styles/navbar.css";

export default function navigationBar() {
  return (
    <>
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
              <Nav.Link href="Home">Home</Nav.Link>
              <Nav.Link href="#Shop_Coupon">Shop Coupon</Nav.Link>
              <Nav.Link eventKey={2} href="About">
                About
              </Nav.Link>
              <ButtonGroup bsSize="xsmall">
                <Button variant="outline-light">Sign Up</Button>
                <Button variant="outline-light">Log In</Button>
              </ButtonGroup>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
