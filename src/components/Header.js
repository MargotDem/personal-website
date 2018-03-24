import React from 'react'

import BaseContainer from '../containers/BaseContainer'
import { NavLink } from 'react-router-dom'
import i18n from '../lib/i18n'
import 'react-dropdown/style.css'

import './styles/header.css'

export default class Header extends BaseContainer {
  componentDidMount () {
    this.timer = setInterval(function () {
      if (window.pageYOffset > 700) {
        let elements = document.getElementsByClassName('header-link')
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.color = '#4d628e'
          elements[i].style.fontWeight = 'bold'
        }
        document.getElementById('header-top').style.borderBottom = 'solid 2px #4d628e'
      } else {
        let elements = document.getElementsByClassName('header-link')
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.color = '#d0d4dd'
          elements[i].style.fontWeight = 'normal'
        }
        document.getElementById('header-top').style.borderBottom = 'solid 2px #d0d4dd'
      }
    }, 10)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  handleClick () {
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })
  }

  changeLanguage () {
    console.log('HEYYYY')
  }

  renderMe (t) {
    return (
      <div className='header-container'>
        <div className='header-box'>
          <div id='header-top' className='header-top header-link'>
            <div className='header-top-content'>
              <NavLink className='header-link' to={'/'}>Margot de Maulmont</NavLink>
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
              <span className='header-link' href='' onClick={() => { this.handleClick() }}>Contact</span>
              <NavLink className='header-link' to={'/projects'}>{t('header.projects')}</NavLink>
              <NavLink className='header-link' to={'/cv'}>CV</NavLink>
              <div className='dropdown'>
                <a className='dropdown-toggle header-dropdown header-link' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                  {t('header.language')}
                </a>
                <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                  <span className='dropdown-item' href='' onClick={() => { i18n.changeLanguage('en') }}>English</span>
                  <span className='dropdown-item' href='' onClick={() => { i18n.changeLanguage('fr') }}>French</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
