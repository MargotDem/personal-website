import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

import './styles/about.css'

export default class About extends Component {
  render () {
    return (
    	<div className='about-container'>
      		<div className='about-content'>
      			<div className='about-section'>
      				<p className='about-icon about-icon-briefcase'><i className='fa fa-briefcase'/></p>
      				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
      			</div>
      			<div className='about-section'>
      				<p className='about-icon about-icon-code'><i className='fa fa-code'/></p>
      				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
      			</div>
      			<div className='about-section'>
      				<p className='about-icon about-icon-heart'><i className='fa fa-heart'/></p>
      				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
      			</div>
            <div className='about-button-container'>
              <NavLink to={'/projects'}><button type='submit' className='my-button'>See portfolio</button></NavLink>
            </div>
      		</div>
      	</div>
    )
  }
}