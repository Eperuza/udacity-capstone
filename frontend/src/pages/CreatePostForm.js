import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {TextField, Button, Input, makeStyles, IconButton, Typography} from '@material-ui/core'
import {PhotoCamera} from '@material-ui/icons'
import theme from '../constants/theme'
import { uploadS3 } from '../util/aws'

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
    
  }
}));

export default function CreatePostForm({userEmail}) {
  const {register, control, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = (data) => {
    data.postFile.length !== 0 ? uploadS3(data.postFile[0], userEmail, data) 
    : console.log('send post straight to api')
  }
  const classes = useStyles();

  return (
    <form onSubmit = {handleSubmit(onSubmit)} className = {classes.form}>
      
      {/* // Title Input*/}
      <Controller
        name = "postTitle"
        control = {control}
        defaultValue = ""
        className = {classes.input}
        rules = {{required: true}}
        render = {({field}) => <TextField {...field} id = "postTitle" label= "Post Title"/>}
      />

      {/*Description Input*/}
      <Controller
        name = "postDesc"
        control = {control}
        defaultValue = ""
        className = {classes.input}
        rules = {{required: true}}
        render = {({field}) => <TextField {...field} id = "postDesc" label = "Post Description" minRows = {3} maxRows = {4} multiline = {true}/>}
      />
      <input {...register('postFile')} type = "file" name = "postFile" accept = "image/*"/>   

      {/*Submit form*/}
      <Button className = {classes.button} type = "submit">Publish Post</Button>
    </form>
  )
}

//building an object that looks like this:
/*
  post = {
    id: 1, (made by the DB, auto increments)
    title: 'Example title', (form input),
    description: 'lorem55' (form input)
    image_url: some url to the s3 object (obtained on the server, client handles file upload to server)
    user: userEmail from auth0,
    date_created: todays date as timestamp (we'll let db insert this by default)
  }
*/
//send object to server -> create db entry -> succesful response -> go back to user feed



      
      