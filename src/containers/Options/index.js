import React, { Component } from 'react'
import { flow } from 'lodash'
import { connect } from 'react-redux'

import {
  toggleNotification,
  togglePellet
} from '../../store/actions'
import Switch from '@material-ui/core/Switch'
import './style.css'

class Options extends Component {
  render () {
    const { notifications, pellet } = this.props
    return (
      <div>
        <header className="header">
          Options
        </header>
        <div className="Options-wrapper">
          <div>
            <Switch
              checked={notifications}
              onClick={() => this.props.dispatch(toggleNotification())}
              value="checkedA"
            />
            <span className="Options-label">Desktop Notifications</span>
          </div>
          <div>
            <Switch
              checked={pellet}
              onClick={() => this.props.dispatch(togglePellet())}
              value="checkedB"
              color="primary"
            />
            <span className="Options-label">Display Pellet</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notifications: state.notifications,
    pellet: state.pellet,
  }
}

export default flow(connect(mapStateToProps))(Options)
