import React, { Component } from 'react'
import './style.css'
import { getColorFromStatus } from '../../utils'

class Pellet extends Component {
  render () {
    return (
      <div
        {...this.props}
        className="Pellet-wrapper"
      >
        <div className="Pellet-arrowWrapper">
          <div className="Pellet-arrow" />
        </div>
        <div className="Pellet-pelletWrapper">
          <div
            style={{ background: getColorFromStatus(this.props.status) }}
            className="Pellet-pellet"
          />
        </div>
      </div>
    )
  }
}

export default Pellet
