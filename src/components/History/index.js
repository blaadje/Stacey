import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Table from '@material-ui/core/Table';
import Link from '@material-ui/core/Link';
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

const CustomTableHead = withStyles({
  root: {
    color: '#93939f',
    fontWeight: 'bold',
  },
})(TableHead);

const CustomTableCell = withStyles({
  root: {
    color: '#93939f',
  },
})(TableCell);

const CustomLink = withStyles({
  root: {
    marginTop: '1.5rem',
    color: '#6abdd7',
    display: 'block',
    textAlign: 'center',
  },
})(Link);

function History(props) {
  const { classes, deploys } = props;

  return (
    <section>
      <Table className={classes.table}>
        <CustomTableHead className="header History-head">
          <TableRow>
            <TableCell colSpan="2">developer</TableCell>
            <TableCell>date</TableCell>
            <TableCell align="right">status</TableCell>
          </TableRow>
        </CustomTableHead>
        <TableBody>
          {deploys.map(deploy => (
          <TableRow key={deploy.hash}>
            <CustomTableCell>
              <Avatar
                className="History--avatar"
                src={deploy.deployer.img}
              />
            </CustomTableCell>
            <CustomTableCell align="left">
              {deploy.deployer.name}
            </CustomTableCell>
            <CustomTableCell align="left">
              <strong>
                {deploy.date}
              </strong>
            </CustomTableCell>
            <CustomTableCell align="right">
              <Chip
                className="History-Chip"
                label={deploy.status}
                style={{
                  background: getColorFromStatus(deploy.status),
                  color: getDarkenColor(getColorFromStatus(deploy.status))
                }}
              />
            </CustomTableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
      <CustomLink href='/foo'>
        See more
      </CustomLink>
    </section>
  );
}

export default withStyles(styles)(History);
