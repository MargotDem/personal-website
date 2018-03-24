import React, { Component } from 'react'

import { I18n } from 'react-i18next'

export default class BaseContainer extends Component {
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
      <I18n>
        {
        (t) => {
          return (this.renderMe(t))
        }
      }
      </I18n>
    )
  }
}
