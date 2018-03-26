import React from 'react'

import BaseContainer from '../containers/BaseContainer'

import './styles/navButton.css'

export default class NavButton extends BaseContainer {
  handleNavClick (page) {
    if (window.innerWidth <= 425) {
      window.location = ('/#' + page)
    } else {
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
  }

  renderMe (t) {
    let { headerButton, page, text } = this.props
    if (headerButton) {
      return (
        <span className='header-link' onClick={() => { this.handleNavClick(page) }}>{text}</span>
      )
    }
    return (
      <div className='portfolio-button-container'>
        <button className='my-button' onClick={() => { this.handleNavClick(page) }}>
          {t('home.seePortfolio')}
        </button>
      </div>
    )
  }
}
