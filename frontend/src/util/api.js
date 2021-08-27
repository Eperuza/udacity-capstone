import S3 from 'react-aws-s3';
const axios = require('axios');
const apiUrl = process.env.REACT_APP_API_URL;

export const getPosts = async (userEmail, callback) => {
  await axios.get(`${apiUrl}/?user=${userEmail}`)
  .then(res => callback(res.data))
  .catch(err => {
    console.log(userEmail)
    console.log(err.toJSON())
  })

}

export const createPost = (file, userEmail, formData) => {

  const config = {
    bucketName: 'udacity-sales',
    region: 'us-east-2',
    accessKeyId: process.env.REACT_APP_AWS_ACCESSKEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRETKEY,
  }
  const ReactS3Client = new S3(config);
  const newFileName = formData.postTitle;
  
  ReactS3Client
    .uploadFile(file, newFileName)
    .then(data => console.log({
      title: formData.postTitle, 
      description: formData.postDesc, 
      user_email: userEmail, 
      image_url: data.location
    }))
    .catch(err => console.error(err))
}
