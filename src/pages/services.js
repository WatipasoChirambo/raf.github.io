import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/prod.module.css'

export default function Service() {
  return (
      <Layout>
    <div>
      <div className={styles.services_title}>
        <h3>Services</h3>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.top_side}>
            <div className={styles.chemicals}>
            <div>
                  <h5>Agricultural Trade</h5>
                </div>
                <div>
                  <p>
                    In the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds. 
                    These plant parts are either eaten fresh or prepared in a number of ways, usually as a savory, rather than sweet, dish.
                  </p>
                </div>
            </div>
            <div className={styles.livestock}>
                <div>
                  <h5>Livestock</h5>
                </div>
                <div>
                  <p>
                    In the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds. 
                    These plant parts are either eaten fresh or prepared in a number of ways, usually as a savory, rather than sweet, dish.
                  </p>
                </div>
            </div>
        </div>
        <div className={styles.down_side}>
            <div className={styles.vegetables}>
            <div>
                  <h5>Agricultural Chemicals</h5>
                </div>
                <div>
                  <div>
                    <p>
                      This refers to any substance involved in the growth or utilization of 
                      any plant or animal of economic importance to humans.
                      Farmers have long understood the importance of replenishing the soil , 
                      and they have traditionally done so by natural means, using such materials as manure, dead fish, or compost
                    </p>
                  </div>
                </div>
            </div>
            <div className={styles.logistics}>
                <div>
                  <h5>Transportation</h5>
                </div>
                <div>
                  <p>
                    In the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds. 
                    These plant parts are either eaten fresh or prepared in a number of ways, usually as a savory, rather than sweet, dish.
                  </p>
                </div>
            </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}
