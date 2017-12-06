import React, { Component } from 'react';
import Link from 'gatsby-link'

import Search from "../zilker/Search"

import "./scss/components/SiteIntro.scss"
import img from "./img/austin_downtown.jpg"

class SiteIntro extends Component {

  render() {
    return (
      <section className="usa-section usa-grid">
        <div className="usa-width-two-thirds">
          <h2>Improving Visibility into City Projects</h2>
          <p>ATX Project Tracker seeks to make it easier for people in Austin to have a sense of what projects the City is working on, the state of progress of those projects, how the projects relate to critical goals, and how they are funded. <a href="/about">Learn more about project tracking and strategic outcomes.</a>
          </p>
          <div className="coa-flex-container">
            <div className="coa-flex-item">
              <Search />
            </div>
            <div className="coa-flex-item coa-SiteIntro__link">
              <Link to="/projects">View All Tracked Projects</Link>
            </div>
          </div>
        </div>
        <div className="usa-width-one-third">
          <img src={img} alt="City of Austin from above" />
        </div>
      </section>
    );
  }

}

export default SiteIntro;
