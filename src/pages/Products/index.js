import { graphql, Link } from "gatsby"
import React from "react"
import Layout from '../../components/Layout'
import * as styles from '../../styles/products.module.css'
import Img from 'gatsby-image'

export default function Home({ data }) {
    const products = data.Prods.nodes
    const contact = data.contact.siteMetadata.contact
  return (
      <Layout>
          <div style={{ margin: `10px` }}>
              <h1 style={{ color: `green` }}>Products</h1>
              <h3 style={{ color: `gray` }}>Available products</h3>
              <div className={styles.projects}>
                  {products.map(product =>(
                      <Link to={"/Products/"+ product.frontmatter.slug} key={product.id}>
                          <div>
                            <div>
                            <Img fluid={product.frontmatter.thumb.childImageSharp.fluid}/>
                            </div>
                              <h2 style={{ color: `green` }}>{ product.frontmatter.title }</h2>
                              <p>{ product.frontmatter.stack }</p>
                          </div>
                      </Link>
                  ))}
              </div>
              <p>Like what you see? Email me at { contact } for a quote</p>
          </div>
      </Layout>
  )
}

export const query = graphql`
query ProductsPage {
  Prods:allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        date
        thumb {
          childImageSharp {
            fluid (maxWidth: 150, maxHeight: 150){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
  contact:site {
    siteMetadata {
      contact
    }
  }
}
`



