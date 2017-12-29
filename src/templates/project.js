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
    cityStrategicOutcomes, contactName, contactEmail, projectStage, contactTitle, primaryStrategicOutcome, secondaryStrategicOutcome,
  } = data.airtable;

  return (
    <section className="usa-section usa-grid">
      <div className="row">
      <div className="col-xs-12 col-sm-8">
        <div>
          <h1 className="coa-project__name">
            {projectName}
          </h1>
        </div>
          <h2 className="coa-project__summary">
            {projectSummary}
          </h2>
        <div className="coa-project__summary">
            { link && <a href={link} target="_blank">Learn more about this project.</a>}
        </div>
        
      

    <div>
        <h3 className="coa-project__phase">
          <ClockSvg />
           &nbsp;{projectStage}
         </h3>
         <hr></hr>

          <div className="usa-width-one-fourth">
            <h2 className="coa-city__sub-category">Funding</h2>
          </div>


       <div className="usa-width-three-fourths">
            <p className="coa-project__body">Total budget of &nbsp;
              <FormattedNumber value={totalProjectBudget} style="currency" currency="USD" minimumFractionDigits={0} />
            <br />{fundingSource}</p>
      </div>

    </div>

  <div>
      <hr></hr>
        <div className="usa-width-one-fourth">
          <h2 className="coa-city__sub-category">Who's Involved</h2>
        </div>
        <div className="usa-width-three-fourths">
          <p className="coa-project__body">
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


      <div>
      <hr></hr>
        <div className="usa-width-one-fourth">
          <h2 className="coa-city__sub-category">Project Goals</h2>
        </div>
        <div className="usa-width-three-fourths">
          <p className="coa-project__body">
          <span className="coa-comma">{primaryStrategicOutcome} </span>
          <span className="coa-comma">{secondaryStrategicOutcome}</span> 
          </p>
          
        </div>
      </div>

      <div>
      <hr></hr>
        <div className="usa-width-one-fourth">
          <h2 className="coa-city__sub-category">Get in Touch</h2>
        </div>
        <div className="usa-width-three-fourths">
          <p className="coa-project_body">
            {contactName}, {contactTitle}
            <br />
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </p>
        </div>
      
      </div>
     
      </div>
      <div className="col-xs-12 col-sm-4">
    
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
      primaryStrategicOutcome
      secondaryStrategicOutcome
    }
  }
`
