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
          return project.node.City_strategic_outcomes.includes(filteredByGoal)
        })
    : projects.filter((project) => {
        return project.node.Project_Name.toLowerCase().includes(searchString[1]) ||
          project.node.Project_summary.toLowerCase().includes(searchString[1])

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
    allAirtable(filter: { Publish: { eq: true }}) {
      edges {
        node {
          id
          Project_Name
          Project_summary
          Publish
          City_strategic_outcomes
          Primary_strategic_outcome
          Secondary_strategic_outcome
          Project_stage
          Lead_Department
          Project_image {
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
