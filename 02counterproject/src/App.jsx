import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
    let [counter, setCounter] = useState(0);

    const addvalue = () => {if(counter<20) {setCounter(counter + 1)} else {}}
    const decvalue = () => {if(counter>0){counter --; setCounter(counter)} else {}}

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addvalue}>Add Value</button>
     <br />
     <button onClick={decvalue}>Remove Value</button>
    </>
  )
}

export default App
