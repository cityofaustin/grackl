import React from 'react'
import Link from 'gatsby-link'

import SiteIntro from "../zilker/SiteIntro"
import SectionBreakBar from "../zilker/SectionBreakBar"
import CardSection from "../zilker/CardSection"

import cityGoals from "../zilker/data/cityGoals"

export default ({ location, data }) => {
  const projects = data.allAirtable.edges;
  const goalString = location.search.split("?goal=")
  const filteredByGoal = goalString[1] && goalString[1].replace(/%20/g, " ")

  const filteredProjects = !filteredByGoal ? projects :
    projects.filter((project) => {
      return project.node.cityStrategicOutcomes.includes(filteredByGoal)
    })

  return (
    <div>
      <SectionBreakBar />
      <CardSection cards={filteredProjects} type="project" />
    </div>
  )
}

export const query = graphql`
  query AirtableProject {
    allAirtable(filter: { publish: { eq: true }}) {
      edges {
        node {
          id
          projectName
          projectSummary
          publish
          cityStrategicOutcomes
          projectStage
          leadDepartment
          projectImage {
            url
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
