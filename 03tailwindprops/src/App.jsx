import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Shopsugg from './Shopsugg' 

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-2xl pl-8 pr-8 mb-6'>Tailwind Test</h1>
   
    <Shopsugg prp="Customer Also Brought this" prText="JJK hoodie"/>
    <Shopsugg prp="Similar Products"/>
    

    </>
  )
}

export default App
