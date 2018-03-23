import React, { Component } from 'react'

import './home.css'

export default class Contact extends Component {
  render () {
    return (
    	<div className='contact-container'>
    		<form className='contact-form'>
    			<h3 className='contact-message'>Get in touch !</h3>
    			<input type='text' name='name' placeholder='Your name' />
    			<input type='text' name='email' placeholder='Your email' />
    			<textarea name='message' placeholder='Your message'></textarea>
    			<button type='submit' className='my-button'>Send</button>
    		</form>
      	</div>
    )
  }
}