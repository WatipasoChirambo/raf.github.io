/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-image`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/src/products/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon:`src/images/logo.png`
      },
    },
  ],
  siteMetadata:{
    title:'Ritz Farms & Property',
    description:'Ritz farms and property investment limited sets out itself to be a leading agribusiness in malawi',
    copyright:'copyright 2021 Watipaso Chirambo',
    contact: 'ritzfarms@gmail.com',
    image:"../rf/static/logo.png",
    siteURL: "https://ritzfarms.com",
  }
}
