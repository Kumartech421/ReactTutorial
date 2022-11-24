import React from 'react';
import {useState} from 'react';

function ExampleFn(props){
    const [btnData, setBtnData] = useState();
    
    function changeBtnValue(){
        setBtnData('Btn Updated');
    };

    return(
        <>
            <h1>{btnData}</h1>
            <p>Fn component {props.skill} </p>
            <button onClick={changeBtnValue}>Click fn Btn</button>
        </>
    )
}

// const ExampleFn = () => {
//     return <p>Fn component</p>
// }

export default ExampleFn;