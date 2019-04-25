import React, { Component } from 'react'

import Drawer from '@material-ui/core/Drawer';
import ConnectedPanel from '../../containers/ConnectedPanel'
import Pellet from '../../components/Pellet'

import './style.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  render () {
    return (
      <main className="App">
        <Drawer anchor="right" open={this.state.isOpen} onClose={() => this.setState({ isOpen: false })}>
          <ConnectedPanel onClick={() => this.setState({ isOpen: !this.isOpen })} />
        </Drawer>
        <Pellet
          status='done'
          onClick={() => this.setState({ isOpen: true })}
        />
      </main>
    );
  }
}

export default App;
