
import React from 'react'
import './Create.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {
const navigate = useNavigate()
  const handlesubmit = async (e) => {
    e.preventDefault()

    const formdata = new FormData(e.target)

    try {
      const res = await axios.post(
        "http://localhost:3000/create",
        formdata
      )
navigate('/posts')
    

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="create-container">

      <form className="create-form" onSubmit={handlesubmit}>

        <h1>Create Post</h1>

        <Link to="/posts">View All Posts</Link>

        <input
          type="file"
          name="image"
          className="image-input"
          accept="image/*"
        />

        <input
          type="text"
          name="caption"
          className="caption-input"
          placeholder="Enter Caption"
        />

        <button className="submit-btn" type="submit">
          Submit Form
        </button>

      </form>

    </div>
  )
}

export default Create
