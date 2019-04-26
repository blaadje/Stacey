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
          <div className="Status-wrapper">
            <Avatar
              className="Status-avatar"
              src={deploymentStatus.deployer.img}
            />
            <div className="Status-contentWrapper">
              <LinearProgress
                className="Status-loadingBar"
                variant={deploymentStatus.status !== 'ongoing' ? 'determinate' : 'indeterminate'}
                classes={{
                  colorPrimary: classes.linearColorPrimary,
                  barColorPrimary: classes.linearBarColorPrimary,
                }}
              />
              <div>
                <div className="Status-hash">
                  <span className="Status-label">HASH</span>
                  <span className="Status-field">{ deploymentStatus.hash }</span>
                </div>
                <div className="Status-commit">
                  <span className="Status-label">commit</span>
                  <span className="Status-field">{ deploymentStatus.commit }</span>
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
