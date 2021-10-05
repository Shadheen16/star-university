import React from 'react';
import "./Header.css"
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div  className="position-fixed tot-0 w-100 nav-bar">
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
            <Container>
              <Navbar.Brand to="/" className="text-danger logo"><img className="img-fluid"  src="https://icones.pro/wp-content/uploads/2021/06/icone-de-l-education-rouge.png" alt="" /><span> Star University</span></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto me-5 ">
                  <Nav.Link as={Link} className="me-5 text-dark" to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/about" className="me-5 text-dark">About</Nav.Link>
                  <Nav.Link as={Link} to="/courses" className="me-5 text-dark">Courses</Nav.Link>
                  <Nav.Link as={Link} to="/admission" className="me-5 text-dark">Admission</Nav.Link>
                  <Nav.Link as={Link} to="/login" className="ms-3"> <img src="http://cdn.onlinewebfonts.com/svg/img_311846.png" alt="login icon"/></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    );
};

export default Header;