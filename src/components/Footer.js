import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar fixed="bottom" sticky="bottom" bg="dark" variant="dark">
    <Container>
      <Navbar.Text>
        © 2023 My Website
      </Navbar.Text>
    </Container>
  </Navbar>
  );
};

export default Footer;

