import React, { Component } from 'react';
import SiteNav from './SiteNav';
import { Link } from "gatsby"

import "./scss/components/SiteHeader.scss"

class SiteHeader extends Component {
  state = { isNavOpen: false }

  toggleNav = (e) => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
  }

  render() {
    const { title } = this.props.data.site.siteMetadata;


    return (
      <header className="coa-SiteHeader usa-header usa-header-basic" role="banner">
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <div className="usa-logo" id="basic-logo">
              <em className="usa-logo-text">
                <a href="/"
                  title="Home"
                  aria-label="Home">
                  {title}
                </a>
              </em>
            </div>
            <button className="usa-menu-btn" onClick={this.toggleNav}>Menu</button>
          </div>

          <SiteNav toggleNav={this.toggleNav} isNavOpen={this.state.isNavOpen} />
        </div>
      </header>
    )
  }
}

export default SiteHeader;
