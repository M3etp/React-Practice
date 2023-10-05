import { useState } from "react"

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
     <div className=" w-screen h-screen bg-black " style={{backgroundColor: color}}>
     
      <div className="fixed bg-white p-5 pl-4 pr-4 flex flex-wrap justify-center bottom-7 rounded-2xl gap-5 w-fit mx-80 border-black border-solid border-4" >
        <button className=" bg-red-600 text-white rounded-full border-black"
        onClick={()=>{setColor("red")}}>Red</button>
        <button className=" bg-blue-600 text-white rounded-full border-black"
        onClick={()=>{setColor("blue")}}>Blue</button>
        <button className=" bg-yellow-400 text-black rounded-full border-black" 
        onClick={()=>{setColor("yellow")}}>Yellow</button>
        <button className=" bg-pink-400 text-black rounded-full border-black" onClick={()=>{setColor("pink")}}>Pink</button>
        <button className=" bg-purple-600 text-white rounded-full border-black" onClick={()=>{setColor("purple")}}>Purple</button>
        <button className=" bg-orange-400 text-black rounded-full border-black" onClick={()=>{setColor("orange")}}>Orange</button>
        <button className=" bg-white text-black rounded-full border-black" onClick={()=>{setColor("white")}}>White</button>
        <button className=" bg-black-600 text-white rounded-full border-black" onClick={()=>{setColor("black")}}>Black</button>
      </div>
      </div>
    
    </>
  )
}

export default App
