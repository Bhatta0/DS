
import { useState } from "react";

const Feedback =()=>{

    const [rate,setrate]= useState("")
    const [rateSubmit,setrateSubmit]= useState(false)

    const hSubmit=()=>{
        setrateSubmit(true)
    }


    return(
        <div className="Feed-main">
            {!rateSubmit?
                (<>
                    <form onSubmit={hSubmit} className="Feed-form">
                        <p>How would you rate our tech support?</p>
                        <p>
                            <button type="submit" onClick={()=>setrate("Good")}>Good</button>
                            <button  type="submit" onClick={()=>setrate("Nuetral")}>Nuetral</button>
                            <button  type="submit" onClick={()=>setrate("Poor")}>Poor</button>
                        </p>
                    </form>
                </>)
                :<>
                    <p>Your Rating: {rate}</p>
                    <p>Thank For Rating Us</p>
                </>
            }
        </div>
    )
}

export default Feedback