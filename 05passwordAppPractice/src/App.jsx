import { useState , useCallback, useEffect, useRef } from 'react'


function App() {
  const [password, setPassword] = useState("")
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [length, setLength] = useState(8)

  const passRef = useRef(null)

  const generatePassword = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrtuvwxyz"
    let num = "1234567890"
    let char ="!@#$%^&*-_"

    if(numAllowed){str += num}
    if(charAllowed){str += char}

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)

  },[length,numAllowed,charAllowed,setPassword])

  useEffect(()=>{generatePassword()},[length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <>
      <div className=' bg-slate-500 flex items-center mx-auto max-w-xl flex-col gap-5 mt-24 rounded-md'>
        <h1 className=' text-white text-lg text-yellow-100 shadow-sm mt-5'>Password Generator</h1>
        <div className=' w-full'>
          <input type='text'
          value={password}
          placeholder='Password'
          className=' w-5/6 ml-3 px-4 py-2 mb-4 shadow-md rounded-lg rounded-r-none'
          readOnly
          ref={passRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className=' bg-green-400 text-black px-4 py-2 mb-4 rounded-r-lg'>Copy</button>
        </div>
        <div className='w-full ml-5 mb-5 flex gap-4'>
          <input type="range"
          max={100} 
          min={6}
          value={length}
          className=' cursor-pointer'
          
          onChange={(e)=>{setLength(e.target.value)}}


          />
          <label className=' text-blue-300 '>Length: {length}</label>

          <div className=' inline-block ml-4  text-blue-300'>
            <input type="checkbox"
            defaultChecked={numAllowed}
            onChange={()=>setNumAllowed((prev) => !prev)} />
            <label className='ml-2'>Numbers</label>
          </div>

          <div className=' inline-block ml-4  text-blue-300'>
            <input type="checkbox" 
            defaultChecked={charAllowed}
             onChange={()=>setCharAllowed((prev) => !prev)} />
            <label className='ml-2'>Checkbox</label>
          </div>
        
        </div>
      </div>
    </>
  )
}

export default App
