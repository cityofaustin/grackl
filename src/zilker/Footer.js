import React, { Component } from 'react';
import SiteNav from './SiteNav';
import citySeal from './img/coa_seal_transparent_white.png'
import "./scss/components/Footer.scss"


class Footer extends Component {

  render() {
    return (
      <footer className="coa-Footer site-footer main">
        <div className="coa-Footer__container">
          <div className="row">
            <div className="col-xs-3 coa_Footer__logo">
              <img src={citySeal} alt="City of Austin Seal" className="coa_Footer__logo" />
            </div>
            <div className="coa_Footer__nav footer-menu col-xs-9">
              <SiteNav footer={true} />
            </div>
          </div>
        </div>
      </footer>
    );
  }

}

export default Footer;
