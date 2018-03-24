import React, { Component } from 'react'

import Header from './components/Header'
import Body from './components/Body'
import { HashRouter } from 'react-router-dom'
import { Scroller } from './components/scroller'

import './App.css'

class App extends Component {
  componentWillMount () {
    this.updateTitle(this.props)
  }

  componentWillReceiveProps (nextProps) {
    this.updateTitle(nextProps)
  }

  updateTitle (props) {
    // doing this here because couldn't fix the bug for home page -_-"
    document.title = 'Margot de Maulmont'
    if (props.dynamicTitle !== undefined && props.dynamicTitle !== document.title) {
      document.title = props.dynamicTitle
    }
  }
  render () {
    return (
      <HashRouter>
        <div>
          <div className='page-transition' />
          <Scroller />
          <Header />
          <Body />
        </div>
      </HashRouter>
    )
  }
}

export default App
