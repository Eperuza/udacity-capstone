import React from 'react'
import { useState } from 'react'
import {Paper, Grid, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import theme from '../constants/theme'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from 'react-router-dom';
import { deletePost } from '../util/api'
import {convertDate} from '../util/utils'

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: theme.container,
    marginBottom: '3vh',
    borderRadius: '5px',
    marginLeft: '10px',
    marginRight: '10px',
    maxWidth: '100vh',
    border: 'black solid 1px'
  },
  description: {
    textAlign: 'center',
    backgroundColor: theme.content,
    color: theme.buttonAndFont,
    minHeight: '5vh'
  },
  image: {
    maxHeight: '90vh',
    textAlign: 'center',
    backgroundColor: theme.content
  },
  toolbar: {
    textAlign: 'center',
    color: theme.buttonAndFont,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  title: {
    textAlign: 'center',
    backgroundColor: theme.content,
    color: theme.buttonAndFont,
    minHeight: '5vh',
  },
  button: {
    backgroundColor: theme.buttonAndFont,
    color: theme.font,
    margin: '2vh'
  }
}));

export default function Post({post, setPosts, posts}) {
  const classes = useStyles();
  let history = useHistory();

  const delPost = async (post) => {
    await deletePost(post);
    const postRemove = posts.find(item => item.id === post.id)
    setPosts(posts.filter(post => post.id !== postRemove.id))
    console.log(post)
  }

  //dialog state management
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = (post) => {
    handleClose();
    delPost(post);

  }
  //end dialog state management

  return (
    <Grid container spacing = {2} className = {classes.container}>
      
      <Grid item xs = {12}>
        <Paper className = {classes.title}>
          <h1>{post.title}</h1>
        </Paper>
      </Grid>

      <Grid item xs = {12}>
        <Paper className = {classes.description}>
          <h3>Posted on: {convertDate(post.date)}</h3>
        </Paper>
      </Grid>

      <Grid item xs = {4}>
        <Paper className = {classes.image}>
          {post.image_url ? <img src = {post.image_url} width = '75%' height = '75%'/> : <p>No img available</p>}
        </Paper>
      </Grid>

      <Grid item xs = {8}>
        <Paper className = {classes.description}>
          {post.description}
        </Paper>
      </Grid>

      <Grid item xs = {12}>
        <div className = {classes.toolbar}>
          <Button className = {classes.button} onClick = {() => history.push(`/editPost/${post.id}`)}><EditIcon/>Edit</Button>
          {/* <Button className = {classes.button} onClick = { () => delPost(post)}><DeleteIcon/>Delete</Button> */}
          <Button className = {classes.button} onClick = { () => handleClickOpen()}><DeleteIcon/>Delete</Button>
        </div>
      </Grid>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete confirmation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action is irreversible and your sales post will be deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()}>No</Button>
          <Button onClick={() => handleDelete(post)} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      
    </Grid>
    
    
      
    
  )
}
