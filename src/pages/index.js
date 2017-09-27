import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => {
  const postLength = data.allMarkdownRemark.edges.length;

  return (
    <div>
      <h1>Projects</h1>
      <h4>{postLength} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <div className="" key={node.id}>
            <Link to={node.fields.slug}>
              <h3>{node.frontmatter.title}</h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query AllMarkdownsQuery {
    allMarkdownRemark(filter: {frontmatter: { layout: { eq: "project" } }}) {
      edges {
        node {
          id
          frontmatter {
            title
            layout
            path
            date
            parent
          }
          fields {
            slug
          }
          html
          excerpt
          timeToRead
        }
      }
    }
  }
`
