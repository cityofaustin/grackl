import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SiteIntro from "../zilker/SiteIntro"
import SectionBreakBar from "../zilker/SectionBreakBar"
import CardSection from "../zilker/CardSection"

import cityGoals from "../zilker/data/cityGoals"

export default ({ data }) => {
  const projects = data.allAirtable.edges;

  return (
    <Layout data={data}>
      <SiteIntro />
      <SectionBreakBar />
      <CardSection cards={cityGoals} projects={projects} type="goals" />
    </Layout>
  )
}

export const query = graphql`
  query AllAirtableQuery {
    allAirtable(filter: {table: {eq: "projects"}, data: {Publish: {eq: true}}}) {
      edges {
        node {
          id
          data {
            Project_Name
            Description
            Publish
            City_strategic_outcomes
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
