import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {NavDropdown, Nav, Navbar,Container,Offcanvas,Form,Fr} from 'react-bootstrap';
const Home = () => {
  return (
    <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"> The Food List</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">

      <Nav.Link href="#features">Product</Nav.Link>
      
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Signup</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
       SignIn
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

</>
  )
}

export default Home