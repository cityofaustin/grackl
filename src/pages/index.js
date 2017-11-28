import React from 'react'
import Link from 'gatsby-link'

import SiteIntro from "../zilker/SiteIntro"
import SectionBreakBar from "../zilker/SectionBreakBar"
import Card from "../zilker/Card"

import cityGoals from "../zilker/data/cityGoals"

export default ({ data }) => {
  const projectCount = data.allAirtable.edges.length;

  return (
    <div>
      <SiteIntro />
      <SectionBreakBar />
      <section className="usa-section usa-grid coa-flex-container coa-flex-wrap">        
        {
          cityGoals.map(({ title, description }) => {
            return <Card title={title} description={description} />
          })
        }
      </section>

      {data.allAirtable.edges.map(({ node }) => {

        return (
          <div className="" key={node.id}>
            <Link to={node.fields.slug}>
              <h3>{node.projectName}</h3>
            </Link>
            <p>{node.projectSummary}</p>
            <p>{node.cityStrategicOutcomes}</p>
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
          cityStrategicOutcomes
          fields {
            slug
          }
        }
      }
    }
  }
`
