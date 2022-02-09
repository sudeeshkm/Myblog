import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav,Navbar,Container } from 'react-bootstrap';
import "./style.css"
const Header = () => {
    return (

        <Navbar bg="light" expand="lg">
            <Container fluid>
                
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px',display:'flex',float:'right' }}
                        navbarScroll
                    >
                        
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About Us</Nav.Link>
                        <Nav.Link href="/articlelist">Article List</Nav.Link>
                        <Nav.Link href="/add">Add Article</Nav.Link>
                        <Nav.Link href="/signin">Sign In</Nav.Link>
                        <Nav.Link href="/signup">Sign Up</Nav.Link>
                    </Nav>
                   
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    );
};

export default Header;