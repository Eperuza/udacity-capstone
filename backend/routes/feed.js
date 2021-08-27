const express = require('express');
const router = express.Router();
require('dotenv').config();
const knex = require('knex')(require('../knexfile.js')[process.env.ENVIRONMENT]);

//return all posts that belong to a user
router.get('/', (req, res) => {
  const userEmail = req.body.user
  knex.select('*')
  .from('posts')
  .where({user_email: userEmail})
  .then(data => res.status(200).json(data))
  .catch(err => res.status(400).send(err))
});

//return a post by id
router.get('/:id', (req, res) => {
  knex.select('*')
  .from('posts')
  .where({id: parseInt(req.params.id)})
  .then(data => res.status(200).json(data))
  .catch(err => res.status(400).send(err))
});

//creates a new post
router.post('/', (req, res)=> {
  knex('posts')
  .insert(
    {
    title: req.body.title,
    description: req.body.title,
    user_email: req.body.user,
    image_url: req.body.image_url
    }
  )
  .then(data => res.status(201).send(req.body))
  .catch(err => res.status(400).send(err))
});

//deletes a post
router.delete('/:id', (req, res) => {
  knex('posts')
  .where({id: parseInt(req.params.id)})
  .del()
  .then(data => res.status(201).send('Post deleted'))
  .catch(err => res.status(400).send(err))
})

//edit a post
//TO DO


module.exports = router;