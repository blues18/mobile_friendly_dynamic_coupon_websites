"use client";
import { Navbar, OverlayTrigger, Popover } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/header.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const renderDropdown = () => (
  <Popover id="popover-basic">
    <Popover.Content>
      <Nav>
        <Nav.Link href="#action/3.1">Action 1</Nav.Link>
        <Nav.Link href="#action/3.2">Action 2</Nav.Link>
        <Nav.Link href="#action/3.3">Action 3</Nav.Link>
      </Nav>
    </Popover.Content>
  </Popover>
);

export default function header() {
  //const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <>
      <Container className={styles.navContainer}>
        <Navbar expand="xl">
          <Container>
            <Nav className="justify-content-start">
              <Navbar.Brand className="navbar-brand" data-placement="bottom">
                Electronic Day
              </Navbar.Brand>
            </Nav>
            <Nav id="itemSelector" className="justify-content-center">
              <Nav.Item>
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#ViewShop">View Shops</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Cateory">Coupon Category</Nav.Link>
              </Nav.Item>
              <Navbar.Collapse id="basic-navbar-nav">
                <OverlayTrigger
                  trigger="hover"
                  placement="bottom"
                  overlay={renderDropdown}
                >
                  <Nav.Link>Dropdown</Nav.Link>
                </OverlayTrigger>
              </Navbar.Collapse>
            </Nav>
            <Nav className="justify-content-end">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-dark">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    rotation={90}
                    size="lg"
                  />
                </Button>
              </Form>
            </Nav>
          </Container>
        </Navbar>
      </Container>
    </>
  );
}
