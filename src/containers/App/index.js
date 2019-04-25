import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Drawer from '@material-ui/core/Drawer';

import ConnectedPanel from '../../containers/ConnectedPanel'
import Pellet from '../../components/Pellet'
import store from '../../store'

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
      <Provider store={store}>
        <main className="App">
          <Drawer anchor="right" open={this.state.isOpen} onClose={() => this.setState({ isOpen: false })}>
            <ConnectedPanel onClick={() => this.setState({ isOpen: !this.isOpen })} />
          </Drawer>
          <Pellet
            status='done'
            onClick={() => this.setState({ isOpen: true })}
          />
        </main>
      </Provider>
    );
  }
}

export default App;
