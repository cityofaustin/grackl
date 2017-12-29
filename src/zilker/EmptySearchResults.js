import React, { Component } from 'react';
import Search from '../zilker/Search';

class EmptySearchResults extends Component {

  render() {
    const { cards, type } = this.props

    return (
      <section className="coa-EmptySearchResults">
        <div>
          No Results Found. Try another search or <a href="/projects">explore</a> current projects.
        </div>
      </section>
    );
  }

}

export default EmptySearchResults;
