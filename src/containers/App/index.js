import React, { Component } from 'react'
import { flow } from 'lodash'
import { connect } from 'react-redux'
import Drawer from '@material-ui/core/Drawer'
import { getDeploys } from '../../store/actions'

import ConnectedPanel from '../../containers/ConnectedPanel'
import Pellet from '../../components/Pellet'

import './style.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  componentWillMount () {
    this.props.dispatch(getDeploys())
    window.addEventListener('keydown', this.handleKeyEvent.bind(this))
  }

  componentWillUnmount () {
    window.removeEventListener('keydown', this.handleKeyEvent.bind(this))
  }

  handleKeyEvent (event) {
    if (event.keyCode !== 75) {
      return
    }

    this.setState({ isOpen: !this.state.isOpen })
  }

  render () {
    const { pellet, currentDeploy } = this.props

    return (
      <main className="App">
        <Drawer
          anchor="right"
          open={this.state.isOpen}
          onClose={() => this.setState({ isOpen: false })}
        >
          <ConnectedPanel onClick={() => this.setState({ isOpen: !this.state.isOpen })} />
        </Drawer>
        {pellet &&
          <Pellet
            status={currentDeploy.status}
            onClick={() => this.setState({ isOpen: true })}
          />
        }
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    pellet: state.pellet,
    currentDeploy: state.currentDeploy,
  }
}

export default flow(connect(mapStateToProps))(App)