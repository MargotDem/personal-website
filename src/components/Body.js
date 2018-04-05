import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Component as Home } from '../containers/Home/index'
import { Component as Cv } from '../containers/Cv/index'
import { Component as Projects } from '../containers/Projects/index'

import AsyncComponent from './AsyncComponent'

const home = () => import('../containers/Home/index')
const cv = () => import('../containers/Cv/index')
const projects = () => import('../containers/Projects/index')

export default class Body extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={() => <AsyncComponent moduleProvider={home} />} />
        <Route exact path='/cv' component={() => <AsyncComponent moduleProvider={cv} />} />
        <Route exact path='/projects' component={() => <AsyncComponent moduleProvider={projects} />} />
        <Route path='/' render={() => <Redirect to='/' />} />
      </Switch>
    )
  }
}
