import React from 'react'
import {Paper, Grid, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import theme from '../constants/theme'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const contentWidth = '60vh';
const contentHeight = '90vh';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: theme.container,
    marginBottom: '3vh',
    borderRadius: '5px'
  },
  description: {
    textAlign: 'center',
    backgroundColor: theme.content,
    color: theme.buttonAndFont,
    minHeight: '5vh'
  },
  image: {
    maxHeight: contentHeight,
    textAlign: 'center',
    backgroundColor: theme.content
  },
  toolbar: {
    textAlign: 'center',
    backgroundColor: theme.content,
    color: theme.buttonAndFont,
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    backgroundColor: theme.content,
    color: theme.buttonAndFont,
    minHeight: '5vh'
  }
}));

export default function Post({post}) {
  const classes = useStyles();

  return (
    
    <Grid container spacing = {2} className = {classes.container}>
      
      <Grid item xs = {12}>
        <Paper className = {classes.title}>
          <h1>{post.title}</h1>
        </Paper>
      </Grid>

      <Grid item xs = {12}>
        <Paper className = {classes.description}>
          <h3>Posted on: {post.date_created}</h3>
        </Paper>
      </Grid>

      <Grid item xs = {4}>
        <Paper className = {classes.image}>
          {post.image_url ? <img src = {post.image_url} width = '100%' height = '100%'/> : <p>No img available</p>}
        </Paper>
      </Grid>

      <Grid item xs = {8}>
        <Paper className = {classes.description}>
          {post.description}
        </Paper>
      </Grid>

      <Grid item xs = {12}>
        <Paper className = {classes.toolbar}>
          <Button><EditIcon/>Edit</Button>
          <Button><DeleteIcon/>Delete</Button>
        </Paper>
      </Grid>
      
    </Grid>
    
      
    
  )
}
