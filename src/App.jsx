import { useState } from 'react'
import  "./App.scss"
import Dock from './components/Dock'

import MacWindow from './components/Windows/MacWinodw'

function App() {

  return (
  <main>
    <Dock />
  

    <MacWindow/>
  </main>
  )
}

export default App
