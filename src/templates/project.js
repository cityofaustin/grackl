import React from "react"
import markdownIt from 'markdown-it';

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true
});
import {FormattedNumber} from "react-intl"

export default ({ data }) => {
  const {
    projectName, projectSummary, link, totalProjectBudget, fundingSource,
    leadDepartment, linksToAnyPartnerOrganizationWebsites, partnerOrganizations,
    cityStrategicOutcomes, contactName, contactEmail, projectStage,
  } = data.airtable;

  return (
    <div className="page-section">
      <h1>
        {projectName}
      </h1>


      <div>
        <h3>Project stage: {projectStage}</h3>
        {projectSummary}
      </div>

      { link && <div><a href={link}>Learn more about this project.</a></div> }

      <div>
        <h2>Funding</h2>
        <p>Total budget of &nbsp;
          <FormattedNumber value={totalProjectBudget} style="currency" currency="USD" minimumFractionDigits={0} />
        </p>
        <p>{fundingSource}</p>
      </div>

      <div>
        <h2>Who's Involved</h2>
        <p>Project champions: {leadDepartment}</p> {/* TODO: Currently getting a reference ID. Need Dept name */}
        { partnerOrganizations &&
          <p>Partner organizations: &nbsp;
            <a href={linksToAnyPartnerOrganizationWebsites}>
              {partnerOrganizations}
            </a>
          </p>
        }
      </div>

      <div>
        <h2>Project Goals</h2>
        <p>{cityStrategicOutcomes}</p>
      </div>

      <div>
        <h2>Get in Touch</h2>
        <p>{contactName}</p>
        <p>{contactEmail}</p>
      </div>

    </div>
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
      projectStage
    }
  }
`
