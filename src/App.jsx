
import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
 
  const [len,setLen] = useState(8)
  const [numAllow,setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [pass,setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
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
  }
  useEffect(()=>{passwordGenerator()},[len,numAllow,charAllow,passwordGenerator])
  return (
    <>
    <div className=" bg-gray-900 py-8">
     <div className='w-full font-mono max-w-screen-md mx-auto shadow-md rounded-lg px-4 my-8 py-7 bg-gray-800 text-orange-500'>
      <h1 className='mb-2'>Password Generator App</h1>
      <hr />
      <div className='flex shadow rounded-lg overflow-hidden m-4'>
        <input type="text" value={pass} className='outline-none w-full py-1 px-3' placeholder='password' readOnly/>
        <button className='-m-2 ' onClick={copyFunc} >Copy</button>
       
      </div>
      <div className='flex text-sm m-4 '>
        <div className='flex items-center gap-x-2 w-9/12'>
          <input type="range" min={6} max={100} value={len} className='cursor-pointer w-5/6' onChange={(e) => {setLen(e.target.value)}}  />
          <label className='mr-2'>Length:{len}</label>
        </div>
        <div className='flex text-sm gap-x-2'>
          <input type="checkbox" defaultChecked={numAllow}
          id='numbInput'
          onChange={() => {setNumAllow((prev)=> !prev)}}/>
          <label className="flex items-center" htmlFor="numbInput">Numbers</label> 
          <input type="checkbox" defaultChecked={charAllow}
          id='charInput'
          onChange={() => {setCharAllow((prev)=> !prev)}}/>
          <label className="flex items-center" htmlFor="charInput">Characters</label>
        </div >
     
      </div>
      </div>
      </div>
    </>
  )
}

export default App
