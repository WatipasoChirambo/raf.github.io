import { Link} from 'gatsby';
import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <Layout>
      <section>
      <div className={styles.header}>
        <div className={styles.slogan}>
          <div>
          <h2>Ritz Farms & Property</h2>
            <p>Ritz farms and Property investment Limited sets out itself to be a leading agribusiness in Malawi.
            The core business we are involved in are Trading, Livestock, Transportation, Real Estate, and Chemicals.
            We are open to cater for our customers needs and wants, with the aim to inspire the world by showing that its very much possible to simultaneously deliver satisfaction and happiness to our stakeholders
            </p>
            <Link className={styles.btn} to="/Products">Available Products</Link>
          </div>
        </div>
        <div>
        <StaticImage src="../images/girl.png" alt="farmer"/>
        </div>
      </div>
      <div className={styles.company}>
          <h1>COMPANY INFO</h1>
        <div className={styles.company_core_businesses}>
        <div>
              <h3>VISION</h3>
              <p>To be the leading agribusiness company while providing solid returns to the community</p>
            </div>
            <div>
              <h3>MISSION</h3>
              <p>Contributing to the agricultural sector by making significant strides in promoting small scale farmers and other enterprises</p>
            </div>
            <div>
              <h3>OBJECTIVES</h3>
              <ul>
                <li>Providing quality livestock</li>
                <li>Empowering local farmers with agribusiness skills</li>
                <li>Improving irrigation systems among communities</li>
              </ul>
            </div>
        </div>
      </div>
      <div className={styles.middle_heading}>
          <h1>CORE BUSINESSES</h1>
      </div>
      <div className={styles.middle}>
        <div className={styles.left_middle}>
        <h2><strong>Real Estate</strong></h2>
            <StaticImage src="../images/estate.png" alt="A dinosaur" 
            placeholder="blurred"
            height={250}
            />
        <div className={styles.left_middle_info}>
        <div>
          </div>
              <div>
                <ul>
                  <li>Namiwawa:<span> Blantyre</span></li>
                  <li>Nyambadwe: <span> Blantyre</span></li>
                  <li>BCA:<span> Blantyre</span></li>
                  <li>Mangochi Boma:<span> Mangochi</span></li>
                </ul>
              </div>
            </div>
        </div>
        <div className={styles.middle_middle}>
        <h2><strong>Agriculture Trade</strong></h2>
            <StaticImage src="../images/nature.png" alt="nature" 
            placeholder="blurred"
            height={250}
            />
            <div className={styles.middle_middle_info}>
            <div>
          </div>
              <div>
                <ul>
                  <li>Crop Seeds</li>
                  <li>Rice</li>
                  <li>Goat Meat</li>
                  <li>Poultry</li>
                </ul>
              </div>
            </div>
          </div>
        <div className={styles.right_middle}>
        <div>
          <h2><strong>Logistics</strong></h2>
          </div>
            <StaticImage src="../images/logistics.png" alt="A dinosaur"
            placeholder="blurred"
            height={250}
            />
        <div className={styles.right_middle_info}>
          <div>
                <ul>
                  <li>Mitsubishi 10 Tonner</li>
                  <li>Ashok Leyland 15 Tonner</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </section>
    </Layout>
  )
}
