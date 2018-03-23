import React, { Component } from 'react'

import Waypoint from 'react-waypoint'

import Main from './Main'
import About from './About'
import Contact from './Contact'

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = ({
			scrolledPast: false
		})
	}

	handleMouseOver () {
		document.getElementById('down-button').style.transform = "translate(0px, 6px)"
	}

	handleMouseOut () {
		document.getElementById('down-button').style.transform = "translate(0px, -6px)"
	}

	handleClick () {
		if (window.pageYOffset < 750) {
			window.scroll({ top: 750, behavior: 'smooth' });
		} else {
			window.scroll({ top: 1500, behavior: 'smooth' });
		}
	}

	_handleWaypoint (scrolledPast) {
    	this.setState({ scrolledPast: scrolledPast })
  	}
	
	render () {
		return (
      		<div>
      			<div className='down-button-container'>
      				<i
      					id='down-button'
      					onMouseOver={() => {this.handleMouseOver()}}
      					onMouseOut={() => {this.handleMouseOut()}}
      					onClick={() => {this.handleClick()}}
      					className={'fa fa-angle-down down-button' + (this.state.scrolledPast ? '' : ' down-button-hide') }
      				/>
      			</div>
        		<Main />
        		<Waypoint
          			onEnter={() => { this._handleWaypoint(true) }}
          			onLeave={() => { this._handleWaypoint(false) }}
        		/>
        		<About />
        		<Contact />
      		</div>
    	)
	}
}