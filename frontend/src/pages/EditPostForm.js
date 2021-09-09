import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { getSpecificPost } from '../util/api'
import { useHistory } from 'react-router-dom';
import theme from '../constants/theme'
import {TextField, Button, Input, makeStyles, IconButton, Typography} from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { editPost } from '../util/api'

const useStyles = makeStyles(() => ({
  form: {
    backgroundColor: theme.container,
    marginBottom: '3vh',
    borderRadius: '5px',
    color: theme.buttonAndFont,
    marginLeft: '5%',
    marginRight: '5%',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '65vh',
    justifyContent: 'space-around',
  },
  input: {
  },
  button: {
    variant: 'contained',
    backgroundColor: theme.buttonAndFont,
    color: theme.font,
    maxWidth: '50vh',
    marginLeft: 'auto',
    marginRight: 'auto'
    
  },
  bar: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}));

export default function EditPostForm({match}) {
  const {register, control, handleSubmit, formState: {errors}} = useForm();

  const [post, setPost] = useState(null);

  useEffect(() => {
    getSpecificPost(match.params.id, setPost)
  })

  let history = useHistory();

  const classes = useStyles();

  const updatePost = async (data) => {
    await editPost(match.params.id, data);
    history.push('/');
  }

  const onSubmit = (data) => {
    updatePost(data);
  }

  return (
    <div>
      {
        post 
        ? 
        <form onSubmit = {handleSubmit(onSubmit)} className = {classes.form}>

          <p>Editing the post image is not a feature of this application at this time.</p>

        {/* // Title Input*/}
          <Controller
            name = "postTitle"
            control = {control}
            defaultValue = {post.title}
            className = {classes.input}
            rules = {{required: true}}
            render = {({field}) => <TextField {...field} id = "postTitle" label= "Post Title"/>}
          />
    
        {/*Description Input*/}
          <Controller
            name = "postDesc"
            control = {control}
            defaultValue = {post.description}
            className = {classes.input}
            rules = {{required: true}}
            render = {({field}) => <TextField {...field} id = "postDesc" label = "Post Description" minRows = {3} maxRows = {4} multiline = {true}/>}
          />
    
        {/*Submit form*/}
          <div className = {classes.bar}>
            <Button className = {classes.button} type = "submit">Edit Post</Button>
            <Button className = {classes.button} onClick ={() => history.push("/")}>Cancel</Button>
          </div>
        
      </form>
        : <p>Loading...</p>
      }
    </div>
  )
}
