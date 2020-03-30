import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'red',
    color: props => props.color
  }
});

function Header() {
  return (
    <AppBar position='static'>
      <Typography variant='h3'>Hello</Typography>
    </AppBar>
  );
}

export default Header;
