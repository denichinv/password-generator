
import { useState } from 'react'
import './App.css'

function App() {
 
  const [len,setLen] = useState(8)
  const [numAllow,setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [pass,setPassword] = useState("")

  return (
    <>
     <div className='text-5xl text-center'>Password Generator App</div>
    </>
  )
}

export default App
