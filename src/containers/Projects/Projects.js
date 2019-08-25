import React from 'react'

import BaseContainer from '../BaseContainer'
import Contact from '../../components/Contact'
import Project from './Project'
import {PERSO_PROJECTS, CONTRIBUTED_PROJECTS} from "./projectsList"

import './styles/projects.css'

export default class Projects extends BaseContainer {
  componentDidMount () {
    document.title = 'Projects · Margot de Maulmont'
  }

  renderMe (t) {
    return (
      <div>
        <div className='top-container projects-top-container'>
          <div className='projects-perso'>
            <span className='projects-perso-P'>P</span>
            {t('projects.personal')}
          </div>
          <div className='projects-content projects-top-content'>
            {
              PERSO_PROJECTS.map((item) => {
                return (
                  <Project
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    url={item.url}
                    description={t(item.description)}
                    picUrl={item.picUrl}
                    githubUrl={item.githubUrl}
                    icons={item.icons}
                  />
                )
              })
            }
          </div>
        </div>
        <div className='middle-container projects-bottom-container'>
          <div className='middle-container-wrapper projects-bottom-wrapper'>
            <div className='projects-contributed'>
              <span className='projects-contributed-P'>P</span>
              {t('projects.contributed')}
            </div>
            <div className='projects-content projects-bottom-content'>
              {
                CONTRIBUTED_PROJECTS.map((item) => {
                  return (
                    <Project
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      url={item.url}
                      description={t(item.description)}
                      picUrl={item.picUrl}
                      githubUrl={item.githubUrl}
                      icons={item.icons}
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
