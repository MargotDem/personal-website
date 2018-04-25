import React, { Component } from 'react'
import Tooltip from 'material-ui/Tooltip'

import './styles/project.css'

export default class Project extends Component {
  handleMouseHovering (isMouseOver, id) {
    if (isMouseOver) {
      document.getElementById('project-pic-' + id).style.transform = 'translate(-5px, 0px)'
      document.getElementById('project-title-' + id).style.transform = 'translate(0px, -5px)'
      document.getElementById('project-description-' + id).style.transform = 'translate(5px, 0px)'
    } else {
      document.getElementById('project-pic-' + id).style.transform = 'translate(0px, 0px)'
      document.getElementById('project-title-' + id).style.transform = 'translate(0px, 0px)'
      document.getElementById('project-description-' + id).style.transform = 'translate(0px, 0px)'
    }
  }

  render () {
    let { id, name, url, description, picUrl, githubUrl, icons } = this.props
    return (
      <a
        className='project-container'
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        onMouseOver={() => { this.handleMouseHovering(true, id) }}
        onMouseOut={() => { this.handleMouseHovering(false, id) }}
      >
        <div className='project-pic-container'>
          <img id={'project-pic-' + id} className='project-pic' src={picUrl} alt='project-snapshot' />
        </div>
        <div className='project-content'>
          <h5 id={'project-title-' + id} className='project-title'>
            {name}
            { githubUrl && ' · ' }
            {
              githubUrl && <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
                <i className='fa fa-github project-github' />
              </a>
            }
          </h5>
          <p id={'project-description-' + id} className='project-description'>
            {description}
            <br />
            {
              icons !== undefined && <span>
                {
                  Object.keys(icons).map((item, index) => {
                    return (
                      <Tooltip key={index} id='tooltip-icon' title={item}>
                        <img src={icons[item]} className='project-icon' alt='skill icon' />
                      </Tooltip>
                    )
                  })
                }
              </span>
            }

          </p>
        </div>
      </a>
    )
  }
}
