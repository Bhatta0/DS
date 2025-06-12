import { useState } from "react"

const BtnMsg = ()=>{

    let [counter,setCounter] = useState(0)
    let incr=()=>setCounter(counter+1)
    let decr=()=>setCounter(counter-1)
    let reset=()=>setCounter(0)


    // let msg=()=>{
    //     alert("CLICKED THE BUTTON")
    // }

    return(
        <div className="counter-main">
            <h4>Count: {counter}</h4>
            <button onClick={incr}>Increment</button>
            <button onClick={decr}>Decrement</button>
            <button onClick={reset}>RESET</button>
        </div>
    )
}

export default BtnMsg