import React from "react"
import {FormattedNumber} from "react-intl"
import "./Projects.scss"

export default ({ data }) => {
  const {
    projectName, projectSummary, link, totalProjectBudget, fundingSource,
    leadDepartment, linksToAnyPartnerOrganizationWebsites, partnerOrganizations,
    cityStrategicOutcomes, contactName, contactEmail, projectStage,
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
        <h3 className="coa-project_phase"> <img src="/zilker/img/Clock.png" alt="clock" /> {projectStage}</h3>
        <hr></hr>
        <div className="usa-grid-full">
          <div className="usa-width-one-fourth">
            <h2 className="coa-city_sub-category">Funding</h2>
          </div>
        
       
      <div className="usa-width-three-fourths"> 
            <p>Total budget of &nbsp;
              <FormattedNumber value={totalProjectBudget} style="currency" currency="USD" minimumFractionDigits={0} />
            <br />{fundingSource}</p>    
      </div>
      </div>
      <hr></hr>
      </div>
    
        

      <div className="usa-grid-full"> 
        <div className="usa-width-one-fourth">
          <h2 className="coa-city_sub-category">Who's Involved</h2>
        </div>
        <div className="usa-width-three-fourths">
          <p>Project champions: {leadDepartment}
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
          <p>{cityStrategicOutcomes}</p>
        </div>
      </div>
      
      <div className="usa-grid-full">
      <hr></hr>
        <div className="usa-width-one-fourth">
          <h2 className="coa-city_sub-category">Get in Touch</h2>
        </div>
        <div className="usa-width-three-fourths"> 
          <p>{contactName}
          <br />{contactEmail}</p>
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
      projectStage
    }
  }
`
