import React from 'react'
import Logo from '../Navbar/Logo';
import { Link } from "gatsby";
import { Container,Navbar, Nav } from 'react-bootstrap';

function Navigationbar() {
    return (
        <Container>
                <Navbar expand="md">
                <Navbar.Brand href="/">
                    <Logo/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarResponsive"/>
                <Navbar.Collapse id="navbarResponsive">
                    <Nav as="ul" className="ml-auto">
                        <Nav.Item as="li">
                            <Link to="/" className="nav-link" activeClassName="active">
                                Home
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link to="/Products" className="nav-link" activeClassName="active">
                                Products
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link to="/services" className="nav-link" activeClassName="active">
                                Services
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link to="/about" className="nav-link" activeClassName="active">
                                About
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default Navigationbar
