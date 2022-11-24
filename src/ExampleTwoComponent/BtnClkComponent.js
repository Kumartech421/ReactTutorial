import React, { Component } from 'react';
import CommonHoc from './CommonHoc';

class BtnClkComponent extends Component{
    render(){
        const {count, increament, name} = this.props;
        return(
            <>
                <h1>{name}</h1>
                <button onClick={increament}>Btn Click Counter component counts:{count} </button>
            </>
        )
    }
}

export default CommonHoc(BtnClkComponent);