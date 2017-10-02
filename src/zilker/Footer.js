import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <footer className="site-footer main">
        <div className="container-fluid">
          <div className="row center-xs">
            <div className="footer-logo">
              {/* TODO: Insert City Seal */}
            </div>
          </div>
          <div className="row center-xs">
            <div className="footer-menu">
              <nav>
                <ul className="top-level-list">
                  <li>
                    <a href="#" title="Home" role="menuitem">Nav Item</a>
                  </li>
                  <li>
                    <a href="#" title="Home" role="menuitem">Nav Item</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="mini-footer main">
          <div className="container-fluid">
            <div className="row center-xs end-sm">
              <div className="mini-footer--left start-sm center-xs col-sm-2">
                <a href="/innovation-fellows/privacy">Privacy Policy</a>
              </div>
              <div className="mini-footer--center footer-credits center-xs col-sm-8">
                <span className="footer-credits">Office of Innovation • Communications &amp; Technology Management</span>
              </div>
              <div className="mini-footer--right end-sm center-xs col-sm-2">
                <a href="https://medium.com/city-of-austin-design-technology-innovation"
                  target="_blank" title="Read Medium Posts by @Civiqueso" className="link--external">
                  {/* TODO: Insert Medium Post SVG */}
                </a>
                <a href="https://github.com/cityofaustin" target="_blank"
                  title="Check out the City of Austin's Open Source projects"
                  className="link--external">
                  {/* TODO: Insert Github SVG */}
                </a>
                <a href="https://twitter.com/civiqueso" target="_blank"
                  title="Read Tweets by @Civiqueso" className="link--external">
                  {/* TODO: Insert Twitter */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

}

export default Footer;
