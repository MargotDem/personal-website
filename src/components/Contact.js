import React, { Component } from 'react'

import './styles/contact.css'

export default class Contact extends Component {
  render () {
    return (
    	<div className='contact-container' id='contact-form'>
    		<form className='contact-form' action='https://formspree.io/margot.demaulmont@gmail.com' method='post'>
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