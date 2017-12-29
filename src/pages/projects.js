import React from 'react'
import Link from 'gatsby-link'

import SiteIntro from "../zilker/SiteIntro"
import SectionBreakBar from "../zilker/SectionBreakBar"
import CardSection from "../zilker/CardSection"
import Search from "../zilker/Search"


import cityGoals from "../zilker/data/cityGoals"

export default ({ location, data }) => {
  const projects = data.allAirtable.edges;
  const searchString = location.search.split("?search=")
  const goalString = location.search.split("?goal=")
  const filteredByGoal = goalString[1] && goalString[1].replace(/%20/g, " ")
  const filteredBySearch = searchString[1] && searchString[1]

  const filteredProjects = !filteredByGoal && !filteredBySearch ? projects
    : filteredByGoal ?
        projects.filter((project) => {
          return project.node.cityStrategicOutcomes.includes(filteredByGoal)
        })
    : projects.filter((project) => {
        return project.node.projectName.toLowerCase().includes(searchString[1]) ||
          project.node.projectSummary.toLowerCase().includes(searchString[1])

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
          primaryStrategicOutcome
          secondaryStrategicOutcome
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
