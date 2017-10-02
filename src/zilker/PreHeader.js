import React, { Component } from 'react';

class PreHeader extends Component {

  render() {
    return (
      <header className="pre-header">
        {/* This is where a Google Translate plugin might go */}
        <div className="container-fluid">
          <div className="row">
            <button  className="col-xs usa-button mobile-menu-button"
              id="drawer-button--menu"  aria-label="Mobile Menu Control"
              aria-pressed="false" aria-controls="site-mobile-menu"
            >
              {/* TODO: Import Font Awesome SVGs */}
              {/* <svg class="icon icon--menu" width="15" height="15" viewBox="0 0 32 32" preserveAspectRatio="xMinYMin"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon--menu"></use></svg> */}
              {/* <svg class="icon icon--close" width="15" height="15" viewBox="0 0 32 32" preserveAspectRatio="xMinYMin"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon--close"></use></svg> */}
            </button>
            <div className="no-logo start-xs col-xs">
              <span>
                <p>An official City of Austin website</p>
              </span>
            </div>
          </div>
          <div className="mobile-site-title start-xs col-xs">
            <span>
              Design, Technology, <nobr>&amp; Innovation</nobr> Fellows
            </span>
          </div>
          {/* This is where the Google Translate controls might go. */}
          {/* <div className="control-translate end-xs start-sm col-xs">
            <span tabindex="10" aria-label="Translate Menu Control"
              aria-role="button" aria-controls="google_translate_element"
              id="drawer-button--translate" aria-pressed="false"
            >
              Translate
            </span>
          </div> */}
        </div>
      </header>
    );
  }

}

export default PreHeader;
