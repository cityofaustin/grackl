import React from "react"
import markdownIt from 'markdown-it';

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true
});

export default ({ data }) => {
  const project = data.airtable

  return (
    <div className="page-section">
      <h1>
        {project.projectName}
      </h1>
      <div>{project.projectSummary}</div>
    </div>
  )
}

export const query = graphql`
  query ProjectQuery($slug: String!) {
    airtable(fields: { slug: { eq: $slug } }) {
      projectName
      projectSummary
    }
  }
`
