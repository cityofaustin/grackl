import React from "react"

export default ({ data }) => {
  const project = data.markdownRemark
  return (
    <div>
      <h1>
        {project.frontmatter.title}
      </h1>
      {/*
          TODO: Need to figure out a way to translate a frontmatter field from
          markdown to  HTML the way it does automatiically when the markdown is
          beneath the frontmatter. There are cases where we might need more than
          one markdown field. Otherwise, we have to look into how Netlify CMS
          creates md files.
      */}
      <div dangerouslySetInnerHTML={{ __html: project.html || project.frontmatter.summary }} />
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
