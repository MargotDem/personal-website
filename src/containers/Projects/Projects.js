import React from 'react'

import BaseContainer from '../BaseContainer'
import Contact from '../../components/Contact'
import Project from './Project'
import projectOcc from '../../img/project-occ.png'
import projectLexicode from '../../img/project-lexicode.png'
import projectBT from '../../img/project-BT.png'
import react from '../../img/icons/react.png'
import php from '../../img/icons/php.png'
import sql from '../../img/icons/sql.png'
import js from '../../img/icons/js.png'
import bootstrap from '../../img/icons/bootstrap.png'
import git from '../../img/icons/git.png'
import cmdline from '../../img/icons/cmdline.png'

import './styles/projects.css'

const PERSO_PROJECTS = [
  {
    id: 1,
    name: 'Open Carte Comptable',
    url: 'http://opencartecomptable.fr/',
    description: 'projects.occ',
    picUrl: projectOcc,
    githubUrl: 'https://github.com/MargotDem/opencartecomptable',
    icons: {
      'php': php,
      'sql': sql,
      'js': js,
      'bootstrap': bootstrap
    }
  },
  {
    id: 2,
    name: 'Lexicode',
    url: 'https://lexicode.herokuapp.com/',
    description: 'projects.lexicode',
    picUrl: projectLexicode,
    githubUrl: 'https://github.com/MargotDem/lexicode',
    icons: {
      'react': react
    }
  }
]

const CONTRIBUTED_PROJECTS = [
  {
    id: 3,
    name: 'Brother Tongue',
    url: 'https://brothertongue.com/#/',
    description: 'projects.bt',
    picUrl: projectBT,
    githubUrl: false,
    icons: {
      'react': react,
      'git': git,
      'cmdline': cmdline,
      'bootstrap': bootstrap
    }
  }
]

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
          <div className='projects-top-content'>
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
          <div className='projects-bottom-wrapper'>
            <div className='projects-contributed'>
              <span className='projects-contributed-P'>P</span>
              {t('projects.contributed')}
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
