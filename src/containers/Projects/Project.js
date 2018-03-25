import React, { Component } from 'react'

import './styles/project.css'

export default class Project extends Component {
  handleMouseOver (id) {
    document.getElementById('project-pic-' + id).style.transform = 'translate(-5px, 0px)'
    document.getElementById('project-title-' + id).style.transform = 'translate(0px, -5px)'
    document.getElementById('project-description-' + id).style.transform = 'translate(5px, 0px)'
  }

  handleMouseOut (id) {
    document.getElementById('project-pic-' + id).style.transform = 'translate(0px, 0px)'
    document.getElementById('project-title-' + id).style.transform = 'translate(0px, 0px)'
    document.getElementById('project-description-' + id).style.transform = 'translate(0px, 0px)'
  }

  render () {
    let { id, name, url, description, picUrl, githubUrl, icons } = this.props
    return (
      <a
        className='project-container'
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        onMouseOver={() => { this.handleMouseOver(id) }}
        onMouseOut={() => { this.handleMouseOut(id) }}
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
                  Object.values(icons).map((item, index) => {
                    return (
                      <img src={item} className='project-icon' alt='skill icon' />
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
