import React, { Component } from 'react';
import { Link } from "gatsby"
import ClockSvg from "../zilker/ClockSvg.js"
import img from "./img/austin_downtown.jpg"
import "./scss/components/ProjectCard.scss"

import departments from "../zilker/data/departments"

class ProjectCard extends Component {

  render() {
    const {
      Project_Name, id, Description, Primary_strategic_outcome, Secondary_strategic_outcome, Project_stage,
      Lead_Department, Project_image
    } = this.props.data;
    const { fields } = this.props

    const Project_imageUrl = Project_image ? Project_image[0].url : "http://lorempixel.com/400/200/city/1/"

    const truncatedSummary = Description && Description.length > 100 ?
      Description.substring(0, 100) + "..." :
      Description


    return (
      <Link to={fields.slug} style={{ textDecoration: 'none' }}>
        <div className="coa-ProjectCard" key={id}>
          <div className="coa-ProjectCard__image"
            style={{ backgroundImage: `url(${Project_imageUrl})` }}></div>
          <div className="coa-ProjectCard__body">
            <span className="coa-ProjectCard__stage">
              <span className="coa-ProjectCard__svg">
                <ClockSvg />
              </span>
              <span className="coa-ProjectCard__stage-text">
                {Project_stage}
              </span>
            </span>
            <h3 className="coa-ProjectCard__title-text">
              {Project_Name}
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
                  Lead_Department.length === 1 ? departments[Lead_Department[0]] && departments[Lead_Department[0]]["fields"]["Dept long name"] :
                    Lead_Department.map((d, i) => {
                      return (
                        <span>
                          {departments[d] && departments[d]["fields"]["Dept long name"]}
                          {i == 0 ? <span>, </span> : ''}
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
                <span className="coa-project__comma">{Primary_strategic_outcome} </span>
                <span className="coa-project__comma">{Secondary_strategic_outcome}</span>

              </dd>
            </dl>
          </div>
        </div>
      </Link>
    );
  }

}

export default ProjectCard;
