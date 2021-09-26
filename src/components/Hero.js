import React from 'react';
import styled from "styled-components";
import * as styles from "../styles/home.module.css";
import { Link } from "gatsby";

const Container = styled.div`
padding-top:3%;
padding-bottom:8%;
margin-left:5%;
margin-right:5%;
opacity: 1;
`;

function Hero() {
    return (
        <div className={styles.hero}>
            <Container>
            <div>
              <h1 style={{ color: `green`, textAlign:`left` }}>Fresh Farm Produce</h1>
            </div>
            <div className={styles.hero_text}>
              <p style={{ color: `white` }}>
                Ritz farms and Property investment Limited sets out itself to be
                a leading agribusiness in Malawi. The core business we are
                involved in are Trading, Livestock, Transportation, Real Estate,
                and Chemicals.
              </p>
            </div>
            <div className={styles.hero_time}>
              <p style={{ color: `white` }}>
                <b style={{ color: `green` }}>Open Time:</b> 08:00am - <b style={{ color: `green` }}>Close Time:</b>16:00pm
              </p>
            </div>
            <div className={styles.hero_btns}>
              <Link className={styles.btn} to="/about">
                About Us
              </Link>
            </div>
            </Container>
        </div>
    )
}

export default Hero
