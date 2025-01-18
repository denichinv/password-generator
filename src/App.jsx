
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
      pass = strData.charAt(position)
      
    }
    setPassword(pass)
    
  },[len,numAllow,charAllow,setPassword])
  return (
    <>
     <div className='w-full max-w-screen-md mx-auto shadow-md rounded-lg px-4 my-8 py-7 bg-gray-800 text-orange-500'>
      <h1>Password Generator App</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={pass} className='outline-none w-full py-1 px-3' placeholder='password' readOnly/>
      </div>
      </div>
    </>
  )
}

export default App
