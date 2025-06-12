
import { useState } from "react";

const UserStatusSwitcher =()=>{

    const onlineStyle={ color:'green'}
    const offlineStyle={ color:'red'}

    let [uState,setuState]=useState("Offline")
    let [uStateTF,setuStateTF]=useState(false)

    const hState=()=>{
        if(!uStateTF){
        setuStateTF(true)
        setuState("Online")
        }
        else{
        setuStateTF(false)
        setuState("Offline")
        }
    }


    return(
        <div className="Ustate-main">
            {!uStateTF?(<><p style={offlineStyle}>{uState}</p><button  onClick={hState}>Go online</button></>)
            :(<><p style={onlineStyle}>{uState}</p><button onClick={hState}>Go Offline</button></>)}
        </div>
    )
}

export default UserStatusSwitcher