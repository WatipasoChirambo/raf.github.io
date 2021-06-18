import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/prod.module.css'

export default function Service() {
  return (
      <Layout>
    <div>
    <h1>Services</h1>
      <div className={styles.wrapper}>
        <div className={styles.top_side}>
            <div className={styles.chemicals}>
                <div>
                  <h2>Agricultural Chemicals</h2>
                </div>
                <div>
                  <div>
                    <p>
                    This refers to any substance involved in the growth or utilization of 
                    any plant or animal of economic importance to humans.
                    </p>
                  </div>
                  <p>
                  Farmers have long understood the importance of replenishing the soil , 
                  and they have traditionally done so by natural means, using such materials as manure, dead fish, or compost
                  </p>
                </div>
            </div>
            <div className={styles.livestock}>
                <div>
                  <h2>Butchery</h2>
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
                  <h2>Agricultural Trade</h2>
                </div>
                <div>
                  <p>
                    In the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds. 
                    These plant parts are either eaten fresh or prepared in a number of ways, usually as a savory, rather than sweet, dish.
                  </p>
                </div>
            </div>
            <div className={styles.logistics}>
                <div>
                  <h2>Transportation</h2>
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
