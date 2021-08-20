import React from 'react'
import {Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import theme from '../constants/theme'
import { useAuth0 } from '@auth0/auth0-react';
import {Button} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: theme.container,
    marginBottom: '3vh',
    borderRadius: '5px',
    color: theme.buttonAndFont,
    textAlign: 'center',
    marginLeft: '5%',
    marginRight: '5%',
  },
  toolbar: {
    textAlign: 'center',
    backgroundColor: theme.content,
    color: theme.buttonAndFont,
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    backgroundColor: theme.buttonAndFont,
    color: theme.font,
    margin: '2vh',
    maxWidth: '20vh'
  }
}));

export default function Header() {
  const classes = useStyles();
  const {isAuthenticated, logout} = useAuth0();
  return (
    <Paper className = {classes.container}>
      {isAuthenticated 
      ? 
      (
        <div className = {classes.toolbar}>
          <h1>Udacity Community Sales</h1>
          <Button className = {classes.button} onClick={() => logout({ returnTo: window.location.origin })}><ExitToAppIcon/>Log Out</Button>
        </div>
      )
      : <h1>Udacity Community Sales</h1>
      }
      
    </Paper>
  )
}
