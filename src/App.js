import './App.css'
import React from 'react'

import Navbar from "./components/Navbar"
import Meme from "./components/Meme"
import troll_face from "./images/troll_face.png"

export default function App(){
  return(
    <div>
      < Navbar  img ={troll_face}/>
    <Meme />
    </div>
  )
}