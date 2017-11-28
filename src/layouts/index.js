import React from 'react'
import {IntlProvider} from 'react-intl'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import HtmlHelmet from '../zilker/HtmlHelmet'
import PreHeader from '../zilker/PreHeader'
import SiteHeader from '../zilker/SiteHeader'
import Footer from '../zilker/Footer'

import "../zilker/scss/main.scss"

const TemplateWrapper = ({ children, data }) => (
   <IntlProvider locale="en">
    <div>
      <HtmlHelmet data={data} />
      <PreHeader data={data} />
      <SiteHeader data={data} />
      <main className="main-content">
        {children()}
      </main>
      <Footer data={data} />
    </div>
  </IntlProvider>
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
