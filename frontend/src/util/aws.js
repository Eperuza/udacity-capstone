import S3 from 'react-aws-s3';

export const uploadS3 = (fileName, userEmail, formData) => {

  const config = {
    bucketName: 'udacity-sales',
    region: 'us-east-2',
    accessKeyId: process.env.REACT_APP_AWS_ACCESSKEY,
    secretAccessKey: process.env.REACT_APP_AWS_SECRETKEY,
  }
  const ReactS3Client = new S3(config);
  ReactS3Client
    .uploadFile(fileName)
    .then(data => console.log({
      title: formData.postTitle, 
      description: formData.postDesc, 
      user: userEmail, 
      image_url: data.location
    }))
    .catch(err => console.error(err))
}
