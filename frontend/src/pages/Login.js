import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { mergeClasses } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginLeft: '33%',
    marginRight: '33%',
    alignItems: 'center'
  }
}))

export default function Login() {
  const { loginWithRedirect} = useAuth0();
  const classes = useStyles();
  return (
      <Paper className = {classes.root}>
        <h1>Udacity Sales Feed</h1>
        <p>This website requires users to authenticate themselves with Auth0</p>
        <button onClick={() => loginWithRedirect()}>Log In</button>
        
      </Paper>
  )
}
