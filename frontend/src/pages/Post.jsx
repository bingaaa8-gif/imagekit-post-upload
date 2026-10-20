
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Post.css'

const Post = () => {

  const [post, setPost] = useState([])

  useEffect(() => {

    axios.get("http://localhost:3000/post")
      .then((res) => {
        console.log(res.data)
        setPost(res.data.postt)
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])

  return (
    <div className="post-container">

      <h1>All Posts</h1>

      <Link to="/">Create New Post</Link>

      <div className="post-list">
        {post.map((item) => {
          return (
            <div className="post-card" key={item._id}>
              <img src={item.image} alt={item.caption} />
              <p>{item.caption}</p>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Post
