import PropTypes from "prop-types" 


const Message=({name,age,present,marks})=>{
    return(
        <div className="dBox">
        <p>Name: {name} </p>
        <p>Age: {age} </p>
        {
            present ? <p className="present">Present For Class </p> : <p className="absent">Absent for class </p>
        }
        <p>Marks:{marks}</p>
        {
            marks>40? <p className="present">Pass</p> : <p className="absent">Fail</p>
        }
        </div>
    )
}

Message.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number,
    present:PropTypes.bool,
    marks:PropTypes.number
}

export default Message