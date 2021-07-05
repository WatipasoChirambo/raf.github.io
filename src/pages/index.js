import { Link} from 'gatsby';
import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import * as style_ting from '../styles/about.module.css'
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <Layout>
      <section>
      <div className={styles.header}>
        <div className={styles.slogan}>
          <div>
            <div className={styles.hero}>
            {/* <p className={styles.fresh}>A fresh green vision for your life</p> */}
          <h1>Ritz Farms & Property <br></br>Investments Limited</h1>
            </div>
            <div className={styles.hero_text}>
              <p>Ritz farms and Property investment Limited sets out itself to be a leading agribusiness in Malawi.
              The core business we are involved in are Trading, Livestock, Transportation, Real Estate, and Chemicals.
              </p>
            </div>
            <div>
            <p className={styles.hero_time}>
              <b>Open Time:</b> 08:00 - <b>Close Time:</b>16:00
            </p>
            </div>
            <Link className={styles.btn} to="/about">Read More</Link>
          </div>
        </div>
        <div>
        <StaticImage src="../images/girl.png" alt="farmer"/>
        </div>
      </div>
      <div className={styles.company}>
          <h1>COMPANY INFO</h1>
        <div className={styles.company_core_businesses}>
        <div className={styles.vision}>
              <h3>VISION</h3>
              <div style={{ textAlign: `center` }}>
                <StaticImage src="../images/vision.png" alt="vision"/>
              </div>
              <p>To be the leading agribusiness company while providing solid returns to the community</p>
        </div>
          <div className={styles.mission}>
              <h3>MISSION</h3>
              <div style={{ textAlign: `center` }}>
              <StaticImage src="../images/mission.png" alt="mission"/>
            </div>
              <p>Contributing to the agricultural sector by making significant strides in promoting small scale farmers and other enterprises</p>
          </div>
          <div className={styles.objectives}>
              <h3>OBJECTIVES</h3>
              <div style={{ textAlign: `center` }}>
                <StaticImage src="../images/target.png" alt="objectives"/>
              </div>
              <div>
                <ul>
                  <li>
                    Providing quality livestock
                  </li>
                  <li>
                    Empowering local farmers with agribusiness skills
                  </li>
                  <li>
                    Improving irrigation systems among communities
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
      <div className={styles.middle_heading}>
          <h1>CORE BUSINESSES</h1>
      </div>
      <div className={styles.middle}>
        <div className={styles.left_middle}>
        <h2>Real Estate</h2>
            <StaticImage src="../images/estate.png" alt="A dinosaur" 
            placeholder="blurred"
            height={250}
            />
        <div className={styles.left_middle_info}>
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
        <h2>Agriculture Trade</h2>
            <StaticImage src="../images/nature.png" alt="nature" 
            placeholder="blurred"
            height={250}
            />
            <div className={styles.middle_middle_info}>
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
          <h2>Logistics</h2>
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
      <div className={style_ting.reference_list_title}>
      <h2>Client References</h2>
        <div className={style_ting.reference_list}>
          <div className={style_ting.reference_list_top}>
            <div>
              <div>
            <StaticImage src="../images/SFFRFM.png" alt="farmer"/>
            </div>
            </div>
            <div>
              <div>
            <StaticImage src="../images/mary.png" alt="farmer"/>
            </div>
            </div>
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
        </div>
      </div>
    </section>
    </Layout>
  )
}
