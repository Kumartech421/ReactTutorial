import React from 'react';
import CommonHoc from './CommonHoc';

class HvrMouseComponent extends React.Component{
    render(){
        const {count, increament, decrement, name} = this.props;
        return(
            <h1 onMouseOver={decrement}>This is the MouseHover Componet counts:{count} {name} </h1>
        )
    }
}

export default CommonHoc(HvrMouseComponent);