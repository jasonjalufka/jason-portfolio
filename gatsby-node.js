const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, `src/components`),
        "@config": path.resolve(__dirname, `src/config`),
        "@content": path.resolve(__dirname, `src/content`),
        "@images": path.resolve(__dirname, `src/images`),
        "@pages": path.resolve(__dirname, `src/pages`),
        "@templates": path.resolve(__dirname, `src/templates`),
        "@styles": path.resolve(__dirname, `src/styles`),
      },
    },
  })
}
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    // console.log(node)
    console.log(createFilePath({ node, getNode, basePath: `content` }))
    const slug = createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  // Note: the graphql function call returns a Promise
  const { createPage } = actions
  const projects = await graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  projects.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/project-template.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables
        slug: node.fields.slug,
      },
    })
  })
}
