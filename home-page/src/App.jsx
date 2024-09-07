import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import Projects from './pages/portfolio/Projects'

const App = () => {
  return ( 
  <BrowserRouter basename="/" >
    <Routes>
      <Route path='/personal-site-home' element={<HomePage />}/>
      <Route path='/personal-site-home/Projects' element={<Projects />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App