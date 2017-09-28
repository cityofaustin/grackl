import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => {
  const projectCount = data.allMarkdownRemark.edges.length;

  return (
    <div>
      <h1>Projects</h1>
      <h4>{projectCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <div className="" key={node.id}>
            <Link to={node.fields.slug}>
              <h3>{node.frontmatter.title}</h3>
            </Link>
            <p>{node.frontmatter.summary}</p>
          </div>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query AllMarkdownsQuery {
    allMarkdownRemark(filter: {frontmatter: { type: { eq: "project" } }}) {
      edges {
        node {
          id
          frontmatter {
            title
            layout
            path
            date
            parent
            summary
          }
          fields {
            slug
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
