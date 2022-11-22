import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'

function App() {

  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <MainContent />
      </div>
    </div>
  )
}

export default App
