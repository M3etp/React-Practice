import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setnumberAllowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [password, setpassword] = useState("");
  
  // useRef Hook
  const passwordRef = useRef(null);

  const passwordgenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgihjklmnopqrstuvwxyz"

    if(numbersAllowed) str += "0123456789"
    if(charallowed) str += "!@#$%^&*()_"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
      
    }
    setpassword(pass);

  },[length, numbersAllowed, charallowed , setpassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordgenerator()
  },[length, numbersAllowed, charallowed, passwordgenerator])

  return (
    <>
      <div className=' bg-gray-700 w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500'>
        <h1 className=' text-white'>Password Generator</h1>
        <div className='flex w-full shadow-lg rounded-lg overflow-hidden my-5' >
          <input type="text"
          placeholder='Password'
          value={password}
          readOnly
          className=' w-full outline-none px-4 py-2'
          ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className=' inline bg-slate-500'>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 mb-7'>
            <input type="range" 
            min={6} 
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>           
            </div>
            <div className='flex items-center gap-x-1 mb-7'>
              <input type='checkbox'
              defaultChecked={numbersAllowed}
              id='numberInput'
              onChange={()=> {
                setnumberAllowed((prev) => !prev)
              }} />
              <label>Numbers</label>
            </div>
            <div className='flex items-center gap-x-1 mb-7'>
              <input type='checkbox'
              defaultChecked={charallowed}
              id='charInput'
              onChange={()=> {
                setcharallowed((prev) => !prev)
              }} />
              <label>Character</label>
            </div>
            </div>  
      </div>
      
    </>
  )
}

export default App
