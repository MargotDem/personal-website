import React, { Component } from 'react'

import pic from '../../img/pic.jpg'

import './styles/main.css'

export default class Main extends Component {
  render () {
    return (
      <div className='main-container'>
        <div className='main-message'>
          <span>
            <span className='main-H'>H</span>ello
          </span>
          &nbsp;
          <span>
            <span className='main-W'>W</span>orld !
          </span>
        </div>
        <div className='main-text'>I’m Margot, a French junior developer, business student, autodidact and language enthusiast</div>
        <div className='main-photo-container'>
          <img className='main-photo' alt='me' src={pic} />
        </div>
      </div>
    )
  }
}
