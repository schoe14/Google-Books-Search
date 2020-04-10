import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import "./style.css";

function Navigation() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    setPath(window.location.pathname);
  }, [path]);

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="shadow bg-white" bg="dark" variant="dark">
      <Navbar.Brand href="/" onClick={() => setPath("/")}>Google Book Search</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/search" onClick={() => setPath("/search")} className={
            window.location.pathname === "/" || window.location.pathname === "/search"
              ? "nav-link active"
              : "nav-link inactive"
          }>Search</Nav.Link>
          <Nav.Link href="/saved" onClick={() => setPath("/saved")} className={
            window.location.pathname === "/saved"
              ? "nav-link active"
              : "nav-link inactive"
          }>Saved</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">Dank memes</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  )
}

export default Navigation;