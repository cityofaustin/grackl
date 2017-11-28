import React, { Component } from 'react';

import "./scss/components/Card.scss"

class Card extends Component {

  render() {
    const { title, description } = this.props;

    return (
      <div className="coa-Card">
        <h4>City Goal</h4>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }

}

export default Card;
