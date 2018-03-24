import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

import './styles/about.css'

const PARAGRAPHS = [
  {
    icon: 'briefcase',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm ipsum dolor sit amet, consectetur adipiscing elim ipsum dolor sit amet, consectetur adipiscing elim ipsum dolor sit amet, consectetur adipiscing eli incididunt ut labore et dolore magna'
  },
  {
    icon: 'code',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, slabore'
  },
  {
    icon: 'heart',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
  }
]

export default class About extends Component {
  render () {
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
                  <p>{item.text}</p>
                </div>
              )
            })
          }
          <div className='about-button-container'>
            <NavLink to={'/projects'}><button type='submit' className='my-button'>See portfolio</button></NavLink>
          </div>
        </div>
      </div>
    )
  }
}
