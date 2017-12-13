import React from "react"
import {FormattedNumber} from "react-intl"
import "./Projects.scss"
import departments from "../zilker/data/departments"

import ClockSvg from "../zilker/ClockSvg.js"

const renderDepts = (leadDepartment) => {
  return departments[leadDepartment[0]]
}

export default ({ data }) => {
  const {
    projectName, projectSummary, link, totalProjectBudget, fundingSource,
    leadDepartment, linksToAnyPartnerOrganizationWebsites, partnerOrganizations,
    cityStrategicOutcomes, contactName, contactEmail, projectStage, contactTitle
  } = data.airtable;

  return (
    <section className="usa-section">
      <div className="usa-grid">
        <div className="usa-width-three-quarters">
          <h1 className="coa-project_name">
            {projectName}
          </h1>
          <h2 className="coa-project_summary">
            {projectSummary}
          </h2>
          <div className="coa-project_summary">
            { link && <a href={link} target="_blank">Learn more about this project.</a>}
          </div>
        </div>
      </div>

      <div className="usa-grid">
        <h3 className="coa-project_phase">
          <ClockSvg />
           &nbsp;{projectStage}
         </h3>
         <hr></hr>

          <div className="usa-width-one-fourth">
            <h2 className="coa-city_sub-category">Funding</h2>
          </div>


      <div className="usa-width-three-fourths">
            <p className="coa-project-body">Total budget of &nbsp;
              <FormattedNumber value={totalProjectBudget} style="currency" currency="USD" minimumFractionDigits={0} />
            <br />{fundingSource}</p>
      </div>

      </div>



      <div className="usa-grid">
      <hr></hr>
        <div className="usa-width-one-fourth">
          <h2 className="coa-city_sub-category">Who's Involved</h2>
        </div>
        <div className="usa-width-three-fourths">
          <p className="coa-project-body">
            Project champions: &nbsp;
            {
              leadDepartment.length === 1 && departments[leadDepartment[0]] ?
                 <a href={departments[leadDepartment[0]]["fields"]["Home page"]} target="_blank">
                   {departments[leadDepartment[0]] && departments[leadDepartment[0]]["fields"]["Dept long name"]}
                 </a>
              :
                leadDepartment.map((d, i) => {
                  return (
                    <a href={departments[d] && departments[d]["fields"]["Home page"]} target="_blank">
                      {departments[d] && departments[d]["fields"]["Dept long name"]}
                      { i == 0 ? <span>, </span> : '' }
                    </a>
                  )
                }
              )
            }
          </p>
        </div>
        </div>


      <div className="usa-grid">
      <hr></hr>
        <div className="usa-width-one-fourth">
          <h2 className="coa-city_sub-category">Project Goals</h2>
        </div>
        <div className="usa-width-three-fourths">
          <p className="coa-project-body">{cityStrategicOutcomes.join(', ')}</p>
        </div>
      </div>

      <div className="usa-grid">
      <hr></hr>
        <div className="usa-width-one-fourth">
          <h2 className="coa-city_sub-category">Get in Touch</h2>
        </div>
        <div className="usa-width-three-fourths">
          <p className="coa-project-body">
            {contactName}, {contactTitle}
            <br />
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </p>
        </div>
      </div>

  </section>
  )
}

export const query = graphql`
  query ProjectQuery($slug: String!) {
    airtable(fields: { slug: { eq: $slug } }) {
      projectName
      projectSummary
      link
      totalProjectBudget
      fundingSource
      leadDepartment
      partnerOrganizations
      linksToAnyPartnerOrganizationWebsites
      cityStrategicOutcomes
      contactName
      contactEmail
      contactTitle
      projectStage
    }
  }
`
