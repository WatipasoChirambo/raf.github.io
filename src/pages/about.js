import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/about.module.css'
import { StaticImage } from "gatsby-plugin-image"

export default function About() {
  
  return (
      <Layout>
    <section className={styles.about}>
    <div>
    <h1>Ritz Farms & Property Investments Limited</h1>
    </div>
      <div className={styles.about_info}>
        <div className={styles.first_about_info}>
          <h4>Aim</h4>
          <div>
          <StaticImage src="../images/aim.png" alt="farmer"/>
          </div>
          <p>
          To inspire the world by showing that its very much possible to simultaneously deliver satisfaction and happiness to customers, 
          employees, vendors, shareholders and the community in a long term sustainable, efficient and effective way.
          </p> 
        </div>
        <div className={styles.second_about_info}>
          <h4>Background Information</h4>
          <div>
            <StaticImage src="../images/back.png" alt="farmer"/>
          </div>
          <p>
            We are a subsidiary of Ritz Holdings Limited and we are a thriving fledgling wholly Malawian owned business that has been trading on the market for some years. We are a well registered company under the companies Act. Our constitution is unrestricted but due to the acumen of our directors to see their interrelatedness we have forged specific competitive advantages in farming, real estate and logistics. Our team is a unique blend of dedicated and learned individuals with a wide range of skills in business management and customer delivery. 
            It is with great pleasure to share with you our company profile, capacity statement and references of our clients.
          </p>
        </div>
      </div>
      <div className={styles.reference_list_title}>
      <h2>Client References</h2>
        <div className={styles.reference_list}>
          <div className={styles.reference_list_top}>
            <div>
            <div>
          <StaticImage src="../images/donnas_eggs.png" alt="farmer"/>
          </div>
            </div>
            <div>
          <StaticImage src="../images/fol.png" alt="farmer"/>
          </div>
            <div>
            <div>
          <StaticImage src="../images/Peoples.png" alt="farmer"/>
          </div>
            </div>
          </div>
          <div className={styles.reference_list_bottom}>
          <div>
          <div>
          <StaticImage src="../images/mary.png" alt="farmer"/>
          </div>
          </div>  
          <div>
          <StaticImage src="../images/islamic.png" alt="farmer"/>
          </div>
          <div>
          <div>
          <StaticImage src="../images/SFFRFM.png" alt="farmer"/>
          </div>
          </div> 
          </div>  
        </div>
      </div>
    </section>
    </Layout>
  )
}
