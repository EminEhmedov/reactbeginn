import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import React from 'react'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Navbar from './Navbar'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Footer from './Footer'
import Product from './Product'
import Detail from './Detail'

import Search from './Search'
import Sign from './Sign'
import './common.css'
function App() {
  return (
    <div >
      <Router>
       
       <Navbar/>
        <Routes >
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/detail/:name' element={<Detail/>} />


        <Route path='/search' element={<Search/>}/>
        <Route path='/sign' element={<Sign/>}/>
        </Routes>
        <Footer/>
      
      </Router>
    </div>
  )
}

export default App