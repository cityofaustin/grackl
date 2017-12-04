import React, { Component } from 'react';
import navItems from './data/navItems';

import "./scss/components/SiteNav.scss"

class SiteNav extends Component {

  render() {
    return (
      <nav role="navigation" className="usa-nav">
        <button className="usa-nav-close">
          <img src="../../dist/img/close.svg" alt="close" />
        </button>
        <ul className="usa-nav-primary">
          { navItems.map((item, i) => (
            <li key={i} className="SiteNav__top-level-list-items">
              <a href={item.path} title={item.title} role="menuitem" className="usa-nav-link">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

}

export default SiteNav;
