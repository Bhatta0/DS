
import { Component } from "react";
import PropTypes from "prop-types"

class Pvalid extends Component{

    render(){
        return(
            <div className="main-table">
                <div className="table">
                    <b>Type</b>
                    <b>Value</b>
                    <b>Valid</b>
                </div>
                <div className="table">
                    <p>{typeof this.props.Parray}</p>
                    <p>{String(this.props.Parray)}</p>
                    <p>{
                        Array.isArray(this.props.Parray)? "true":"false"
                        }
                    </p>
                </div>
                <div className="table">
                    <p>{typeof(this.props.Pbool)}</p>
                    <p>{String(this.props.Pbool)}</p>
                    <p>{
                        typeof this.props.Pbool=="boolean"? "true":"false"
                        }
                    </p>
                </div>
                <div className="table">
                    <p>{typeof(this.props.Pstring)}</p>
                    <p>{String(this.props.Pstring)}</p>
                    <p>{
                        typeof this.props.Pstring=="string"? "true":"false"
                        }
                    </p>
                </div>
                <div className="table">
                    <p>{typeof(this.props.Pnum)}</p>
                    <p>{String(this.props.Pnum)}</p>
                    <p>{
                        typeof this.props.Pnum=="number"? "true":"false"
                        }
                    </p>
                </div>
                <div className="table">
                    <p>{typeof(this.props.Pfun)}</p>
                    <p>{this.props.Pfun()}</p>
                    <p>{
                        typeof this.props.Pfun=="function"? "true":"false"
                        }
                    </p>
                </div>
            </div>
        )
    }
}

Pvalid.propTypes={
    Parray:PropTypes.array.isRequired,
    Pbool:PropTypes.bool.isRequired,
    Pstring:PropTypes.string.isRequired,
    Pnum:PropTypes.number.isRequired,
    Pfun:PropTypes.func.isRequired,
}

Pvalid.defaultProps={
    Parray:[1,2,3,4],
    Pbool:false,
    Pstring:"GFG",
    Pnum:23,
    Pfun:()=> {return 50},
}
export default Pvalid