
// const Greeting = ()=>{
//     const hour=new Date().getHours()
//     let message
//     if(hour<12){
//         message="Good Morning Have a nice day"
//     }
//     else if(hour<18){
//         message="Good Afternoon"
//     }
//     else{
//         message="Good Evening Hope You Had Great Day"
//     }


//     return(
//         <div>
//             <p>{message}</p>
//         </div>
//     )
// }

import { Component } from "react"
import PropTypes from "prop-types"


class Greeting extends Component{
    
    render(){
        
let grade="F"
        if(this.props.marks>90){
            grade="O"
        }
        else if(this.props.marks>80){
            grade="A+"
        }
        else if(this.props.marks>70){
            grade="A"
        }
        else if(this.props.marks>60){
            grade="B"
        }
        else if(this.props.marks>50){
            grade="C"
        }
        else{
            grade="F"
        }

        return(
            <div className="result-main">
            <p>Name: {this.props.name}</p> 
            <p>Roll: {this.props.roll}</p> 
            <p>
                Marks: {this.props.marks}
            </p>
            <p>
                Grade: {grade}
            </p>
            <p>Result: 
            {
             this.props.result ? <span className="pass"> PASS</span> : <span className="fail">FAIL</span>
            }
            </p> 
            </div>
        )
    }
}


Greeting.propTypes={
    name:PropTypes.string.isRequired,
    roll:PropTypes.number.isRequired,
    result:PropTypes.bool
}


export default Greeting