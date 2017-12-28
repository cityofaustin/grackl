import React, { Component } from 'react';
import Helmet from 'react-helmet'

// A document head manager for React
// https://github.com/nfl/react-helmet

class HtmlHelmet extends Component {

  render() {
    const { title } = this.props.data.site.siteMetadata;

    return (
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
    );
  }

}

export default HtmlHelmet;
