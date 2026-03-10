import { useState } from 'react'
import  "./App.scss"
import Dock from './components/Dock'
import Github from './components/Windows/Github'



function App() {

  return (
  <main>
    <Dock />
  

   <Github /> 
  </main>
  )
}

export default App
