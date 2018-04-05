import React, { PureComponent } from 'react'
import ReactLoading from 'react-loading'

export default class AsyncComponent extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      Component: null
    }
  }

  componentWillMount () {
    if (!this.state.Component) {
      this.props.moduleProvider().then(({Component}) => this.setState({ Component }))
    }
  }

  render () {
    const { Component } = this.state
    return (
      <div>
        {
          Component ? <Component />
          : <div className='loadingScreen'><ReactLoading type={'bars'} color={'whitesmoke'} /></div>
        }
      </div>
    )
  }
}
