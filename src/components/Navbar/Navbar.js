import React from "react";
import { Link,graphql,useStaticQuery } from 'gatsby';
import Img from "gatsby-image";

export default function Navbar() { 
  const data = useStaticQuery(graphql`
  query logo {
    file(relativePath: {eq: "logo.jpg"}) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  return (
    <nav>
      <div>
        <Img fluid={data.file.childImageSharp.fluid}/>
      </div>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/Products">Products</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
        </div>
    </nav>
  )
}