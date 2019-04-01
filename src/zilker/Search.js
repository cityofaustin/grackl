import React, { Component } from 'react';
import { navigate } from "gatsby-link"

class Search extends Component {
  state = { searchString: '' }

  updateSearchValue = (e) => {
    e.preventDefault();
    this.setState({
      searchString: e.target.value.toLowerCase()
    })
  }

  navigateToSearch = (e) => {
    e.preventDefault();
    navigate(`/projects?search=${this.state.searchString}`)
  }

  render() {
    return (
      <div role="search">
        <form className="usa-search usa-search-small" onSubmit={(e) => this.navigateToSearch(e)}>
          <label htmlFor="search-field-small">Search for Projects</label>
          <input
            id="search-field-small"
            type="search" name="search"
            defaultValue={this.state.searchString}
            onKeyUp={this.updateSearchValue}
          />
          <button type="submit">
            <span className="usa-sr-only">Search</span>
          </button>
        </form>
      </div>
    );
  }

}

export default Search;
