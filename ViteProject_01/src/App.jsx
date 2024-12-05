import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //let counter = 8

  let [counter , setCounter] = useState(0)

  const AddValue = ()=>{
    if (counter >= 20) {
      return
    }
    setCounter(counter + 1)
    console.log("value removed", counter);
  }


  const RemoveValue = ()=>{
    if (counter <= 0) {
      return
    }
    setCounter(counter - 1)
    console.log("value removed", counter);
  }
 

  return (
    <>
     <h1>Chia aur react</h1>
     <h2>Counter Value : {counter}</h2>

     <button onClick={AddValue} >Add Value</button>
     <button onClick={RemoveValue} >Remove Value</button>
    </>
  )
}

export default App
