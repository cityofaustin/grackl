import React, { Component } from 'react';
import { Link } from "gatsby"

import Search from "../zilker/Search"

import "./scss/components/SiteIntro.scss"
import img from "./img/austin_downtown.jpg"

class SiteIntro extends Component {

  render() {
    return (
      <section className="usa-section usa-grid">
        <div className="row">
          <div className="col-xs-12 col-sm-8">
            <h2 className="coa-intro_head">Improving Visibility into City Projects</h2>
            <p>ATX Project Tracker seeks to make it easier for people in Austin to have a sense of what projects the City is working on, the state of progress of those projects, how the projects relate to critical goals, and how they are funded. <a href="/about">Learn more about project tracking and strategic outcomes.</a>
            </p>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <Search />
              </div>
              <div className="col-xs-12 col-sm-6 coa-SiteIntro__link">
                <Link to="/projects">View All Tracked Projects</Link>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-4 first-xs last-sm">
            <img src={img} alt="City of Austin from above" align="center" />
          </div>
        </div>
      </section>
    );
  }

}

export default SiteIntro;
