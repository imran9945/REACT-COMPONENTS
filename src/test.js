import React from 'react';
function Test(props){
    return(
        <div>
    <h1>THIS IS THE FIRST TEST APP TAUGHT BY {props.tname}</h1>
    <hr/>
    <h1>your name is {props.stname}</h1>
    
    </div>
    )
}
export default Test;