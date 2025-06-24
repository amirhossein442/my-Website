import { useContext, useState } from "react"
import {ContextMe} from './App'
export const Profile=()=>{
    const {name,setName}= useContext(ContextMe)
    const [update,setUpdate]=useState({name:"", age:0})
    const [age,setAge]= useState(0)

    return (<div className='form'>
        <p>Name</p>
        <input onChange={(e)=>setName(e.target.value)}></input>
        <p>Age</p>
        <input type='number' onChange={(e)=>setAge(e.target.value)}></input>
        <button onClick={()=> setUpdate({name,age})}>Update</button>
        <h3>name: {update.name}<br/>age: {update.age}</h3>
    </div>)
}