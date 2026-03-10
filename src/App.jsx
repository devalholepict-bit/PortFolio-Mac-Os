import { useState } from 'react'
import  "./App.scss"
import Dock from './components/Dock'
import Github from './components/Windows/Github'
import Nav from './components/Windows/Nav'



function App() {

  return (
  <main>
    <Dock />
  <Nav />

   <Github /> 
  </main>
  )
}

export default App
