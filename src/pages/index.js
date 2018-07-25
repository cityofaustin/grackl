import React from 'react'
import Link from 'gatsby-link'

import SiteIntro from "../zilker/SiteIntro"
import SectionBreakBar from "../zilker/SectionBreakBar"
import CardSection from "../zilker/CardSection"

import cityGoals from "../zilker/data/cityGoals"

export default ({ data }) => {
  const projects = data.allAirtable.edges;

  return (
    <div>
      <SiteIntro />
      <SectionBreakBar />
      <CardSection cards={cityGoals} projects={projects} type="goals" />
    </div>
  )
}

export const query = graphql`
  query AllAirtableQuery {
    allAirtable(filter: { Publish: { eq: true }}) {
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
