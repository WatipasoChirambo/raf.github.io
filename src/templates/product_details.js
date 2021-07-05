 import React from 'react'
 import Layout from '../components/Layout'
 import Img from 'gatsby-image'
 import * as styles from '../styles/product-details.module.css' 
 import {graphql} from 'gatsby'
 export default function ProductDetails({data}){
     const {html} = data.markdownRemark
     const {featuredImg} = data.markdownRemark.frontmatter
     return(
         <Layout>
            <div className={styles.details}>
                <div className={styles.html} dangerouslySetInnerHTML={{__html: html}}/>
                <div>
                  <Img  className={styles.html} fluid={featuredImg.childImageSharp.fluid} />
                </div>
            </div>
          </Layout>     
     )
 }

 export const query = graphql`
    query Products($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      stack
      title
      featuredImg {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}

 `