import React from 'react'
import {Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom: '3%',
    border: 'solid black 1px'
  },
  top: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

}));

export default function Post({post}) {
  const classes = useStyles();

  //refactor this as a grid
  return (
    <Paper className = {classes.root}>
      <div className = {classes.top}>
        <h2>{post.title}</h2> 
        <span>{post.date_created}</span>
      </div>
      <div className = {classes.content}>
       {post.image_url ? <img src = {post.image_url} height = '150' width = '150'/> : <p>No img available</p>}
       <p>{post.description}</p>
      </div>
    </Paper>
      
    
  )
}
