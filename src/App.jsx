
import { useCallback, useState } from 'react'
import './App.css'

function App() {
 
  const [len,setLen] = useState(8)
  const [numAllow,setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [pass,setPassword] = useState("")


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let strData = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(numAllow) strData + "0123456789"
    if (charAllow) strData + "!@#$%^&*=-_`~+:;<.>?/|,"
    for (let index = 0; index < len; index++) {
      let position = Math.floor(Math.random() * strData.length + 1)
      pass += strData.charAt(position)
      
    }
    setPassword(pass)
    
  },[len,numAllow,charAllow,setPassword])
  return (
    <>
     <div className='w-full max-w-screen-md mx-auto shadow-md rounded-lg px-4 my-8 py-7 bg-gray-800 text-orange-500'>
      <h1>Password Generator App</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={pass} className='outline-none w-full py-1 px-3' placeholder='password' readOnly/>
        <button className='ml-2' onClick={passwordGenerator}>Generate</button>
      </div>
      <div className='flex text-sm gap-x-2 '>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={100} value={len} className='cursor-pointer' onChange={(e) => {setLen(e.target.value)}}  />
          <label>Length: {len}</label>
        </div>
        <div className='flex text-sm gap-x-2 '>
          <input type="checkbox" defaultChecked={numAllow}
          id='numbInput'
          onChange={() => {setNumAllow((prev)=> !prev)}}/>
          <label htmlFor="numbInput">Numbers</label>
          <input type="checkbox" defaultChecked={charAllow}
          id='charInput'
          onChange={() => {setCharAllow((prev)=> !prev)}}/>
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
