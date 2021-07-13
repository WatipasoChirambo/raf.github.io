import { Link } from 'gatsby';
import React from "react"
import { Carousel } from 'react-bootstrap';
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import * as style_ting from '../styles/about.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faSeedling } from '@fortawesome/free-brands-svg-icons';
import { StaticImage } from "gatsby-plugin-image"
import { Card,ListGroup,ListGroupItem } from 'react-bootstrap';
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
                <h1>Fresh Farm Produce <br></br> <span style={{ color: `green` }}>For You</span></h1>
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
          <div style={{ textAlign: `center`, maxWidth:`auto`, maxHeight:`150`, marginLeft:`32%`}}>
            <StaticImage src="../images/environment.png" alt="farmer"/>
          </div>
        </div>
        <div className={styles.company}>
          <h3>Company Information</h3>
          <div className={styles.company_core_businesses}>
            <div className={styles.vision}>
              <h5>Vision</h5>
              <Card style={{ width: '18rem', border:`none` }}>
                {/* <Card.Img variant="top" src={Vision} /> */}
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            
            <div className={styles.mission}>
              <h5>Mission</h5>
              <Card style={{ width: '18rem', border:`none` }}>
              <Card.Img variant="top" src={mission} style={{ textAlign: `center`, maxWidth:`auto`, maxHeight:`100`}} /> 
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
          </Card>
            </div>

            <div className={styles.objectives}>
              <div className={styles.middle_middle}>
              <h5>Objectives</h5>
                <Card style={{ width: '18rem', border:`none` }}>
                <Card.Img variant="top" src={objectives} />
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
        </div>
        <div className={styles.middle_heading}>
          <h3>Core Businesses</h3>
        </div>
        <div className={styles.middle}>
          <div className={styles.left_middle}>
          <h5>Real Estate</h5>
          <Card style={{ width: '18rem', border:`none` }}>
            <Card.Img variant="top" src={agr_trade} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
          </Card>
          </div>
          <div className={styles.middle_middle}>
          <h5>Agriculture Trade</h5>
          <Card style={{ width: '18rem', border:`none` }}>
            <Card.Img variant="top" src={agr_trade} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
          </Card>
          </div>
          <div className={styles.right_middle}>
            <h5>Logistics</h5>
            <Card style={{ width: '18rem', border:`none`}}>
            <Card.Img variant="top" src={logistics} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
          </Card>
          </div>
        </div>
    </Layout>
  )
}
