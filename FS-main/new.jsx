import React from "react";

// function Message()
// {
//     let style = {color: "red", backgroundColor:"blue"}
//     return(
//         <>
//             <h1 style={style}>This is the first class of FS</h1>;
//             <h2 class="hello">Hello</h2>
//         </>
//     );
// }
// export default Message;

const WeatherCard = () => {
    const cardStyle ={
        padding: '15px',
        borderRadius: '10px',
        backgroundColor: 'LightBlue',
        color: '#003366',
        width: '250px',
        margin: '10px center',
        textAlign:'center',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    };
    return(
        <div style={cardStyle}>
            <h2>Sunny</h2>
            <p>Temperature 28 degree C</p>
            <p>Humidity 40%</p>
        </div>
    );
};
export default WeatherCard