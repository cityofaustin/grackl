import React from "react"
import {FormattedNumber} from "react-intl"
import "./Projects.scss"

export default ({ data }) => {
  const {
    projectName, projectSummary, link, totalProjectBudget, fundingSource,
    leadDepartment, linksToAnyPartnerOrganizationWebsites, partnerOrganizations,
    cityStrategicOutcomes, contactName, contactEmail, projectStage, contactTitle
  } = data.airtable;

  return (
    <section>
      <div className="usa-grid-full">
        <div className="usa-width-three-quarters">
          <h1 className="coa-project_name">
            {projectName}
          </h1>
          <h2 className="coa-project_summary">
            {projectSummary}
          </h2>
          <div className="coa-project_summary">
            { link && <a href={link}>Learn more about this project.</a>}
          </div>
        </div>
      </div>

      <div className="usa-grid-full">
        <h3 className="coa-project_phase">
          <svg width="14" height="14" id="clock-icon" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1024 544v448q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224v-352q0-14 9-23t23-9h64q14 0 23 9t9 23zm416 352q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
          </svg>
           &nbsp;{projectStage}
         </h3>
         <hr></hr>
          <div className="usa-grid-full">

          <div className="usa-width-one-fourth">
            <h2 className="coa-city_sub-category">Funding</h2>
          </div>


      <div className="usa-width-three-fourths">
            <p className="coa-project-body">Total budget of &nbsp;
              <FormattedNumber value={totalProjectBudget} style="currency" currency="USD" minimumFractionDigits={0} />
            <br />{fundingSource}</p>
      </div>
      </div>

      </div>



      <div className="usa-grid-full">
      <hr></hr>
        <div className="usa-width-one-fourth">
          <h2 className="coa-city_sub-category">Who's Involved</h2>
        </div>
        <div className="usa-width-three-fourths">
          <p className="coa-project-body">Project champions: {leadDepartment}
          {/* TODO: Currently getting a reference ID. Need Dept name */}
          </p>
        </div>
        </div>


      <div className="usa-grid-full">
      <hr></hr>
        <div className="usa-width-one-fourth">
          <h2 className="coa-city_sub-category">Project Goals</h2>
        </div>
        <div className="usa-width-three-fourths">
          <p className="coa-project-body">{cityStrategicOutcomes.join(', ')}</p>
        </div>
      </div>

      <div className="usa-grid-full">
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
