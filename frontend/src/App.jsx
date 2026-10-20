
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Create from './pages/Create'
import Post from './pages/Post'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Create />} />
      <Route path='/posts' element={<Post />} />
    </Routes>
  )
}

export default App
