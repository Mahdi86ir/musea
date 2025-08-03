import React from 'react'
import Home from './Pages/Home'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}
