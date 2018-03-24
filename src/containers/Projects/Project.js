import React, { Component } from 'react'

import './styles/project.css'

export default class Project extends Component {
	handleMouseOver (id) {
		document.getElementById('project-pic-' + id).style.transform = 'translate(-5px, 0px)'
		document.getElementById('project-title-' + id).style.transform = 'translate(0px, -5px)'
		document.getElementById('project-description-' + id).style.transform = 'translate(5px, 0px)'
	}

	handleMouseOut (id) {
		document.getElementById('project-pic-' + id).style.transform = 'translate(0px, 0px)'
		document.getElementById('project-title-' + id).style.transform = 'translate(0px, 0px)'
		document.getElementById('project-description-' + id).style.transform = 'translate(-0px, 0px)'
	}
	
	render () {
		let { id, name, url, description, picUrl } = this.props
		return (
			<a
				className='project-container'
				href={url} target='_blank'
				rel='noopener noreferrer'
				onMouseOver={() => {this.handleMouseOver(id)}}
				onMouseOut={() => {this.handleMouseOut(id)}}
			>
	      		<div className='project-pic-container'>
	      			<img id={'project-pic-' + id} className='project-pic' src={picUrl} />
	      		</div>
	      		<div className='project-content'>
	      			<h3 id={'project-title-' + id} className='project-title'>{name}</h3>
	      			<p id={'project-description-' + id} className='project-description'>{description}</p>
	      		</div>
      		</a>
    	)
	}
}
