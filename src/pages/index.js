import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { Card } from "react-bootstrap"
import styled from "styled-components"
import Hero from "../components/Hero"

const Objectives = styled.ul``

export default function Home() {
  return (
    <Layout>
      <Hero />
      <div className={styles.company}>
        <h3>Company Information</h3>
        <div className={styles.company_core_businesses}>
          <div className={styles.right_middle}>
            <h5 style={{ backgroundColor: "green", color: "white" }}>Vision</h5>
            <div style={{ width: "200" }}>
              <StaticImage src="../images/eye.png" alt="farmer" />
            </div>
            <div className={styles.company_info_text}>
              To be the leading agribusiness company while providing solid
              returns to the community.
            </div>
          </div>

          <div className={styles.left_middle}>
            <h5>Mission</h5>
            <div style={{ width: "200" }}>
              <StaticImage src="../images/objectives.png" alt="farmer" />
            </div>
            <div className={styles.company_info_text}>
              Contributing to the agricultural sector by making significant
              strides in promoting small scale farmers and other enterprises.
            </div>
          </div>

          <div className={styles.left_middle}>
            <h5>Objectives</h5>
            <div style={{ width: "200" }}>
              <StaticImage src="../images/tasks.png" alt="farmer" />
            </div>
            <div className={styles.company_info_text}>
              <p style={{textAlign:"left"}}>
              <ul>
                <li>Providing quality livestock meat and milk production</li>
                <li>Improving irrigation systems among communities</li>
                <li>Producing and supplying quality food crop at affordable prices</li>
                <li>Generating enough retains to stakeholders</li>
              </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className={styles.middle_heading}>
        <h3>Core Businesses</h3>
      </div>
      <div className={styles.middle}>
        <Link style={{ textDecoration: `none` }} to="/agricultureTrade">
          <div className={styles.right_middle}>
            <h5
              style={{
                borderTop: `2px solid green`,
                borderLeft: `2px solid green`,
                borderRight: `2px solid green`,
              }}
            >
              Agricultural Trade
            </h5>
            <div style={{ width: "200", color: `green` }}>
              <StaticImage src="../images/seedling.png" alt="farmer" />
            </div>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Link>

        <Link style={{ textDecoration: `none` }} to="/livestock">
          <div className={styles.right_middle}>
            <h5
              style={{
                borderTop: `2px solid green`,
                borderLeft: `2px solid green`,
                borderRight: `2px solid green`,
              }}
            >
              Livestock
            </h5>
            <div style={{ width: "200" }}>
              <StaticImage src="../images/eye.png" alt="farmer" />
            </div>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Link>

        <Link style={{ textDecoration: `none` }} to="/">
          <div className={styles.right_middle}>
            <h5
              style={{
                borderTop: `2px solid green`,
                borderLeft: `2px solid green`,
                borderRight: `2px solid green`,
              }}
            >
              Logistics
            </h5>
            <div style={{ width: "200" }}>
              <StaticImage src="../images/shipping.png" alt="farmer" />
            </div>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Link>

        <Link style={{ textDecoration: `none` }} to="/">
          <div className={styles.right_middle}>
            <h5
              style={{
                borderTop: `2px solid green`,
                borderLeft: `2px solid green`,
                borderRight: `2px solid green`,
              }}
            >
              Real Estate
            </h5>
            <div style={{ width: "200" }}>
              <StaticImage src="../images/building.png" alt="farmer" />
            </div>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
