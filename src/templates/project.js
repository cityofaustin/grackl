import React from "react"

export default ({ data }) => {
  const project = data.markdownRemark
  return (
    <div>
      <h1>
        {project.frontmatter.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: project.html }} />
    </div>
  )
}

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
