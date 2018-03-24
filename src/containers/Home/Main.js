import React from 'react'

import BaseContainer from '../BaseContainer'

import pic from '../../img/pic.jpg'

import './styles/main.css'

export default class Main extends BaseContainer {
  renderMe (t) {
    return (
      <div className='top-container main-container'>
        <div className='main-message'>
          <span>
            <span className='main-H'>H</span>ello
          </span>
          &nbsp;
          <span>
            <span className='main-W'>W</span>orld !
          </span>
        </div>
        <div className='main-text'>
          {t('home.text')}
        </div>
        <div className='main-photo-container'>
          <img className='main-photo' alt='me' src={pic} />
        </div>
      </div>
    )
  }
}
