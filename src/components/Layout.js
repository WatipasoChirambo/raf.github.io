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
            <footer style={{ display: `grid` }}>
                <div>
                        <h2>Location</h2>
                        <p>Keza Offices</p>
                        <p>Post Office box 60284</p>
                        <p>Blantyre 6, Malawi</p>
                </div>
                <div>
                        <h2>Contact Details</h2>
                        <p>info@ritzfarms.com</p>
                        <p>Down Town boy(number1)</p>
                        <p>Down Town boy(number2)</p>
                </div>
                <div>
                        <h2>Client References</h2>
                            <p>Action Aid Malawi</p>
                            <p>Peoples</p>
                            <p>Islamic relief</p>
                            <p>Mary's Meals</p>
                            <p>Chibuku</p>
                </div>
                <div className="social-media">
                        <h2>Follow Us</h2>
                        <section className="smedia">
                            <Link to="/">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </Link>
                            <Link to="/">
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </Link>
                            <Link to="/">
                                <FontAwesomeIcon icon={faTwitter}/>
                            </Link>
                        </section>
                </div>
            </footer>
        </div>
        </>
    )
}
