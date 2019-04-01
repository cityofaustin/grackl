import React from "react"
import { graphql } from 'gatsby'
import ClockSvg from "../zilker/ClockSvg.js"
import LearningSvg from "../zilker/LearningSvg.js"
import MobilitySvg from "../zilker/MobilitySvg.js"
import GovSvg from "../zilker/GovSvg.js"
import HealthSvg from "../zilker/HealthSvg.js"
import SafetySvg from "../zilker/SafetySvg.js"
import EconomicSvg from "../zilker/EconomicSvg.js"
import Layout from "../components/layout"

import "../zilker/scss/About.scss"



const AboutPage = ({ data }) => (
  <Layout>

  <section className="usa-section usa-grid">
    <div className="row">
      <div className="col-xs-12 col-sm-8">
        <h2 className="coa-about__head">About {data.site.siteMetadata.title}
        </h2>

        <p className="coa-about__body">
          ATX Project Tracker aims to make it easier for people in Austin to have a better understanding of:
    
        <ul className="coa-about__body">• What projects the City is working on,</ul>
          <ul className="coa-about__body">• The state of progress of those projects,</ul>
          <ul className="coa-about__body">• How the projects relate to critical goals,</ul>
          <ul className="coa-about__body">• And how they are funded.</ul>

          The City of Austin consists of 40+ departments and over 13,000 employees serving almost 1 million people. There are tons of City-sponsored projects going on at any given moment in time – street resurfacing, park improvements, service delivery, and research, to name a few.
      </p>
        <p className="coa-about__body">It can be challenging for people in Austin to know what projects are going on relevant to them, what their status is, and how they can learn more (or even participate). City staff often face the same challenge. Because many of Austin’s challenges cross departmental lines–such as housing affordability, which involves at least half a dozen departments–many employees need easier access to information on other City projects that relate to their work.
      </p>
        <p className="coa-about__body">When the City of Austin joined the Open Government Partnership’s Subnational Pilot Program in December 2016, we made a commitment to build and test a project tracking tool as part of our participation. In short, we committed to up the City of Austin’s game in transparency, civic participation, accountability, and technology innovation. <a href="https://www.opengovpartnership.org/about/about-ogp" target="_blank" className="link--external">Learn more about the Open Government Partnership</a>
        </p>
        <p className="coa-about__title">
          Other City of Austin Project Tracking Tools
   </p>
        <p className="coa-about__body">
          If you are looking for details about projects and programs funded by the 2016 Mobility Bond Program, you can view them on the <a href="http://capitalprojects.austintexas.gov/projects" target="_blank" className="link--external">City of Austin Project Explorer.</a> If you are interested in diving into the City's budget and how funds are allocated, get a guided view through <a href="http://budget.austintexas.gov/#!/year/default"> Open Budget ATX.</a>
        </p>
        <p className="coa-about__title">
          Follow our progress and contribute
    </p>
        <p className="coa-about__body">
          Since this is open government, we are designing and building a project tracking tool using open source code that users can follow, copy and contribute to. We keep our code on <a href="https://github.com/cityofaustin/grackl">Github</a> and welcome collaboration!
      </p>

        <p className="coa-about__title">Get In Touch
    </p>
        <p className="coa-about__body">
          Do you have feedback for us? Or are you a City staff member wanting to publish your project on ATX Project Tracker?
      We would love to hear from you:<br />
          Contact us at the: <a href="mailto:innovation@austintexas.gov">Innovation Office</a>
        </p>
      </div>

      <div className="col-xs-12 col-sm-4">
        <div className="coa-About__sidebar__head">
          Project Stages
    </div>
        <div className="coa-About__sidebar__plain-text">
          The ATX Project Tracker uses four stages to describe a project’s progress or status. Definitions for each stage are below.
    </div>



        <dl className="coa-about__phase">
          <dt className="coa-About__sidebar"><ClockSvg />PLANNING</dt>
          <dd className="coa-About__sidebar__plain-text">In this stage, people are identifying and scoping the project. It includes leads or opportunities that have been identified, but are not yet in progress.
          </dd>
          <dt className="coa-About__sidebar"><ClockSvg />LEARNING</dt>
          <dd className="coa-About__sidebar__plain-text">This stage includes research to understand what type of solution, product, or service should be put in place. Activities in this stage include discovery, needs assessments, and requirements gathering.

          </dd>
          <dt className="coa-About__sidebar"><ClockSvg />IN PROGRESS</dt>
          <dd className="coa-About__sidebar__plain-text">This stage involves executing the solution, product, or service, including design, development, testing, and solution implementation.

          </dd>
          <dt className="coa-About__sidebar"><ClockSvg />COMPLETE/LIVE</dt>
          <dd className="coa-About__sidebar__plain-text">In this stage, progress is completed, and solution, product, or service is now live or operational. It includes after-action reporting to document and measure project results. A solution, product, or service is expected to be refined or improved over time.
          </dd>
        </dl>


        <div className="coa-About__sidebar__title">Strategic Goals</div>
        <div className="coa-About__sidebar__plain-text">In 2017 Austin’s City Council adopted a <a href="https://austinstrategicplan.bloomfire.com/posts/1373079-city-of-austin-strategic-direction">strategic vision</a> and six corresponding strategic outcomes to guide the City of Austin over the next three to five years. The ATX Project Tracker uses these goal areas to tell the story about what results each project aims to achieve. Definitions for each outcome are below.
  
  
  
  
      <dl className="coa-about__phase">

            <p><GovSvg />
              <dt className="coa-About__sidebar__goal__title"> Government That Works
      </dt>

              <dd className="coa-About__sidebar__plain-text">Believing that city government works effectively and collaboratively for all of us - that it is fair, ethical, and innovative.
    
          </dd>
            </p>

            <p><MobilitySvg />
              <dt className="coa-About__sidebar__goal__title">Mobility</dt>
              <dd className="coa-About__sidebar__plain-text">Getting us where we want to go, when we want to get there, safely and cost-effectively.
    
          </dd>
            </p>

            <p><HealthSvg />
              <dt className="coa-About__sidebar__goal__title">Health</dt>
              <dd className="coa-About__sidebar__plain-text">Enjoying a sustainable environment and a healthy life, physically and mentally.
    
          </dd>
            </p>

            <p><SafetySvg />
              <dt className="coa-About__sidebar__goal__title">Safety</dt>
              <dd className="coa-About__sidebar__plain-text">Being safe in our home, at work, and in our community.
    
          </dd>
            </p>
            <p><EconomicSvg />
              <dt className="coa-About__sidebar__goal__title">Economic Opportunity</dt>
              <dd className="coa-About__sidebar__plain-text">Having economic opportunities and resources that enable us to thrive in our community.
    
          </dd>
            </p>
            <p><LearningSvg />
              <dt className="coa-About__sidebar__goal__title">Culture and Lifelong Learning</dt>
              <dd className="coa-About__sidebar__plain-text">Being enriched by Austin's unique civic, cultural, ethnic, and learning opportunities.
    
          </dd>
            </p>
          </dl>
        </div>
      </div>
    </div>
  </section>
  </Layout>











)

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
export default AboutPage
