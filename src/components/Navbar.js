import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
//import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { GiFoxHead, GiGooeyEyedSun, GiDreamCatcher } from "react-icons/gi";
import { ImRocket } from "react-icons/im";
import { GoBeaker } from "react-icons/go";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <GiFoxHead style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/team"
                onClick={() => updateExpanded(false)}
              >
                <GiGooeyEyedSun style={{ marginBottom: "2px" }} /> Team
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/thoughts"
                onClick={() => updateExpanded(false)}
              >
                <ImRocket style={{ marginBottom: "2px" }} /> Thoughts NFT
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                // href="https://github.com/bpfox77/indraWhitepaper/blob/917cda0b5742145774ccfa1910661d4b7d9c74f9/Change.pdf"
                // target="_blank"
                // rel="noreferrer"

                as={Link}
                to="/game"
                onClick={() => updateExpanded(false)}
              >
                <GiDreamCatcher style={{ marginBottom: "2px" }} /> Now the Game
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/info"
                onClick={() => updateExpanded(false)}
              >
                <GoBeaker style={{ marginBottom: "2px" }} /> The Information
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
