import React from "react"
import PrimaryButton from "../lib/components/PrimaryButton";
import Link from 'gatsby-link'
import "../zilker/scss/About.scss"



const AboutPage = ({ data }) => (
  <div className="usa-grid-full">
    <div><h1 className="coa-about_head">
      About {data.site.siteMetadata.title}
    </h1>
    <div className="coa-about_body">
    ATX Project Tracker aims to make it easier for people in Austin to have a better understanding of what projects the City is working on, the state of progress of those projects, how the projects relate to critical goals, and how they are funded.
    
    The City of Austin consists of 40+ departments and over 13,000 employees serving almost 1 million people. There are tons of City-sponsored projects going on at any given moment in time – street resurfacing, park improvements, service delivery, and research, to name a few. It can be challenging for people in Austin to know what projects are going on relevant to them, what their status is, and how they can learn more (or even participate). City staff often face the same challenge. Because many of Austin’s challenges cross departmental lines–such as housing affordability, which involves at least half a dozen departments–many employees need easier access to information on other City projects that relate to their work.
    
    When the City of Austin joined the Open Government Partnership’s Subnational Pilot Program in December 2016, we made a commitment to build and test a project tracking tool as part of our participation. In short, we committed to up the City of Austin’s game in transparency, civic participation, accountability, and technology innovation. <a href="https://www.opengovpartnership.org/about/about-ogp" target="_blank" class="link--external">Learn more about the Open Government Partnership</a></div>
  </div>
  
  
  <div className="coa-about_title">
  Other City of Austin Project Tracking Tools
</div>
<div className="coa-about_body">
If you are looking for details about projects and programs funded by the 2016 Mobility Bond Program, you can view them on the <a href="http://capitalprojects.austintexas.gov/projects" target="_blank" class="link--external">City of Austin Project Explorer.</a> If you are interested in diving into the City's budget and how funds are allocated, get a guided view through <a href="http://budget.austintexas.gov/#!/year/default"> Open Budget ATX.</a>
</div>

<div className="coa-about_title">
Follow our progress and contribute 
</div>
<div className="coa-about_body">
Since this is open government, we are designing and building a project tracking tool using open source code that users can follow, copy and contribute to. We keep our code on <a href="https://github.com/cityofaustin/grackl">Github</a> and welcome collaboration!

</div>

<div className="coa-about_title">
Get In Touch
</div>
<div className="coa-about_body">
Do you have feedback for us? Or are you a City staff member wanting to publish your project on ATX Project Tracker?

We would love to hear from you:<br/>
Contact us at the: <a href="mailto:innovation@austintexas.gov">Innovation Office</a>

</div>

  </div>
  
  

    
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
