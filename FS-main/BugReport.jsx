
import { useState } from "react";

const TechBugReportForm = () =>{
    const [bugName,setbugName]=useState("")
    const [bugDesc,setbugDesc]=useState("")
    const [bugMod,setbugMod]=useState("")
    const [fSubmit,setfSubmit] = useState(false)
    
    const notvalidtext ={color:"red"}
    const hSubmit=(e)=>{
        e.preventDefault()
        if(bugName.trim() && bugDesc.trim() && bugMod){
            setfSubmit(true)
        }
    }
    return(
        <div className="bug-main">
           {!fSubmit?(
             <form action="" className="bug-form" onSubmit={hSubmit}>
                <div>
                    <label htmlFor="bugname">Bug Name</label>
                    <input type="text" onChange={(e)=>{setbugName(e.target.value)}} />
                    {bugName.trim()?<p></p>:<p style={notvalidtext}>Bug Name Required</p>}
                </div>
                <div>
                    <label htmlFor="bugdesc">Bug Description</label>
                    <textarea onChange={(e)=>{setbugDesc(e.target.value)}} />
                    {bugDesc.trim()?<p></p>:<p style={notvalidtext}>Bug Description Required</p>}
                </div>
                <div>
                    <label htmlFor="bugmodule">Bug Module</label>
                    <select name="" id="" onChange={(e)=>{setbugMod(e.target.value)}}>
                        <option value="">Select A Module</option>
                        <option value="UI">UI</option>
                        <option value="API">API</option>
                        <option value="Database">Database</option>
                        <option value="Network">Network</option>
                    </select>
                    {bugMod?<p></p>:<p style={notvalidtext}>Please Select a module</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
           )
           :<div>
            <p>Bug Reported Successfully</p>
            <p>Bug Name: {bugName}</p>
            <p>Bug Description: {bugDesc}</p>
            <p>Bug Module: {bugMod}</p>
           </div>
           }
        </div>
    )
}


export default TechBugReportForm