import React, { Component } from 'react'

import Contact from '../../components/Contact'
import cvFr from '../../img/cv-fr.png'
import cvFrPdf from '../../img/cv-fr.pdf'

import './styles/cv.css'

export default class Cv extends Component {
  constructor (props) {
    super(props)
    this.state = ({
      showModal: false
    })
  }

  handleOpenClick () {
    this.setState({
      showModal: true
    })
  }

  handleCloseClick () {
    this.setState({
      showModal: false
    })
  }

  render () {
    let { showModal } = this.state
    return (
      <div>
        <div
          className={'cv-modal-background' + (showModal ? ' cv-modal-background-show' : '')}
          onClick={() => { this.handleCloseClick() }}
        >
          <span className='cv-modal-close'>&times;</span>
        </div>

        <div className='cv-modal-container'>
          <img alt='cv-modal' src={cvFr} className={'cv-modal' + (showModal ? ' cv-modal-show' : '')} />
        </div>

        <div className='cv-top'>
          <img alt='cv' src={cvFr} className='cv-img' onClick={() => { this.handleOpenClick() }} />
          <a href={cvFrPdf} download='CV Margot de Maulmont' className='cv-download-button'>
            <i className='fa fa-download' />
          </a>
        </div>

        <div className='cv-bottom'>
          <div className='cv-bottom-wrapper' />
        </div>

        <Contact />
      </div>
    )
  }
}
