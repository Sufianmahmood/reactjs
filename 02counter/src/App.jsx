import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 const [counter, setCounter] =  useState(15)

  //let counter = 15
  
  const addValue = () => {
    if (counter < 25) {
      console.log("value added", counter);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      
    } else {
      console.log("Counter has reached 25, cannot add further");
    }
  };
  
  const removeValue = () => {
    if (counter > 0) {
      console.log("value subtracted");
      setCounter(counter - 1);
    } else {
      console.log("Counter has reached 0, cannot subtract further");
    }
  };

 return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>
     <br /><br />
      <button
      on onClick={removeValue}
      >Remove</button>
    </>
  )
}

export default App
