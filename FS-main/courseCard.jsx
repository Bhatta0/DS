import "./Card.css"
import React from "react";
import PropTypes from "prop-types"
class CourseCard extends React.Component{
    render(){
        return(
        <div className="Card">
            <p>Course title: {this.props.courseTitle}</p>
            <p>Duration: {this.props.cDuration}</p>
            <p>Instructor: {this.props.cName}</p>
        </div>
        )
    }
}

CourseCard.propTypes={
    courseTitle:PropTypes.string.isRequired,
    cDuration:PropTypes.number.isRequired,
    cName:PropTypes.string.isRequired  
}
export default CourseCard