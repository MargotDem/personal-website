import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../containers/Home/Home'
import Cv from '../containers/Cv/Cv'
import Projects from '../containers/Projects/Projects'

export default class Body extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' render={(props) => <Home {...props} dynamicTitle={'Margot de Maulmont'} />} />
        <Route exact path='/cv' render={(props) => <Cv {...props} dynamicTitle={'CV · Margot de Maulmont'} />} />
        <Route exact path='/projects' render={(props) => <Projects {...props} dynamicTitle={'Projects · Margot de Maulmont'} />} />
        <Route path='/' render={() => <Redirect to='/' />} />
      </Switch>
    )
  }
}
