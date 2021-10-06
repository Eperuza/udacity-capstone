# Udacity Sales

## Purpose
I, Jeremy Riviere, developped this application for my Udacity AWS Cloud Developer Capstone Project. I wanted to create something from scratch
as opposed to reusing code from the other modules. 

The intent of this application is for users to post items for sale. As of now, users can only see and manage their own feed but the intent is to expand
the available microservices so users can see the feed of specific users that they choose to follow.

The frontend was developped with React. The backend was developped with NodeJs/Express. 

Both services were containerized with their respective Dockerfiles and deployed to an AWS EKS cluster.

## Current Deployed Endpoint
Accessible only via Safari due to AUTH0 requiring an HTTPS connection and my pods are not setup for HTTPS at this time. 

[Endpoint](http://a954ee6f753434a6ea28cf8e31ea396c-24868720.us-east-2.elb.amazonaws.com:3000)

### Services

- The applications's Authentication service is handled with **Auth0**.

- This application has the ability to create, read, edit, and delete posts. These posts are stored/accessed in an **AWS RDS Database**.

- Users can upload an image with their sales post which is stored in an **AWS S3 Bucket**.

- Application **API** communicates with the frontend and database.

- User interacts with the application via a **React frontend**.

### API Endpoints

The API has routes for the services it can provide. As new features are implemented, these routes can be refactored into microservices behind a reverseproxy.

#### Feed Service /feed
Since emails are unique, instead of having a user table, sales posts have a column with the user email who made the post. A query param, ```userEmail``` is used to get a specific user's feed.

example url for this get type of get request: ```http://localhost:8080/feed?user_email=myemail@mail.com```

Can return a specific post by id ```get('/:id')```

Create a new post ```post('/')```

Delete a specific post ```delete('/:id')```

Edit a specific post ```put('/:id')```

### Local Setup

#### S3 Bucket
An AWS S3 Bucket is needed for the application. Create one using the AWS Console.

#### DB Setup
Setup a Postgres DB, recommend a docker image. Update Knexfile connection settings with appropriate configuration.

#### API Setup
Once the DB is up and running and Knexfile is configured, from the project root
```
cd backend
npm install
npx knex migrate:latest
<OPTIONAL> npx knex seed:run <OPTIONAL>
npm start
```

#### Frontend Setup
```
cd frontend
npm install
npm start
```

#### ENV Variables

The application was developped locally using a .env file for frontend (REACT_APP_ENVNAME) and a .env for backend (dotenv npm package). 
They were a part of the .gitignore, so you'll either need to create and configure these files or setup these enviornment variables within the terminal starting each service or upon docker image creation.

##### Frontend ENVs
- ```REACT_APP_AWS_ACCESSKEY``` Your AWS account access key
- ```REACT_APP_AWS_SECRETKEY``` Your AWS account secret key
- ```REACT_APP_S3_NAME``` Your S3 Bucket Name
- ```REACT_APP_S3_REGION``` Your S3 Bucket Region
- ```REACT_APP_API_URL``` Your API endpoint (localhost:PORT defined or endpoint in the cloud)

##### Backend ENVs
- ```PORT``` the port at which the API will listen
- ```ENVIRONMENT``` Environment used for the knex file for the DB connection.
- ```DB_HOST``` DB endpoint
- ```DB_USER``` DB username
- ```DB_PASSWORD``` DB password
- ```DB``` DB name

### Known Issues

Deployed endpoint can only be viewed in Safari. There is an error using Auth0 on a non secure connection. Would need to setup a LoadBalancer with https.


### Future Implementations

- Follow other user feeds and see what they have for sale.
- Ability to edit the sales post image (only title and description may be edited at this time).
- Improved UI and theme.
- Loading Spinner while waiting for server responses.
