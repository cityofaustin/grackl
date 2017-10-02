import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import HtmlHelmet from  '../zilker/HtmlHelmet'
import PreHeader from  '../zilker/PreHeader'
import SiteHeader from  '../zilker/SiteHeader'

import "../zilker/scss/main.scss"

const TemplateWrapper = ({ children, data }) => (
  <div>
    <HtmlHelmet data={data} />
    <PreHeader data={data} />
    <SiteHeader data={data} />
    <main className="main">
      <div className="container container-fluid">
        <div className="row">
          {children()}
        </div>
      </div>
    </main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
  query SiteQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper
