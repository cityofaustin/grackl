import React from 'react'
import { IntlProvider } from 'react-intl'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import HtmlHelmet from '../zilker/HtmlHelmet'
import PreHeader from '../zilker/PreHeader'
import SiteHeader from '../zilker/SiteHeader'
import Footer from '../zilker/Footer'
import { StaticQuery, graphql } from "gatsby"

import "../zilker/scss/main.scss"

import { addLocaleData } from 'react-intl';
import localeData from 'react-intl/locale-data/en';
addLocaleData(localeData);

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <IntlProvider locale="en">
        <div>
          <HtmlHelmet data={data} />
          <PreHeader data={data} />
          <SiteHeader data={data} />
          <main className="main-content">
            {children}
          </main>
          <Footer data={data} />
        </div>
      </IntlProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
