import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Chip from '@material-ui/core/Chip';
import LinearProgress from '@material-ui/core/LinearProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import './App.css';

const styles = ({
  success: {
    color: 'green',
  },
  fail: {
    color: 'red',
  },
  linearColorPrimary: {
    backgroundColor: '#b2dfdb',
  },
  linearBarColorPrimary: {
    backgroundColor: '#00695c',
  },
});

let id = 0;
function createData(name, status) {
  id += 1;
  return { id, name, status };
}

const rows = [
  createData('Alex', 'progress'),
  createData('Marc', 'done'),
  createData('Peter', 'failed'),
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
        <LinearProgress
          classes={{
            colorPrimary: classes.linearColorPrimary,
            barColorPrimary: classes.linearBarColorPrimary,
          }}
        />
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>developer</TableCell>
              <TableCell align="right">status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  <Chip
                    label={row.status}
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
