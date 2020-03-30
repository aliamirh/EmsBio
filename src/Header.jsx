import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  headerStyle: {
    color: 'white',
    textAlign: 'center'
  }
});

function Header() {
  const classes = useStyles();
  return (
    <AppBar className={classes.headerStyle} position='static'>
      <Typography variant='h3'>Hello</Typography>
    </AppBar>
  );
}

export default Header;
