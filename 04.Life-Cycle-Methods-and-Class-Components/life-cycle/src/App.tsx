import { Card } from './Class'

import './App.css'
import { useState } from 'react'

function App() {

  const [show,setShow] = useState(true)

  return (
    <div className="App">
      <button onClick={()=>setShow(!show)}>toggle</button>
     <h1>Card</h1>
     {show && <Card/>}
    </div>
  )
}

export default App
