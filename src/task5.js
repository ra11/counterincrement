import { useState } from "react"

const ShoppingList=()=>{
    const [list,newlist]=useState([])
    const [Addlist,Newlist]=useState("")
    function handleAdd(evt){
        evt.preventDefault()
        Newlist(evt.target.value)
    }
    function handleOnclickAdd(evt){
        evt.preventDefault()
        newlist([...list,Addlist])
        Newlist("")
    }
    return(
        <form>
            <input value={Addlist} onChange={handleAdd} placeholder="Enter you List"></input>
            <button onClick={handleOnclickAdd}>Add</button>
            <ul>
                <li>
                    {list.map(function(Addlist){
                        return <li>{Addlist}</li>
                    })}
                </li>
            </ul>
        </form>
    )
}
export default ShoppingList