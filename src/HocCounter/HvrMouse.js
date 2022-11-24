import { Button } from 'bootstrap';
import React from 'react';
import HocCommon from './HocCommon';

class HvrClick extends React.Component{
    render(){
        const {count, HvrCounter, name, Skill} = this.props
        return(
            <>
                <h1>{name} - {Skill}</h1>
                <h1 onMouseOver={HvrCounter}>Hover COunt : {count}</h1>
            </>
        )
    }
}
export default HocCommon(HvrClick);