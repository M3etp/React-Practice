import { useState } from 'react'
import Meet from './Meet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Meet Parmar | React 1st page | Hello World </h1>
      <Meet />

    </>
  )
}

export default App
