import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" as="h1">IT Company</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
