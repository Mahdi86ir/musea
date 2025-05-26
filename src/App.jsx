import React from 'react'
import Header from './Components/Header'
import './App.css'
import National from './Components/National'
import WorkOfArt from './Components/WorkOfArt'
import Quoate from './Components/Quoate'
import OnGrow from './Components/OnGrow'
import Subscribe from './Components/Subscribe'
import Curated from './Components/Curated'
import BlogPosts from './Components/BlogPosts'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
export default function App() {
  return (
    <main>
      <Header/>
      <National/>
      <WorkOfArt/>
      <Quoate/>
      <OnGrow/>
      <Subscribe/>
      <Curated/>
      <BlogPosts/>
      {/* <Contact/>
      <Footer/> */}
    </main>
  )
}
