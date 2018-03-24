import React from 'react'

import BaseContainer from '../BaseContainer'

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
  handleNavClick (page) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })

    document.getElementById('transition-out').className = 'transition-out transition-out-show'

    setTimeout(function () {
      document.getElementById('transition-out').className = 'transition-out'
      window.location = ('/#' + page)
      // document.getElementById('testtt').submit()
    }, 1000)
  }

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
            <button className='my-button' onClick={() => { this.handleNavClick('projects') }}>{t('home.seePortfolio')}</button>
          </div>
        </div>
      </div>
    )
  }
}
