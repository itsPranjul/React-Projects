import { useCallback, useEffect, useRef, useState } from 'react';

function App() {

  const [length, setLengthAllow] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("")
  
  const passwrdRef = useRef(null)
  const passwordGenerate = useCallback(()=>{
    let pswrd=""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllow) str+="0123456789"
    if(charAllow) str+="~`!@#$%^&*()_+=[]?/"
    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pswrd += str.charAt(char)
    }

    setPassword(pswrd)

  },[length,numberAllow,charAllow,setPassword])
  
  const copyPassword = useCallback(()=>{
    passwrdRef.current?.select();
    //passwrdRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    passwordGenerate()
  },[length,numberAllow,charAllow,passwordGenerate])
  return (
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-blue-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
          type='text' 
          value={password} 
          className='outline-none w-full py-1 px-3' 
          placeholder='Password' 
          readOnly 
          ref={passwrdRef}
        />
        <button onClick={copyPassword} className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>
          Copy
        </button>

    </div>
    <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer pr-4'
            onChange={(e)=>{setLengthAllow(e.target.value)}}
          />
          <label>Lenght: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={numberAllow}
          id="nuberInput"
          onChange={()=>{
            setNumberAllow((prev)=>!prev);
          }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={charAllow}
          id="charInput"
          onChange={()=>{
            setCharAllow((prev)=>!prev);
          }}
          />
          <label htmlFor='charInput'>Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
