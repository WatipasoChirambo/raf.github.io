import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';
import Navbar from './Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Layout({ children }) {
    return (
        <>
        <Navbar/>
        <div className="layout">
            <div className="content">
                { children }
            </div>
            <footer style={{ display: `grid` }} className="footer">
                <div>
                        <h4 style={{ color: `white` }}>Location</h4>
                        <div>
                            <p>Keza Offices</p>
                            <p>Post Office box 60284</p>
                            <p>Blantyre 6, Malawi</p>
                        </div>
                </div>
                <div>
                        <h4 style={{ color: `white` }}>Contact Details</h4>
                        <div>
                            <p>info@ritzfarms.com</p>
                            <p>Down Town boy(number1)</p>
                            <p>Down Town boy(number2)</p>
                        </div>
                </div>
                <div className="social-media">
                        <h4 style={{ color: `white` }}>Follow Us</h4>
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
