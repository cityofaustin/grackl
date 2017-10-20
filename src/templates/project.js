import React from "react"
import markdownIt from 'markdown-it';

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true
});

export default ({ data }) => {
  const project = data.markdownRemark
  const projectSummary = typeof project.frontmatter.summary === 'string' ?
    md.render(project.frontmatter.summary) : '';


  return (
    <div className="page-section">
      <h1>
        {project.frontmatter.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: projectSummary }} />
    </div>
  )
}

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        summary
      }
    }
  }
`
