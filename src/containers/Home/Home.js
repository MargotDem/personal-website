import React, { Component } from 'react'

import Main from './Main'
import About from './About'
import Contact from './Contact'

export default class Home extends Component {
	render () {
		return (
      		<div>
        		<Main />
        		<About />
        		<Contact />
      		</div>
    	)
	}
}