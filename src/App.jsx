import { useState } from 'react'
import Data from './resource/countryData.json'
import './App.css'

function App() {
  const [search,setSearch] = useState('')
  const [visible,setVisible] = useState(true)
  
  function Escape(e){
    // console.log(e.keyCode)
    if (e.keyCode == 27){
      setVisible(!visible)
    console.log('Escape')
      
    }
  }
  
  function Search(e){
  setSearch(e.target.value)
  
  }  
// console.log(Data)
  return (

    <>
    <h1>Search</h1>
      <input type="text" onChange={(e)=>Search(e)} onKeyDown={(e)=>Escape(e)} placeholder='Search here'/>
      <div>
        {Data
        .filter((item)=>item.name.toLowerCase().includes(search))
        .map((items)=>( 
          <p key={items.code}>{visible?items.name:null}</p>
        ))}
      </div>
    </>
  )
}

export default App
