/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Navbar, Container,
} from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar className="navCSS">
      <Container className="navContainer">
        <p className="navText">CLICK TO GET A JOKE</p>
      </Container>
    </Navbar>
  );
}
