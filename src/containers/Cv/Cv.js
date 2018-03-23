import React, { Component } from 'react'

import Contact from '../../components/Contact'
import cvFr from '../../img/cv-fr.png'
import cvFrPdf from '../../img/cv-fr.pdf'

import './styles/cv.css'

export default class Cv extends Component {
	render () {
		return (
      		<div>
        		<div className='cv-top'>
        			<img alt='cv' src={cvFr} className='cv-img'/>
        			<a href={cvFrPdf} download='CV Margot de Maulmont' className='cv-download-button'>
        				<i className='fa fa-download'/>
        			</a>
        		</div>
        		<div className='cv-bottom'>
        			<div className='cv-bottom-wrapper'></div>
        		</div>
        		<Contact />
      		</div>
    	)
	}
}
