import React, { Component } from 'react';
import { Link } from "gatsby";
import _ from 'lodash';

import GoalCard from "../zilker/GoalCard"

import "./scss/components/Card.scss"

class GoalCardsGroup extends Component {

  render() {
    const { projects, cards } = this.props;

    let projectsByCityGoal = [];

    cards.map((card) => {
      projectsByCityGoal.push({ title: card.fullTitle, projects: [] })
    })

    projects.map((project) => {
      let projectGoals = project.node.data.City_strategic_outcomes || []

      projectGoals.map((goal) => {
        _.find(projectsByCityGoal, (item) => {
          if (item.title === goal) {
            item.projects.push(project)
          }
        })
      })
    })


    return (
      <div className="row around-xs">
        {cards.map(({ title, fullTitle, description }, i) => {

          const cardProjects = _.find(projectsByCityGoal, (item) => {
            if (item.title === fullTitle) {
              return item
            }
          })

          return (
            <div className="xs-col-4" key={i}>
              <GoalCard title={title}
                fullTitle={fullTitle}
                description={description}
                projects={cardProjects.projects}
              />
            </div>
          )
        })}
      </div>

    );
  }

}

export default GoalCardsGroup;
