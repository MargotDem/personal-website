import React, { Component } from 'react'

import './styles/project.css'

export default class Project extends Component {
	render () {
		let { name, url, description, picUrl } = this.props
		return (
			<a className='project-container' href={url} target='_blank' rel='noopener noreferrer'>
	      		<div className='project-pic-container'>
	      			<img className='project-pic' src={picUrl} />
	      		</div>
	      		<div className='project-content'>
	      			<h3>{name}</h3>
	      			<p>{description}</p>
	      		</div>
      		</a>
    	)
	}
}
