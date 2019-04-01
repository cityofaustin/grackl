import React, { Component } from 'react';
import { Link } from "gatsby"

import "./scss/components/Card.scss"

class GoalCard extends Component {

  render() {
    const { title, description, projects, fullTitle } = this.props;

    return (
      <div className="coa-Card">
        <div className="coa-Card__heading">
          <span className="coa-Card__label-text">City Goal</span>
          <h3 className="coa-Card__title-text">{title}</h3>
          <p className="coa-Card__desc-text">{description}</p>
        </div>
        <div className="coa-Card__body">
          <span className="coa-Card__label-text">Recently Updated Projects</span>
          <ul className="coa-Card__project-list">
            {projects.map((project, i) => {
              if (i > 3) return false
              const { fields } = project.node
              const { Project_Name } = project.node.data

              return (
                <li key={i}>
                  <Link to={fields.slug} className="coa-Card__project-list-item-link">
                    {Project_Name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="coa-Card__footer">
          <div className="coa-Card__footer-text">
            {/* TODO: figure out routing for project with filter */}
            <Link to={`projects?goal=${fullTitle}`}>
              {/* TODO: Add carrat right icon */}
              View {title} projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

}

export default GoalCard;
