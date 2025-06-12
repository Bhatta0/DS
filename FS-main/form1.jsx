
import { useState } from "react";

function Op(){
    let [name,setName] = useState("")

    let hState=(e)=>{
        e.preventDefault()
        console.log("Submitted name: ",name)
        setName("")
    }
    return(
        <form onSubmit={hState}>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
            <input type="submit" value="submit"  />
        </form>
    )
}

export default Op