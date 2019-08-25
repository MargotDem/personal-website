import React from 'react'

import BaseContainer from '../containers/BaseContainer'
import NavButton from './NavButton'
import i18n from '../lib/i18n'

import './styles/header.css'

const setHeaderStyle = (color, fontWeight) => {
  let elements = document.getElementsByClassName('header-link')
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = color;
      elements[i].style.fontWeight = fontWeight
    }
    document.getElementById('header-top').style.borderBottom = `solid 2px ${color}`
}

const languages = {
  en: "English",
  fr: "Français",
  es: "Español",
  pt: "Português",
}

export default class Header extends BaseContainer {
  componentDidMount () {
    this.timer = setInterval(function () {
      let elements = document.getElementsByClassName('header-link')
      if (window.pageYOffset > 700) {
        setHeaderStyle('#4d628e', 'bold')
      } else {
        setHeaderStyle('#d0d4dd', 'normal')
      }
    }, 10)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  handleContactClick () {
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })
  }

  renderMe (t) {
    return (
      <div>
        <div id='transition-out' className='transition-out' />
        <div className='header-container'>
          <div className='header-box'>
            <div id='header-top' className='header-top header-link'>
              <div className='header-top-content'>
                <NavButton headerButton page={''} text={'Margot de Maulmont'} />
                <a
                  className='header-link'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/MargotDem'
                >
                  <i className='fa fa-github' />
                </a>
                <a
                  className='header-link'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.linkedin.com/in/margot-de-maulmont/'
                >
                  <i className='fa fa-linkedin' />
                </a>
              </div>
            </div>
            <div className='header-bottom'>
              <div className='header-bottom-content'>
                <span className='header-link' onClick={() => { this.handleContactClick() }}>{t('header.contact')}</span>
                <NavButton page={'projects'} text={t('header.projects')} />
                <NavButton page={'cv'} text={'CV'} />
                <div className='dropdown'>
                  <a
                    className='dropdown-toggle header-dropdown header-link'
                    id='dropdownMenuButton' data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    {t('header.language')}
                  </a>
                  <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                    {Object.keys(languages).map(lang => (
                      <span className='dropdown-item' onClick={() => { i18n.changeLanguage(lang) }}>{languages[lang]}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
