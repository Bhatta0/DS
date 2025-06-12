
import { useState } from "react";

const NewsletterSignup =()=>{

    const [email,setEmail]= useState("")
    const [name,setName] = useState("")
    const [userSubmit,setuserSubmit] = useState(false)

    const hSubmit=(e)=>{
        // e.preventDefault()
        setuserSubmit(true)
    }

    return(
        <div className="News-main">
            {!userSubmit?(
                <><h4>Signup for our Newsletter </h4>
                <form onSubmit={hSubmit} className="news-form">
                    <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} id="" placeholder="Full Name" required />
                    <input type="email" className="input" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} id="" required />
                    <input type="submit" value="Subscribe" />
                </form></>
                )
                :
                (<b>Thank You For Subscribing {name}</b>)
            }
        </div>
    )
}


export default NewsletterSignup