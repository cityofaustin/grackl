import React, { Component } from 'react';
import _ from 'lodash';

import GoalCardsGroup from "../zilker/GoalCardsGroup"
import ProjectCard from "../zilker/ProjectCard"

import "./scss/components/CardSection.scss"

class CardSection extends Component {

  render() {
    const { cards, type } = this.props

    return (
      <section className="coa-CardSection usa-section usa-grid coa-flex-container coa-flex-wrap">
        <div className="row top-xs">
          {
            (type === "project") && cards.map((card) => {
              return <ProjectCard {...card.node} />
            })
          }
          {
            (type === "goals") && <GoalCardsGroup {...this.props} />
          }
        </div>
      </section>
    );
  }

}

export default CardSection;
