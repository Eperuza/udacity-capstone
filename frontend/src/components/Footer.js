import React from 'react'
import {Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import theme from '../constants/theme'

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: theme.container,
    marginBottom: '3vh',
    borderRadius: '5px',
    color: theme.buttonAndFont,
    textAlign: 'center',
    marginLeft: '5%',
    marginRight: '5%'
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Paper className = {classes.container}>
      <p>Jeremy Riviere. React, Node.js, Express, Docker, AWS</p>
    </Paper>
  )
}
