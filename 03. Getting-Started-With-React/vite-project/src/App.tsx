import React,{useState} from 'react';
import {Card,AgeDetector} from './components/index'
import './App.css'

const arr  = [
  {name : "Reshad", id : 1},
  {name : "Abdul", id : 2},
  {name : "Tolga", id : 3},
  {name : "Fatih", id : 4},
  {name : "Yunis", id : 5},
  {name : "Celal", id : 6},
];

function App() {

  const [array,setArray] = useState(arr);
  const [asc,setAsc] = useState(true);

  return (
    <div className="App">
      <button onClick={()=>{
        setAsc(!asc)
      }} style={{marginBottom:"10px"}}>
      {asc ? "Ascending" : "Descending"}
      </button>
      {array.sort((a,b)=> asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
      .map((item,index)=>(
        <Card name={item.name} key={index}/>
      ))}
      
      <AgeDetector name='Reshad' birthYear={2004}/>

    </div>
  )
}

export default App
