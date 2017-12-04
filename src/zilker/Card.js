import React, { Component } from 'react';
import "./scss/components/Card.scss"

class Card extends Component {

  render() {
    const { title, description } = this.props;

    return (
     <div className="coa-goal"> 
     <div className="coa-goal_card">
        <h4 className="coa-city_goal">City Goal</h4>
        <h3 className="coa-card_title">{title}</h3>
        <p className="coa-city_goal_description">{description}</p>
      </div>
      </div>

      
      
    );
  }

}

export default Card;
