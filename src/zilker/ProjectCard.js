import React, { Component } from 'react';
import Link from 'gatsby-link'
import ClockSvg from "../zilker/ClockSvg.js"
import img from "./img/austin_downtown.jpg"
import "./scss/components/ProjectCard.scss"

import departments from "../zilker/data/departments"

class ProjectCard extends Component {

  render() {
    const {
      projectName, id, projectSummary, cityStrategicOutcomes, projectStage,
      leadDepartment, projectImage, fields
    } = this.props;

    const projectImageUrl = projectImage ? projectImage[0].url : "http://lorempixel.com/400/200/city/1/"

    const truncatedSummary = projectSummary.length > 100 ?
      projectSummary.substring(0, 100) + "..." :
      projectSummary

    const truncatedGoals = cityStrategicOutcomes.join(', ').length > 60 ?
      cityStrategicOutcomes.join(', ').substring(0, 60) + "..." :
      cityStrategicOutcomes.join(', ')

    return (
      <Link to={fields.slug} style={{ textDecoration: 'none' }}>
        <div className="coa-ProjectCard" key={id}>
          <div className="coa-ProjectCard__image"
               style={{ backgroundImage: `url(${projectImageUrl})`}}></div>
          <div className="coa-ProjectCard__body">
            <span className="coa-ProjectCard__stage">
              <span className="coa-ProjectCard__svg">
                <ClockSvg  />
              </span>
              <span className="coa-ProjectCard__stage-text">
                {projectStage}
              </span>
            </span>
            <h3 className="coa-ProjectCard__title-text">
                {projectName}
            </h3>
            <p className="coa-ProjectCard__plain-text">
              {truncatedSummary}
            </p>
            <dl className="coa-ProjectCard__field">
              <dt className="coa-ProjectCard__label">
                Primary Department
              </dt>
              <dd className="coa-ProjectCard__plain-text">
                {
                  leadDepartment.length === 1 ? departments[leadDepartment[0]] && departments[leadDepartment[0]]["fields"]["Dept long name"] :
                    leadDepartment.map((d, i) => {
                      return (
                        <span>
                          {departments[d] && departments[d]["fields"]["Dept long name"]}
                          { i == 0 ? <span>, </span> : '' }
                        </span>
                      )
                    }
                  )
                }
              </dd>
              <dt className="coa-ProjectCard__label">
                City Goals
              </dt>
              <dd className="coa-ProjectCard__plain-text">
                {truncatedGoals}
              </dd>
            </dl>
          </div>
        </div>
      </Link>
    );
  }

}

export default ProjectCard;
