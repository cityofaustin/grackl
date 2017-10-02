import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import HtmlHelmet from  '../zilker/HtmlHelmet'
import PreHeader from  '../zilker/PreHeader'

// import './index.css'
import "../lib/styles/zilker.scss"

const TemplateWrapper = ({ children }) => (
  <div className="home-page">
    <HtmlHelmet title="Grackl" />
    <PreHeader />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
