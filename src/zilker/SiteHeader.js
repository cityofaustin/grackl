import React, { Component } from 'react';
import SiteNav from './SiteNav';
import Link from 'gatsby-link'

import "./scss/components/SiteHeader.scss"

class SiteHeader extends Component {
  render() {
    const { title } = this.props.data.site.siteMetadata;

    return (
      <header className="site-header">
        <div className="container-fluid container">
          <div className="row">
            <div className="desktop-site-title start-xs hidden-xs col-md-4">
              <Link to="/" className="no-link">
                <span className="SiteHeader__title">{title}</span>
              </Link>
            </div>
            <div className="col-xs-12 col-md-8 header-menu">
              <SiteNav />
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default SiteHeader;
