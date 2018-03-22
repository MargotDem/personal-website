import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

import './styles/header.css'

export default class Header extends Component {
  render () {
    return (
    	<div className='header-container'>
      		<div className='header-box'>
      			<div className='header-top'>
      				<div className='header-top-content'>
      					<NavLink to={'/'}>Margot de Maulmont</NavLink>
      					<NavLink to={'/'}><i className='fa fa-github' /></NavLink>
      					<NavLink to={'/'}><i className='fa fa-linkedin' /></NavLink>
      				</div>
      			</div>
      			<div className='header-bottom'>
      				<div className='header-bottom-content'>
      					<NavLink to={'/'}>Contact</NavLink>
      					<NavLink to={'/'}>Projects</NavLink>
      					<NavLink to={'/'}>CV</NavLink>
      					<NavLink to={'/'}>Language</NavLink>
      				</div>
      			</div>
      		</div>
      	</div>
    )
  }
}
