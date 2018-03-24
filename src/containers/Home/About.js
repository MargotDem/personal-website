import React from 'react'

import BaseContainer from '../BaseContainer'

import { NavLink } from 'react-router-dom'

import './styles/about.css'

const PARAGRAPHS = [
  {
    icon: 'briefcase',
    text: 'home.briefcase'
  },
  {
    icon: 'code',
    text: 'home.code'
  },
  {
    icon: 'heart',
    text: 'home.heart'
  }
]

export default class About extends BaseContainer {
  renderMe (t) {
    return (
      <div className='middle-container about-container'>
        <div className='about-content'>
          {
            PARAGRAPHS.map((item) => {
              return (
                <div className='about-section' key={item.icon}>
                  <p className={'about-icon about-icon-' + item.icon}>
                    <i className={'fa fa-' + item.icon} />
                  </p>
                  <p>{t(item.text)}</p>
                </div>
              )
            })
          }
          <div className='about-button-container'>
            <NavLink to={'/projects'}><button type='submit' className='my-button'>{t('home.seePortfolio')}</button></NavLink>
          </div>
        </div>
      </div>
    )
  }
}
