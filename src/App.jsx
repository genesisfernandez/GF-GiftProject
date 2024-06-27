import React from 'react'
import Home from "./pages/Home/Home"
import Album from './pages/Album/Album'
import Message from './pages/Message/Message'
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/album" element={<Album/>}></Route>
        <Route path="/message" element={<Message/>}></Route>
    </Routes>
      
    </>
  )
}

export default App