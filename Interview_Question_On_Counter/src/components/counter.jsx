import React, { useState } from 'react'

function counter() {
  let count = 0 
  let [counter , setCounter] = useState(count)

  let addValue = () => {
    if(counter >= 20){
      return
    }
    setCounter(pveCounter => pveCounter + 1)
    setCounter(pveCounter => pveCounter + 1)
    setCounter(pveCounter => pveCounter + 1)
    setCounter(pveCounter => pveCounter + 1)
  }

  let removeValue = () => {
    if(counter <= 0){
      return
    }
    setCounter(pveCounter => pveCounter - 1)
    setCounter(pveCounter => pveCounter - 1)
    setCounter(pveCounter => pveCounter - 1)
    setCounter(pveCounter => pveCounter - 1)
  }

  return (
    <>
        <h1>Interview Question</h1>
        <h2>Counter Value : {counter}</h2>
        <button onClick={addValue} >Add Value</button> 
        <br />
        <button  onClick={removeValue} >Remove Value</button>

        
    </>
  )
}

export default counter