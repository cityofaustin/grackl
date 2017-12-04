import React, { Component } from 'react';
import _ from 'lodash';

import Card from "../zilker/Card"

import "./scss/components/CardSection.scss"

class CardSection extends Component {

  render() {
    const { projects, cards } = this.props;
    let projectsByCityGoal = [];

    cards.map((card) => {
      projectsByCityGoal.push({ title: card.fullTitle, projects: [] })
    })

    projects.map((project) => {
      let projectGoals = project.node.cityStrategicOutcomes || []

      projectGoals.map((goal) => {
        _.find(projectsByCityGoal, (item) => {
          if (item.title === goal) {
            item.projects.push(project)
          }
        })
      })
    })

    return (
      <section className="coa-CardSection usa-section usa-grid coa-flex-container coa-flex-wrap">
        <div className="row around-xs">
            {
              cards.map(({ title, fullTitle, description }, i) => {

                const cardProjects = _.find(projectsByCityGoal, (item) => {
                  if (item.title === fullTitle) {
                    return item
                  }
                })

                return (
                  <div className="xs-col-4" key={i}>
                    <Card title={title}
                      description={description}
                      projects={cardProjects.projects}
                    />
                  </div>
                )
              })
            }
        </div>
      </section>
    );
  }

}

export default CardSection;
