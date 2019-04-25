import React, { Component } from 'react'

import Switch from '@material-ui/core/Switch';
import './style.css';

class Options extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checkedA: false,
      checkedB: false,
    }
  }
  render () {
    return (
      <div>
        <header className="header">
          Options
        </header>
        <div className="Options-wrapper">
          <div>
            <Switch
              checked={this.state.checkedA}
              onClick={() => this.setState({ checkedA: !this.state.checkedA })}
              value="checkedA"
            />
            <span className="Options-label">Desktop Notifications</span>
          </div>
          <div>
            <Switch
              checked={this.state.checkedB}
              onClick={() => this.setState({ checkedB: !this.state.checkedB })}
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

export default Options;
