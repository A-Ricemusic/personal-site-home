import React from 'react'
import {BrowserRouter,Routes, Route, Redirect} from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import PortfolioGameDevelopment from './pages/portfoliogamedevelopment/PortfolioGameDevelopment'

const App = () => {
  return ( 
  <BrowserRouter basename="/" >
  <Routes>
      <Route path='' element={<HomePage />}/>
      <Route path='GameDevelopementProjects' element={<PortfolioGameDevelopment />}/>
      </Routes>
  </BrowserRouter>
  )
}

export default App