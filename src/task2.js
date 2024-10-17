import { useState } from "react"

function ShowText(){
var [showtxt,hidetxt]=useState(false)
    const handleclick=()=>{
        hidetxt(!showtxt)
    }
    return(<div>
        
        <button onClick={handleclick}>
        {showtxt ? 'Click to Hide' : 'Click to Show'}
        </button>
        {showtxt?<h1>Hello</h1>:""}
    </div>
    
    )
}

export default ShowText