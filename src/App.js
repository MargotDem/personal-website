import React, { Component } from 'react'

import Header from './components/Header'
import Body from './components/Body'
import { HashRouter } from 'react-router-dom'
import { Scroller } from './components/scroller'

import './App.css'

class App extends Component {
  render () {
    return (
      <HashRouter>
        <div>
          <Scroller />
          <Header />
          <Body />
        </div>
      </HashRouter>
    )
  }
}

export default App
