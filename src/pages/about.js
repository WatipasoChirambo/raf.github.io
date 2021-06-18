import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/about.module.css'

export default function About() {
  return (
      <Layout>
    <section>
      <div>
        <h1>Ritz Farms & Property</h1>
      </div>
      <div className={styles.about_info}>
        <div className={styles.first_about_info}>
          <h2>Aim</h2>
          <p>
          The aim is to inspire the world by showing that its very much possible to simultaneously deliver satisfaction and happiness to customers, 
          employees, vendors, shareholders and the community in a long term sustainable, efficient and effective way.
          </p> 
        </div>
        <div className={styles.second_about_info}>
          <h2>Background information</h2>
          <p>
            We are a subsidiary of Ritz Holdings Limited and we are a thriving fledgling wholly Malawian owned business that has been trading on the market for some years. We are a well registered company under the companies Act. Our constitution is unrestricted but due to the acumen of our directors to see their interrelatedness we have forged specific competitive advantages in farming, real estate and logistics. Our team is a unique blend of dedicated and learned individuals with a wide range of skills in business management and customer delivery. 
            It is with great pleasure to share with you our company profile, capacity statement and references of our clients.
          </p>
        </div>
      </div>
      <div>
      <h2>Reference Companies</h2>
        <div className={styles.reference_list}>
            <p>Donna’s eggs</p>
            <p>Mwanza District Council</p>
            <p>CADECOM</p>
            <p>Food lovers’ market </p>
            <p>Dignitas</p>
            <p>SFFRFM</p>
        </div>
      </div>
    </section>
    </Layout>
  )
}
