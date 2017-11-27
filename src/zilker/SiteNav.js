import React, { Component } from 'react';
import navItems from './nav/navItems';

import "./scss/components/SiteNav.scss"

class SiteNav extends Component {

  render() {
    return (
      <nav>
        <ul className="top-level-list">
          { navItems.map((item, i) => (
            <li key={i} className="SiteNav__top-level-list-items">
              <a href={item.path} title={item.title} role="menuitem">
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
