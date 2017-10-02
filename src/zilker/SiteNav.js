import React, { Component } from 'react';

class SiteNav extends Component {

  render() {
    return (
      <nav>
        <ul className="top-level-list">
          {/* TODO: Map over nav items */}
          <li>
            <a href="#" title="{{ item.label }}" role="menuitem">
              NavLabel
            </a>
          </li>
          <li>
            <a href="#" title="{{ item.label }}" role="menuitem">
              NavLabel
            </a>
          </li>
        </ul>
      </nav>
    );
  }

}

export default SiteNav;
