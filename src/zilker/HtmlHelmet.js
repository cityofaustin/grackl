import React, { Component } from 'react';
import Helmet from 'react-helmet'

// A document head manager for React
// https://github.com/nfl/react-helmet

class HtmlHelmet extends Component {

  render() {
    return (
      <Helmet
        title={this.props.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
    );
  }

}

export default HtmlHelmet;
