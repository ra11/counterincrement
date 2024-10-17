import {useState} from "react"

function App(){

    const [count,setcount]=useState(0)
    const handleadd=()=>{
        setcount(count+1)
    }
    return(<>
    <h1>{count}</h1>
    <button onClick={handleadd}>Increment</button>
    </>)
}

export default App