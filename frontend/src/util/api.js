import S3 from 'react-aws-s3';
import { getFileName } from './utils'
const axios = require('axios');
const apiUrl = process.env.REACT_APP_API_URL;


export const getPosts = async (userEmail, callback) => {
  await axios.get(`${apiUrl}/feed/?user=${userEmail}`)
  .then(res => callback(res.data))
  .catch(err => {
    console.log(userEmail)
    console.error(err)
  })
}

export const getSpecificPost = async (id, callback) => {
  await axios.get(`${apiUrl}/feed/${id}`)
  .then(res => callback(res.data[0]))
  .catch(err => {
    console.log(id)
    console.error(err)
  })
}

//create post and upload image to S3
export const createPost = (file, userEmail, formData) => {

  const config = {
    bucketName: process.env.REACT_APP_S3_NAME,
    region: process.env.REACT_APP_S3_REGION,
    accessKeyId: process.env.REACT_APP_AWS_ACCESSKEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRETKEY,
  }
  const ReactS3Client = new S3(config);
  const newFileName = formData.postTitle;
  
  ReactS3Client
    .uploadFile(file, newFileName)
    .then(data => axios.post(`${apiUrl}/feed`, {
      title: formData.postTitle, 
      description: formData.postDesc, 
      user_email: userEmail, 
      image_url: data.location
    }))
    // .then(res => console.log(res))
    .catch(err => console.error(err))
}

//create post without an image upload to S3
export const createPostNoImg = (formData, userEmail) => {
  axios.post(`${apiUrl}/feed`, {
    title: formData.postTitle, 
    description: formData.postDesc, 
    user_email: userEmail
  })
  // .then(data => console.log(data))
  .catch(err => console.error(err))
}

//delete post and remove the image from S3 if it had one.
export const deletePost = (post) => {
  axios.delete(`${apiUrl}/feed/${post.id}`)
  // .then(data => console.log(data))
  .then(()=> {
    const config = {
      bucketName: process.env.REACT_APP_S3_NAME,
      region: process.env.REACT_APP_S3_REGION,
      accessKeyId: process.env.REACT_APP_AWS_ACCESSKEY,
      secretAccessKey: process.env.REACT_APP_AWS_SECRETKEY,
    }
    const ReactS3Client = new S3(config);
    if(post.image_url){
      const fileName = getFileName(post.image_url);
      ReactS3Client.deleteFile(fileName)
      // .then(res => console.log(res))
      .catch(err => console.error(err))
    }
  })
  .catch(err => console.error(err))
}

export const editPost = (id, formData) => {
  axios.put(`${apiUrl}/feed/${id}`, {
    title: formData.postTitle, 
    description: formData.postDesc,
  })
  // .then(data => console.log(data))
  .catch(err => console.error(err))
}
