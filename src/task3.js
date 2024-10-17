import { useState } from "react"


function GetInput(){
    const[oldgreet,setgreet]=useState("")
    const handleChange=(evt)=>{
        setgreet(evt.target.value)
    }

    return(<div>
        <input type="text" placeholder="Enter Name" value={oldgreet} onChange={handleChange}/> 
         <h1>Name : {oldgreet}</h1>
      </div>)

}

export default GetInput