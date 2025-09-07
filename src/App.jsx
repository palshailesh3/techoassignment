import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState([1,2,3,4])

  const handleChange = ()=>{ 
   setCount(prev => prev.map((elm,index) => index==1 ? 8 : elm))
  }
 

  return (
    <>
      <button onClick={handleChange}>change</button>
      <div>
       {count}
      </div>
    </>
  )
}

export default App
