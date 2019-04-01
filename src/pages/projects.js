import React from 'react'
import { graphql } from 'gatsby'

import SiteIntro from "../zilker/SiteIntro"
import SectionBreakBar from "../zilker/SectionBreakBar"
import CardSection from "../zilker/CardSection"
import Search from "../zilker/Search"
import Layout from "../components/layout"


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
        return project.node.data.City_strategic_outcomes.includes(filteredByGoal)
      })
      : projects.filter((project) => {
        return project.node.data.Project_Name.toLowerCase().includes(searchString[1]) ||
          project.node.data.Description.toLowerCase().includes(searchString[1])

      })

  return (
    <Layout>
      <SectionBreakBar />
      <CardSection cards={filteredProjects} type="project" />
    </Layout>
  )
}

export const query = graphql`
  query AirtableProject {
    allAirtable(filter: {table: {eq: "projects"}, data: {Publish: {eq: true}}}) {
      edges {
        node {
          id
          data {
            Project_Name
            Description
            Publish
            City_strategic_outcomes
            Primary_strategic_outcome
            Secondary_strategic_outcome
            Project_stage
            Lead_Department
            Project_image {
              url
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
