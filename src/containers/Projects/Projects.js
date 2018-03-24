import React, { Component } from 'react'

import Contact from '../../components/Contact'
import Project from './Project'
import projectOcc from '../../img/project-occ.png'
import projectLexicode from '../../img/project-lexicode.png'
import projectBT from '../../img/project-BT.png'

import './styles/projects.css'

const PERSO_PROJECTS = [
  {
    id: 1,
    name: 'Open Carte Comptable',
    url: 'http://opencartecomptable.fr/',
    description: 'description arzegt azrgehtryt nzteyrhtzt atezrht zefzgqrshtd ffze tsy(',
    picUrl: projectOcc,
    githubUrl: 'https://github.com/MargotDem/opencartecomptable'
  },
  {
    id: 2,
    name: 'Lexicode',
    url: 'https://lexicode.herokuapp.com/',
    description: 'description arzegt azrgehtryt nzteyrhtzt atezrht zefzgqrshtd ffze tsy(',
    picUrl: projectLexicode,
    githubUrl: 'https://github.com/MargotDem/lexicode'
  }
]

const CONTRIBUTED_PROJECTS = [
  {
    id: 3,
    name: 'Brother Tongue',
    url: 'https://brothertongue.com/#/',
    description: 'description arzegt azrgehtryt nzteyrhtzt atezrht zefzgqrshtd ffze tsy(',
    picUrl: projectBT,
    githubUrl: false
  }
]

export default class Projects extends Component {
  render () {
    return (
      <div>
        <div className='top-container projects-top-container'>
          <div className='projects-perso'>
            <span className='projects-perso-P'>P</span>ersonal projects
          </div>
          <div className='projects-top-content'>
            {
              PERSO_PROJECTS.map((item) => {
                return (
                  <Project
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    url={item.url}
                    description={item.description}
                    picUrl={item.picUrl}
                    githubUrl={item.githubUrl}
                  />
                )
              })
            }
          </div>
        </div>
        <div className='middle-container projects-bottom-container'>
          <div className='projects-bottom-wrapper'>
            <div className='projects-contributed'>
              <span className='projects-contributed-P'>P</span>rojects I’ve contributed to
            </div>
            <div className='projects-bottom-content'>
              {
                CONTRIBUTED_PROJECTS.map((item) => {
                  return (
                    <Project
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      url={item.url}
                      description={item.description}
                      picUrl={item.picUrl}
                      githubUrl={item.githubUrl}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
        <Contact />
      </div>
    )
  }
}
