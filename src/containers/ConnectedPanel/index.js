import React, { Component } from 'react'
import { flow } from 'lodash'
import { connect } from 'react-redux'
import { getDeploys } from '../../store/actions'

import Panel from '../../components/Panel'

class ConnectedPanel extends Component {
  componentWillMount () {
    this.props.dispatch(getDeploys())
  }

  render () {
    const { deploys, currentDeploy } = this.props
    return <Panel
      currentDeploy={currentDeploy}
      deploys={deploys}
    />;
  }
}

const mapStateToProps = state => {
  return {
    currentDeploy: state.deploys,
    deploys: state.deploys,
  }
}

export default flow(connect(mapStateToProps))(ConnectedPanel)
