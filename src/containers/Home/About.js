import React from 'react'
import renderHTML from 'react-render-html'

import BaseContainer from '../BaseContainer'
import NavButton from '../../components/NavButton'

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
    }, 1000)
  }

  renderMe (t) {
    return (
      <div className='middle-container about-container'>
        <div className='middle-container-wrapper about-content'>
          {
            PARAGRAPHS.map((item) => {
              return (
                <div className='about-section' key={item.icon}>
                  <p className={'about-icon about-icon-' + item.icon}>
                    <i className={'fa fa-' + item.icon} />
                  </p>
                  <p>{renderHTML(t(item.text))}</p>
                </div>
              )
            })
          }
          <NavButton portfolioButton page={'projects'} />
        </div>
      </div>
    )
  }
}
