import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Quickdel from './pages/Quickdel'
import Order from './pages/Order'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App=() => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Quickdel" element={<Quickdel />} />
        <Route path="/Order" element={<Order />} />

  
      </Routes>
    </Router>
  )
}

export default App
