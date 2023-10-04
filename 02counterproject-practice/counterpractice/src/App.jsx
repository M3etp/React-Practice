import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  const add = ()=>{setCounter(counter+1)};
  const remove = ()=>{setCounter(counter-1)};
  
  return (
    <>
     <h1>CHAI AUR REACT</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={add}>Add</button>
     <button onClick={remove}>Remove</button>
    </>
  )
}

export default App
