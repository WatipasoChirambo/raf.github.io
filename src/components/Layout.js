import React from 'react';
import Navbar from './Navbar';
import '../styles/global.css';

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
                        <p>edgar@ritzfarms.com</p>
                        <p>(+265) 0999371 571</p>
                        <p>(+265)0888113926</p>
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
                            <p>
                                instagram
                            </p>
                    </div>
                </footer>
            </div> 
        </div>
    )
}
