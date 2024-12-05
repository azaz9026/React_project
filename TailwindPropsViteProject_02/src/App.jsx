import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'

function App() {
  

  return (
    <>
      <h1>Tailwind Test</h1>
      <Cards inv= "Md Azaz" btnText="Payment Button"/>
      <Cards inv= "Lux" btnText="Payment Button" />
    
    </>
  )
}

export default App
