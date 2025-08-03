import React from 'react'
import Home from './Pages/Home'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router'
import ArtsWork from './Pages/ArtsWork'
export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
          <Navbar/>
          <Home/>
          </>
          } />
        <Route path='/portfolio' element={<ArtsWork/>}/>
      </Routes>
      <Footer/>
    </>
    // <div>
    //   <Home/>
    // </div>
  )
}
