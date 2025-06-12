import { useState } from "react";

const ContactF=()=>{
    const [name,setName] = useState("")
    const [phno,setPhno] = useState("")
    const [gender,setGender] = useState("")
    const [dob,setDOB] = useState("")
    const [email,setEmail] = useState("")
    const [msg,setMsg] = useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert(`Submitted:\n\nName:${name} \n\nPhone: ${phno} \n\nGender:${gender} \n\nBirthday: ${dob}\n\nmail:${email} \n\nMessage: ${msg}`)
    }

    return(
        <div className="feedback-main">
            <h1>Feedback Form</h1>
            <form onSubmit={handleSubmit} className="cform">
            <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required />
            <label htmlFor="tel">Phone</label>
            <input type="tel" value={phno} onChange={(e)=>setPhno(e.target.value)} required />
            <label htmlFor="gender">Gender</label>
            <div>
                <input type="radio" name="gender" value="Male" onChange={(e)=>setGender(e.target.value)} required />Male
                <input type="radio" name="gender" value="Female" onChange={(e)=>setGender(e.target.value)} required />Female
            </div>
            <label htmlFor="dob">Date Of Birth</label>
            <input type="date" value={dob} onChange={(e)=>setDOB(e.target.value)} required />
            <label htmlFor="email">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            <label htmlFor="message">Message </label>
            <textarea value={msg} onChange={(e)=>setMsg(e.target.value)} required />
            <input type="submit" />
        </form>
        </div>
    )
}

export default ContactF