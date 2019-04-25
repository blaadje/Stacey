import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { getDarkenColor, getColorFromStatus } from '../../utils'

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
function createData(name, date, status) {
  id += 1;
  return { id, name, date, status };
}

const rows = [
  createData('Marc', '13, April 2018 - 10:31', 'done'),
  createData('Peter', '11, April 2018 - 15:02', 'failed'),
];

function History(props) {
  const { classes } = props;

  return (
    <section>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell colSpan="2">developer</TableCell>
            <TableCell>date</TableCell>
            <TableCell align="right">status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
          <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.avatar}
              </TableCell>
              <TableCell align="right">
                {row.name}
              </TableCell>
              <TableCell align="right">
                {row.date}
              </TableCell>
              <TableCell align="right">
                <Chip
                  className="Chip"
                  label={row.status}
                  style={{
                    background: getColorFromStatus(row.status),
                    color: getDarkenColor(getColorFromStatus(row.status))
                  }}
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
