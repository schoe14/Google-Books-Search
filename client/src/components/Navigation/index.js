import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
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
        <Nav className="mr-auto ml-3">
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
        </Nav>
        <Nav>
          <Navbar.Brand style={{ fontSize: "medium" }}>Find your favorite book!</Navbar.Brand>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  )
}

export default Navigation;