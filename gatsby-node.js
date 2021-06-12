const path = require('path')
exports.createPages = async ({actions, graphql})=>{
    const { data } = await graphql(`
        query Products {
  allMarkdownRemark {
    nodes {
      frontmatter {
        slug
      }
    }
  }
}
    `)

    data.allMarkdownRemark.nodes.forEach(node=>{
        actions.createPage({
            path: '/Products/'+node.frontmatter.slug,
            component: path.resolve('./src/templates/product_details.js'),
            context: {
                slug: node.frontmatter.slug
            }
        })
    })
}