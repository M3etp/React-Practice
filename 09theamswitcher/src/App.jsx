
import { useEffect, useState } from 'react'
import './App.css'
import { TheamProvidor } from './context/theam'
import Card from './Components/Card'
import Button from './Components/Button'

function App() {
  const [theamMode, setTheamMode] = useState('light')

  const lightTheam = ()=>{
    setTheamMode('light')
  }

  const darkTheam = ()=>{
    setTheamMode('dark')
  }
  // Actual change in theam

  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark')

    document.querySelector('html').classList.add(theamMode)
  },[theamMode])

  return (
    <TheamProvidor value={{theamMode, lightTheam, darkTheam}}>
      
      <div className="flex flex-wrap min-h-screen items-center">
                      <div className="w-full">
                          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                              {/* Theam btn */}
                              <Button />
                          </div>

                          <div className="w-full max-w-sm mx-auto">
                            {/* card */}
                            <Card />
                          </div>
                      </div>
                  </div>

    </TheamProvidor>
  )
}

export default App
