import React from 'react'

import BaseContainer from '../BaseContainer'
import NavButton from '../../components/NavButton'
import Contact from '../../components/Contact'
import cvFr from '../../img/cv-fr.png'
import cvFrPdf from '../../img/cv-fr.pdf'

import './styles/cv.css'

export default class Cv extends BaseContainer {
  constructor (props) {
    super(props)
    this.state = ({
      showModal: false
    })
  }

  componentDidMount () {
    document.title = 'CV · Margot de Maulmont'
    this.interval = setInterval(function () {
      document.getElementById('cv-download-button').style.transform = 'translate(0px, 18px)'
      this.timeout = setTimeout(function () {
        document.getElementById('cv-download-button').style.transform = 'translate(0px, 0px)'
      }, 300)
    }, 5000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
    clearTimeout(this.timeout)
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

        <div className='top-container cv-top'>
          <img alt='cv' src={cvFr} className='cv-img' onClick={() => { this.handleOpenClick() }} />
          <a href={cvFrPdf} download='CV Margot de Maulmont' className='cv-download-button' id='cv-download-button'>
            <i className='fa fa-download' />
          </a>
        </div>

        <div className='middle-container cv-bottom'>
          <div className='middle-container-wrapper cv-bottom-wrapper'>
            <NavButton page={'projects'} />
          </div>
        </div>

        <Contact />
      </div>
    )
  }
}
