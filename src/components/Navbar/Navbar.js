import React from 'react'
import Logo from '../Navbar/Logo';
import { Link } from "gatsby";
import { Container,Navbar, Nav } from 'react-bootstrap';
import * as styles from '../../styles/navigation.module.css'

function Navigationbar() {
    return (
        <Container style={{ maxWidth: `100vw` }}>
                <Navbar expand="md">
                <Navbar.Brand href="/">
                    <Logo/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarResponsive"/>
                <Navbar.Collapse id="navbarResponsive">
                    <Nav as="ul" className="ml-auto">
                        <Nav.Item as="li" className={styles.navStyle}>
                            <Link to="/" className="nav-link" activeClassName="active">
                                Home
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li" className={styles.navStyle}>
                            <Link to="/Products" className="nav-link" activeClassName="active">
                                Products
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li" className={styles.navStyle}>
                            <Link to="/services" className="nav-link" activeClassName="active">
                                Services
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li" className={styles.navStyle}>
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
