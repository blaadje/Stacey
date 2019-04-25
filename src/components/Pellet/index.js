import React, { Component } from 'react'
import './style.css'
import { getColorFromStatus } from '../../utils'

class ModuleTimer extends Component {
  constructor (args) {
    super(args)
  }

  render () {
    return (
      <div className="wrapper">
        <div className="arrowWrapper">
          <div className="arrow" />
        </div>
        <div className="pelletWrapper">
          <div
            style={{ background: getColorFromStatus(this.props.status) }}
            className="pellet"
          />
        </div>
      </div>
    )
  }
}

export default ModuleTimer
