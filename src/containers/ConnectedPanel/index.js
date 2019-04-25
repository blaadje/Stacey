import React, { Component } from 'react'
import { flow } from 'lodash'
import { connect } from 'react-redux'

import Panel from '../../components/Panel'

class ConnectedPanel extends Component {
  render () {
    const { deploys, currentDeploy } = this.props

    return (
      (deploys.length && currentDeploy) && <Panel
        currentDeploy={currentDeploy}
        deploys={deploys}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    currentDeploy: state.currentDeploy,
    deploys: state.deploys,
  }
}

export default flow(connect(mapStateToProps))(ConnectedPanel)
