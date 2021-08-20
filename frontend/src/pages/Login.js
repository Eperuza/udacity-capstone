import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import {Paper, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../constants/theme'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginLeft: '20%',
    marginRight: '20%',
    alignItems: 'center',
    padding: '5px',
    backgroundColor: theme.container,
    color: theme.buttonAndFont,
    marginLeft: '5%',
    marginRight: '5%',
    minWidth: '100vh'
  },
  button: {
    variant: 'contained',
    backgroundColor: theme.buttonAndFont,
    color: theme.font
  }
}))

export default function Login() {
  const { loginWithRedirect} = useAuth0();
  const classes = useStyles();
  return (
      <Paper className = {classes.root}>
        <p>This application requires users to authenticate themselves using Auth0.</p>
        <Button className= {classes.button} variant = 'contained' onClick={() => loginWithRedirect()}>Log In</Button>
      </Paper>
  )
}
