import React from 'react'

import BaseContainer from '../containers/BaseContainer'

import './styles/contact.css'

export default class Contact extends BaseContainer {
  renderMe (t) {
    return (
      <div className='contact-container' id='contact-form'>
        <form className='contact-form' action='https://formspree.io/margot.demaulmont@gmail.com' method='post'>
          <h3 className='contact-message'>{t('contact.getInTouch')}</h3>
          <input type='text' name='name' placeholder={t('contact.yourName')} />
          <input type='text' name='email' placeholder={t('contact.yourEmail')} />
          <textarea name='message' placeholder={t('contact.yourMessage')} />
          <button type='submit' className='my-button'>{t('contact.send')}</button>
        </form>
        <div className='footer'>
          {t('contact.madeWith')}
          &nbsp;
          <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>ReactJS</a>
        </div>
      </div>
    )
  }
}
