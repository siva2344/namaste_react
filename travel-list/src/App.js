import './index.css'
import { useState } from 'react'
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App(){
const [state,setState]=useState(true)
  return <div className='app'>
  <Logo state={state}/>
  <div>
  <button onClick={()=>setState((e)=>!e)}>Test 123</button>
  </div>
  <Form />
  <PackedList/>
  <Stats/>

  </div>

}

function Form(){
  const [description, setDescription]=useState("")
  const [quantity, setQuantity]=useState(0)
  function handleSubmit(e){
      e.preventDefault();
      if(description){
        console.log(description)
       console.log(initialItems.push({description,quantity,packed:false,id: Date.now()}))
       setDescription("")
       setQuantity(1)
      }
  }
  return (
  <form className='add-form' onSubmit={handleSubmit}>
    <h3>What you need to pack for trip</h3>
    <select value={quantity} onChange={e=>setQuantity(Number(e.target.value))}>
      {Array.from({length:10},(_,i)=>{
        _=i+1
       return(<option value={_} key={_}>{_}</option>)
      })}
      </select>
    <input  type="text" placeholder="text..." value={description} onChange={(e)=>setDescription(e.target.value)}/>
    <button>add</button>
  </form>)
}
 function Logo({state}){
  console.log(state)
  return <div>
    <h1>🌴Far Away🧾</h1>
  </div>
 }
 function PackedList(){
   return(
    <div className="list">
      <ul >
        {initialItems.map(item=><Item item={item} key={item.id}/>)}
      </ul>
      </div>
   )
 }
 function Item({item}){
  return <li >
    <span style={!item.quantity?{textDecoration:'line-through'}:{}}>{item.quantity} {item.description}</span>
    <button>❌</button>
  </li>
 }
 function Stats(){
  console.log("this stats")
  return <footer className='stats'> X itmes have been packed, still x(x%) is remaining</footer>
 }