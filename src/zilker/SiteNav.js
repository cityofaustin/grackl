import React, { Component } from 'react';
import navItems from './nav/navItems';

class SiteNav extends Component {

  render() {
    return (
      <nav>
        <ul className="top-level-list">
          { navItems.map((item, i) => (
            <li key={i}>
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
