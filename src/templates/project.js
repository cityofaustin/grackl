import React from "react";
import { graphql } from "gatsby";
import { FormattedNumber } from "react-intl";
import "./Projects.scss";
import departments from "../zilker/data/departments";

import ClockSvg from "../zilker/ClockSvg.js";
import Layout from "../components/layout";

export default ({ data }) => {
  const {
    Project_Name,
    Description,
    Link,
    Total_project_budget,
    Funding_source,
    Lead_Department,
    Contact_Name,
    Contact_email,
    Project_stage,
    Contact_Title,
    Primary_strategic_outcome,
    Secondary_strategic_outcome
  } = data.airtable.data;

  return (
    <Layout>
      <section className="usa-section usa-grid">
        <div className="row">
          <div className="col-xs-12 col-sm-8">
            <div>
              <h1 className="coa-project__name">{Project_Name}</h1>
            </div>
            <h2 className="coa-project__summary">{Description}</h2>
            <div className="coa-project__summary">
              {Link && (
                <a href={Link} target="_blank">
                  Learn more about this project.
                </a>
              )}
            </div>

            <div>
              <h3 className="coa-project__phase">
                <ClockSvg />
                &nbsp;{Project_stage}
              </h3>
              <hr />

              <div className="usa-width-one-fourth">
                <h2 className="coa-city__sub-category">Funding</h2>
              </div>

              <div className="usa-width-three-fourths">
                <p className="coa-project__body">
                  Total budget of &nbsp;
                  {/* TODO: format as currency */}
                  <span>{Total_project_budget}</span>
                  {/* <FormattedNumber value={Total_project_budget} style="currency" currency="USD" minimumFractionDigits={0} /> */}
                  <br />
                  {Funding_source}
                </p>
              </div>
            </div>

            <div>
              <hr />
              <div className="usa-width-one-fourth">
                <h2 className="coa-city__sub-category">Who's Involved</h2>
              </div>
              <div className="usa-width-three-fourths">
                <p className="coa-project__body">
                  Project champions: &nbsp;
                  {Lead_Department &&
                  Lead_Department.length === 1 &&
                  departments[Lead_Department[0]] ? (
                    <a
                      href={
                        departments[Lead_Department[0]]["fields"]["Home page"]
                      }
                      target="_blank"
                    >
                      {departments[Lead_Department[0]] &&
                        departments[Lead_Department[0]]["fields"][
                          "Dept long name"
                        ]}
                    </a>
                  ) : (
                    Lead_Department &&
                    Lead_Department.map((d, i) => {
                      return (
                        <a
                          href={
                            departments[d] &&
                            departments[d]["fields"]["Home page"]
                          }
                          target="_blank"
                        >
                          {departments[d] &&
                            departments[d]["fields"]["Dept long name"]}
                          {i == 0 ? <span>, </span> : ""}
                        </a>
                      );
                    })
                  )}
                </p>
              </div>
            </div>

            <div>
              <hr />
              <div className="usa-width-one-fourth">
                <h2 className="coa-city__sub-category">Project Goals</h2>
              </div>
              <div className="usa-width-three-fourths">
                <p className="coa-project__body">
                  <span className="coa-comma">
                    {Primary_strategic_outcome}{" "}
                  </span>
                  <span className="coa-comma">
                    {Secondary_strategic_outcome}
                  </span>
                </p>
              </div>
            </div>

            <div>
              <hr />
              <div className="usa-width-one-fourth">
                <h2 className="coa-city__sub-category">Get in Touch</h2>
              </div>
              <div className="usa-width-three-fourths">
                <p className="coa-project_body">
                  {Contact_Name}, {Contact_Title}
                  <br />
                  <a href={`mailto:${Contact_email}`}>{Contact_email}</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4" />
        </div>
      </section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($name: String) {
    airtable(table: { eq: "projects" }, data: { Project_Name: { eq: $name } }) {
      data {
        Project_Name
        Description
        Link
        Total_project_budget
        Funding_source
        Lead_Department
        City_strategic_outcomes
        Contact_Name
        Contact_email
        Contact_Title
        Project_stage
        Primary_strategic_outcome
        Secondary_strategic_outcome
      }
    }
  }
`;
