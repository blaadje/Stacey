import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import './style.css';

const styles = ({
  success: {
    color: 'green',
  },
  progress: {
    color: 'yellow',
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

function History(props) {
  const { classes } = props;

  return (
    <section>
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
  );
}

export default withStyles(styles)(History);
