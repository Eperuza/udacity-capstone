import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { getSpecificPost } from '../util/api'

export default function EditPostForm({match}) {
  const [post, setPost] = useState(null);
  useEffect(() => {
    getSpecificPost(match.params.id, setPost)
  })

  return (
    <div>
      {
        post 
        ? <p>{post.title} <br/>{post.description}</p>
        : <p>Loading...</p>
      }
    </div>
  )
}
