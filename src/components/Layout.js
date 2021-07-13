import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';
import Navbar from './Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import islamic from '../images/islamic.png';
import mary from '../images/mary.png';
import sffrfm from '../images/SFFRFM.png';


export default function Layout({ children }) {
    return (
        <>
        <Navbar/>
        <div className="layout">
            <div className="content">
                { children }
            </div>
            <div style={{ textAlign: `center` }}>
                <div>
                    <h3>Client Refences</h3>
                </div>
                <Carousel nextIcon="">
                    <Carousel.Item>
                        <img src={islamic} alt="islamic relief"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={mary} alt="mary-meals"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={sffrfm} alt="sffrfm"/>
                    </Carousel.Item>
                </Carousel>
            </div>
            <footer style={{ display: `grid` }} className="footer">
                <div>
                        <h3>Location</h3>
                        <div>
                            <p>Keza Offices</p>
                            <p>Post Office box 60284</p>
                            <p>Blantyre 6, Malawi</p>
                        </div>
                </div>
                <div>
                        <h3>Contact Details</h3>
                        <div>
                            <p>info@ritzfarms.com</p>
                            <p>Down Town boy(number1)</p>
                            <p>Down Town boy(number2)</p>
                        </div>
                </div>
                <div className="social-media">
                        <h3>Follow Us</h3>
                        <section className="smedia">
                            <Link to="/">
                                <FontAwesomeIcon icon={faInstagram} style={{ color: `white` }}/>
                            </Link>
                            <Link to="/">
                                <FontAwesomeIcon icon={faFacebookF} style={{ color: `white` }}/>
                            </Link>
                            <Link to="/">
                                <FontAwesomeIcon icon={faTwitter} style={{ color: `white` }}/>
                            </Link>
                        </section>
                </div>
                <div className="copyright">
                   <p>&copy; 2021 www.ritzfarms.com</p>
                </div>
            </footer>
        </div>
        </>
    )
}
