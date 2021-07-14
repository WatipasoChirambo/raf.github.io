import { Link } from 'gatsby';
import React from "react"
import Img from "gatsby-image";
import { Carousel, Col } from 'react-bootstrap';
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import * as style_ting from '../styles/about.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { StaticImage } from "gatsby-plugin-image";
import { Card,ListGroup,ListGroupItem,Container,Row } from 'react-bootstrap';
// import vision from "../images/vision.png"
import mission from "../images/mission.png"
import objectives from "../images/goal.png"
import Vision from "../images/vision.png";
import agr_trade from "../images/seedling.svg"
import logistics from "../images/shipment.png"
import real_estate from "../images/building.png"


export default function Home() {
  return (
    <Layout>
        <div className={styles.header}>
          <div className={styles.slogan}>
            <div>
              <div className={styles.hero}>
                <h2>Fresh Farm Produce <br></br> <span style={{ color: `green` }}>For You</span></h2>
              </div>
              <div className={styles.hero_text}>
                <p>Ritz farms and Property investment Limited sets out itself to be a leading agribusiness in Malawi.
                  The core business we are involved in are Trading, Livestock, Transportation, Real Estate, and Chemicals.
                </p>
              </div>
              <div className={styles.hero_time}>
                <p>
                  <b>Open Time:</b> 08:00am - <b>Close Time:</b>16:00pm
                </p>
              </div>
              <div className={styles.hero_btns}>
                <Link className={styles.btn} to="/Products">Products</Link>
                <Link className={styles.prod_btn} to="/about">About</Link>
              </div>
            </div>
          </div>
          <div style={{ textAlign: `center`, maxWidth:`auto`, maxHeight:`150`}}>
            <StaticImage src="../images/environment.png" alt="farmer"/>
          </div>
        </div>
        <div className={styles.company}>
          <h3>Company Information</h3>
          <div className={styles.company_core_businesses}>
          <div className={styles.right_middle}>
            <h5>Vision</h5>
            <div style={{ width: '200' }}>
              <StaticImage src="../images/eye.png" alt="farmer"/>
            </div>
            <Card style={{ width: '100%' }}>
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
          </div>

          <div className={styles.left_middle}>
            <h5>Mission</h5>
            <div style={{ width: '200' }}>
              <StaticImage src="../images/objectives.png" alt="farmer"/>
            </div>
            <Card style={{ width: '100%' }}>
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
          </div>

          <div className={styles.left_middle}>
            <h5>Objectives</h5>
            <div style={{ width: '200' }}>
              <StaticImage src="../images/tasks.png" alt="farmer"/>
            </div>
            <Card style={{ width: '100%' }}>
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
          </div>
          </div>
        </div>
        <hr></hr>
        <div className={styles.middle_heading}>
          <h3>Core Businesses</h3>
        </div>
        <div className={styles.middle}>
          <Link style={{ textDecoration: `none` }} to='/'>
          <div className={styles.right_middle}>
              <h5>Agricultural Trade</h5>
              <div style={{ width: '200', color:`green` }}>
                <StaticImage src="../images/seedling.png" alt="farmer"/>
              </div>
              <Card style={{ width: '100%' }}>
                    <Card.Body>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
            </div>
          </Link>

          <Link style={{ textDecoration: `none` }} to='/'>
          <div className={styles.right_middle}>
            <h5>Livestock</h5>
            <div style={{ width: '200' }}>
              <StaticImage src="../images/eye.png" alt="farmer"/>
            </div>
            <Card style={{ width: '100%' }}>
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
          </div>
          </Link>

          <Link style={{ textDecoration: `none` }} to='/'>
          <div className={styles.right_middle}>
            <h5>Logistics</h5>
            <div style={{ width: '200' }}>
              <StaticImage src="../images/shipping.png" alt="farmer"/>
            </div>
            <Card style={{ width: '100%' }}>
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
          </div>
          </Link>
        </div>
        <hr></hr>
    </Layout>
  )
}
