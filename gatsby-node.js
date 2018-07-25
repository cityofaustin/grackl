// auto creating pages from markdown files
// https://www.gatsbyjs.org/tutorial/part-four/#programatically-creating-pages-from-data

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const urlSlug = require('url-slug')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
  if (node.internal.type === `Airtable`) {
    createNodeField({
      node,
      name: `slug`,
      value: `/projects/${urlSlug(node['Project_Name'])}`,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
).then(result => {
    result.data.allMarkdownRemark.edges.map(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/project.js`),
        context: {
          // Data passed to context is available in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
    resolve()
    })
  })
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allAirtable {
          edges {
            node {
              Project_Name
              fields {
                slug
              }
            }
          }
        }
      }
    `
).then(result => {
    result.data.allAirtable.edges.map(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/project.js`),
        context: {
          // Data passed to context is available in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
    resolve()
    })
  })
}
