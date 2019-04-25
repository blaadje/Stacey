import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import './style.css';

const styles = ({
  linearColorPrimary: {
    backgroundColor: '#b2dfdb',
  },
  linearBarColorPrimary: {
    backgroundColor: '#00695c',
  },
});

function Status(props) {
  const { classes } = props;

  return (
    <section>
      <LinearProgress
        classes={{
          colorPrimary: classes.linearColorPrimary,
          barColorPrimary: classes.linearBarColorPrimary,
        }}
      />
    </section>
  );
}

export default withStyles(styles)(Status);
