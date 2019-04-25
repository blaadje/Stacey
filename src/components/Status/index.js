import React, { Component } from 'react'

import { getColorFromStatus, getDarkenColor } from '../../utils'
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import './style.css';

class Status extends Component {
  render () {
    const { deploymentStatus } = this.props;

    const styles = ({
      linearColorPrimary: {
        backgroundColor: getColorFromStatus(deploymentStatus.status)
      },
      linearBarColorPrimary: {
        backgroundColor: getDarkenColor(getColorFromStatus(deploymentStatus.status), -20)
      },
    });

    const component = props => {
      const { classes } = props;
      return (
        <section>
          <header className="header">current deployment status</header>
          <div className="wrapper">
            <Avatar
              className="avatar"
              src={deploymentStatus.deployer.img}
            />
            <div className="contentWrapper">
              <LinearProgress
                className="loadingBar"
                variant={deploymentStatus.status !== 'ongoing' ? 'determinate' : 'indeterminate'}
                classes={{
                  colorPrimary: classes.linearColorPrimary,
                  barColorPrimary: classes.linearBarColorPrimary,
                }}
              />
              <div>
                <div className="hash">
                  <span className="label">HASH</span>
                  <span className="field">{ deploymentStatus.hash }</span>
                </div>
                <div>
                  <span className="label">commit</span>
                  <span className="field">{ deploymentStatus.commit }</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }

    const Styled = withStyles(styles)(component)

    return <Styled />
  }
}

export default Status;
