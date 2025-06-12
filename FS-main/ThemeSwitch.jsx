
import { useState } from "react";

const ThemeSwitch = () =>{
    const [theme,setTheme] = useState("light")

    return(
        <div className="theme-main">
            <h2>Select Theme</h2>
            <div>
                <input type="radio" name="theme" id="" onChange={()=>setTheme("light")}/>Light Mode
            </div>
            <div>
                <input type="radio" onChange={()=>setTheme("dark")} name="theme" id="" />Dark Mode
            </div>

            <div className={theme==='light'?'light preview':'dark preview'}>
                <p>This is {theme==='light'?'Light' : 'Dark'} Mode</p>
            </div>
        </div>
    )
}


export default ThemeSwitch