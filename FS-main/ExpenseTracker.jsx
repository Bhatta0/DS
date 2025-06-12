
import { useState } from "react";


const ExpeseTracker=()=>{
    const notvalidStyle={border:"2px solid red "}
    const notvalidtext={color:"#831f1f "}
    const validStyle={border:"2px solid green"}
    const [expName,setexpName]=useState("")
    const [amount,setamount]=useState(0)
    const [aValid,setaValid]=useState(false)
    const [Fsuccess,setFsuccess]=useState("")
    let validAmt=(e)=>{
        if(amount>0){
            setaValid(true)
        }
        else{
            setaValid(false)
        }
    }

    let hSubmit=(e)=>{
        e.preventDefault()
        if(aValid && expName.trim()){
            setFsuccess(true)
        }
        else{
            setFsuccess(false)
        }
    }
    return(
        <div className="expense-main"> 
            <h2>Expense Tracker</h2>
            {!Fsuccess?
                (
                    <form onSubmit={hSubmit} className="expense-form">
                        <input type="text" placeholder="Expense Name" onChange={(e)=>{setexpName(e.target.value)}} />
                        <input type="number" placeholder="Amount" style={aValid?(validStyle):(notvalidStyle)} onChange={(e)=>{setamount(e.target.value); validAmt(e.target.value)}} />
                        <button type="submit">Submit</button>
                    </form>
                )
                :(<div className="success">
                    <p>Expense Added</p>
                    <p>Expense Name: {expName}</p>
                    <p>Amount: ${amount}</p>
                    </div>)
            }
            {
                expName?<p></p>:<p style={notvalidtext}>Expense Name Required</p>
            }
        </div>
    )
}

export default ExpeseTracker