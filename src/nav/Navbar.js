
import React from 'react'
import './Navbar.css'
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'

export default function Hazhar() {
  return (
    <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
      <Container id='hhh'>
        <Navbar.Brand href="#home">Programmer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Register</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <NavDropdown title="All" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Programmer</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Porogramming Language</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Library</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">contact us</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
