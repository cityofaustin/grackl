import React, { Component } from 'react';

import EmptySearchResults from "../zilker/EmptySearchResults";
import GoalCardsGroup from "../zilker/GoalCardsGroup"
import ProjectCard from "../zilker/ProjectCard"

import "./scss/components/CardSection.scss"

class CardSection extends Component {

  render() {
    const { cards, type } = this.props;
    const foundProjects = (type === 'project') && cards && !!cards.length;
    const goals = type === 'goals' && cards && !!cards.length;

    return (
      <section className="coa-CardSection usa-section usa-grid coa-flex-container coa-flex-wrap">
        <div className="row top-xs">
          {
            !foundProjects && !goals && <EmptySearchResults />
          }
          {
            foundProjects && cards.map((card, i) => {
              return <ProjectCard {...card.node} key={i} />
            })
          }
          {
            goals && <GoalCardsGroup {...this.props} />
          }
        </div>
      </section>
    );
  }

}

export default CardSection;
