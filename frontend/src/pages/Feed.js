import React from 'react'
import { useState, useEffect } from 'react';
import Post from '../components/Post'
import { makeStyles } from '@material-ui/core'
import { getPosts } from '../util/api'

const useStyles = makeStyles(() => ({
  feed: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: '5%',
    marginRight: '5%',
    textAlign: 'center',
    alignItems: 'center',
    color: '#05386B'
  }
}));

export default function Feed({userEmail}) {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const loadFeed = async (userEmail, setPosts) => {
    await getPosts(userEmail, setPosts)
    setLoading(false)
  }

  useEffect(() => {
    loadFeed(userEmail, setPosts)
  }, [userEmail]);

  const classes = useStyles();

  return (
    <div className = {classes.feed}>
      <h1>My Feed</h1>
      {loading 
      //implement a load spinner eventually
      ? <p>Loading Feed...</p>
      :
        //with the post objects retrieved, render the post components, if empty, indicate no posts
        (posts && posts.length > 0) ?
        posts.map( post => {
          return <Post key = {post.id} post = {post} setPosts = {setPosts} posts = {posts}/>
        })
        : <p>You do not have any posts in your feed</p>
    }
    </div>
  )
}
