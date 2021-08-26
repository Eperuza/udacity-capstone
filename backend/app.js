const express = require('express');
const app = express();
const router = express.Router();
const feed = require('./routes/feed')

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Udacity Sales API');
})

app.use('/feed', feed);

module.exports = app;