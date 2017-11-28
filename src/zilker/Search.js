import React, { Component } from 'react';

class Search extends Component {

  // TODO: Add functionality to Search

  render() {
    return (
      <div role="search">
        <form className="usa-search usa-search-small">
          <label for="search-field-small">Search for Projects</label>
          <input id="search-field-small" type="search" name="search" />
          <button type="submit">
            <span className="usa-sr-only">Search</span>
          </button>
        </form>
      </div>
    );
  }

}

export default Search;
