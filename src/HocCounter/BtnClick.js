import React from 'react';
import HocCommon from './HocCommon';

class BtnClick extends React.Component{
    render(){
        const { count, ClickCounter, name, Skill} = this.props
        return(
            <>
                <h1>{name} - {Skill}</h1>
                <button onClick={ClickCounter} >Button Click count: {count} </button>
            </>
        )
    }
}
export default HocCommon(BtnClick);