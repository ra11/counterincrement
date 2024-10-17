import { useState } from "react"
import App from './app'

function Counter(){

    const [flag,setflag]=useState(false)

    const handlecounter=()=>{
        setflag(!flag)
    }

    return(
        <>{flag?<App/>:""}
        <button onClick={handlecounter}>Show Counter</button>
        </>
    )

}

export default Counter