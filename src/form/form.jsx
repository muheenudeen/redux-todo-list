import { useState } from "react"
import { useDispatch } from "react-redux"
import { submit } from "./formSlice"


function Form(){

const [name,setName]=useState("")
const dispatch=useDispatch()

    return(
        <>
        <input 
        type="text" 
        value={name}
        placeholder="enter data"
        onChange={(e)=>setName(e.target.value)}
        />

        <button onClick={()=>dispatch(submit({name}))}>submit</button>
        
        </>
    )
}

export default Form