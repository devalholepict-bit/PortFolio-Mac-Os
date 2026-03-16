import { useState } from 'react'
import  "./App.scss"
import Dock from './components/Dock'
import Github from './components/Windows/Github'
import Nav from './components/Windows/Nav'
import Note from './components/Windows/Note'
import Resume from './components/Windows/Resume'
import Spotify from './components/Windows/Spotify'


function App() {

  return (
  <main>
    <Dock />
  <Nav />

   <Github /> 
      <Note/>
        <Resume />
        <Spotify />
  </main>
  )
}

export default App
