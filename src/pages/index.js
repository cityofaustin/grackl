import React from 'react'
import Link from 'gatsby-link'
import markdownIt from 'markdown-it';

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true
});

export default ({ data }) => {
  const projectCount = data.allAirtable.edges.length;

  return (
    <div>
      <h1>Projects</h1>
      <h4>{projectCount} Posts</h4>
      {data.allAirtable.edges.map(({ node }) => {

        return (
          <div className="" key={node.id}>
            <Link to={node.fields.slug}>
              <h3>{node.projectName}</h3>
            </Link>
            <p>{node.projectSummary}</p>
          </div>
        )
      })}
    </div>
  )
}

export const query = graphql`
  query AllAirtableQuery {
    allAirtable(filter: { publish: { eq: true }}) {
      edges {
        node {
          id
          projectName
          projectSummary
          publish
          fields {
            slug
          }
        }
      }
    }
  }
`
