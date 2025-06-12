import { useState } from "react";

const LoginForm=()=>{
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    const [show,setShow] = useState(false)

    const toggleShow=()=>{setShow(!show)}
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert(`Login Success`)
    }

    return(
        <div className="feedback-main">
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit} className="cform">
            <label htmlFor="email">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            <label htmlFor="Password">Password </label>
            <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} required />
            <button value={show?"Show":"hide"} onClick={toggleShow}>{show?"Show":"hide"} </button>
            <input type="submit" />
        </form>
        </div>
    )
}

export default LoginForm