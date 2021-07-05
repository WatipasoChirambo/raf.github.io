import React from 'react';
import Navbar from './Navbar/Navbar';
import { Link } from 'gatsby';
import '../styles/global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Layout({ children }) {
    return (
        <div className="layout">
            <div className="logo-image">
                <Navbar/>
            </div>
            <div className="content">
                { children }
            </div>
            <div>
                <footer>
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
                            <p>Islamic relief</p>
                            <p>Chibuku</p>
                    </div>
                    <div className="social-media">
                        <h2>Follow Us</h2>
                        <section className="smedia">
                            <Link to="/" style={{ color: `white` }}>
                                <FontAwesomeIcon icon={faInstagram}/>
                            </Link>
                            <Link to="/" style={{ color: `white` }}>
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </Link>
                            <Link to="/" style={{ color: `white` }}>
                                <FontAwesomeIcon icon={faTwitter}/>
                            </Link>
                        </section>
                    </div>
                </footer>
            </div> 
        </div>
    )
}
