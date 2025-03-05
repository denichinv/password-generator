
import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
 
  const [len,setLen] = useState(8)
  const [numAllow,setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [pass,setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    document.getElementById("selected").style.color = 'orange'
    let pass = "";
    let strData = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(numAllow) strData += "0123456789"
    if (charAllow) strData += "!@#$%^&*=-_`~+:;<.>?/|,"
    for (let index = 0; index < len; index++) {
      let position = Math.floor(Math.random() * strData.length)
      pass += strData.charAt(position)
      
    }
    setPassword(pass)
    
  },[len,numAllow,charAllow,setPassword])

  const copyFunc = () => {
    
    
window.navigator.clipboard.writeText(pass)
document.getElementById("selected").style.color = "green"
  }
  useEffect(()=>{passwordGenerator()},[len,numAllow,charAllow,passwordGenerator])
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
    <div className="w-full max-w-(--breakpoint-md) font-mono mx-auto shadow-lg rounded-lg px-8 py-10 bg-gray-800 text-orange-500 min-h-[350px]">
      <h1 className="text-4xl font-bold text-center mb-4">Password Generator App</h1>
      <hr className="border-orange-500 mb-6" />
  
      {/* Password Display */}
      <div className="flex items-center shadow-md rounded-lg overflow-hidden bg-gray-700">
        <input
          type="text"
          value={pass}
          className="outline-hidden w-full py-3 px-4 bg-gray-700 text-2xl"
          placeholder="Generated password"
          readOnly
          id="selected"
        />
        <button
          className=" hover:bg-orange-600 text-orange text-3xl px-5 py-3"
          onClick={copyFunc}
        >
          Copy
        </button>
      </div>
  
      {/* Controls */}
      <div className="flex flex-col gap-8 mt-8">
        {/* Password Length Slider */}
        <div className="flex-initial">
          <input
            type="range"
            min={6}
            max={100}
            value={len}
            className="cursor-pointer w-full accent-orange-500"
            onChange={(e) => setLen(e.target.value)}
          />
          <span className="text-2xl">Length: {len}</span>
        </div>
  
        {/* Checkbox Options */}
        <div className="flex justify-center gap-20 text-2xl items-center">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numbInput"
              onChange={() => setNumAllow((prev) => !prev)}
              className="accent-orange-500 size-5"
            />
            <span>Numbers</span>
          </label>
  
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="charInput"
              onChange={() => setCharAllow((prev) => !prev)}
              className="accent-orange-500 size-5"
            />
            <span>Characters</span>
          </label>
        </div>
      </div>
    </div>
  </div>
  
    
  )
}

export default App
