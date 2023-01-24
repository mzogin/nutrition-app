import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import pages
import { Tracking } from './pages/Tracking'
import { SearchFood } from './pages/SearchFood'
import { FoodDiary } from './pages/FoodDiary'
import { Error } from './pages/Error'
// import components
import { Nav } from './components/Nav'
import { Header } from './components/Header'

function App() {
  return (
    // <Router>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Tracking />} />
        <Route path='search' element={<SearchFood />} />
        <Route path='foods' element={<FoodDiary />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Nav />
    </BrowserRouter>
    // </Router>
  )
}

export default App
