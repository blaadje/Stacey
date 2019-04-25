import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import './App.css';

const styles = ({
  linearColorPrimary: {
    backgroundColor: '#b2dfdb',
  },
  linearBarColorPrimary: {
    backgroundColor: '#00695c',
  },
});

let id = 0;
function createData(commit, status) {
  id += 1;
  return { id, commit, status };
}

const rows = [
  createData('#12345', 'progress'),
  createData('#12343', 'done'),
  createData('#3232', 'failed'),
];

function App(props) {
  const { classes } = props;

  return (
    <div className="App">
      <header className="App-header">
        header
      </header>
      <main>
        <section>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>commit</TableCell>
              <TableCell align="right">status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.commit}
                </TableCell>
                <TableCell align="right">
                  <LinearProgress
                    classes={{
                      colorPrimary: classes.linearColorPrimary,
                      barColorPrimary: classes.linearBarColorPrimary,
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </section>
      </main>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
