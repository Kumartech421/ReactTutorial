import React from 'react';
import ChildComponet from './childComponent';

class ParentComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            test : "check",
            name: 'ranjith'
        };
        this.greetParent = this.greetParent.bind(this);
    }
    greetParent(name){
        this.setState({name:name});
    }
    render(){
        return (
            <>
               <ChildComponet name="xyz" greetHandler={this.greetParent}/>
            </>
        )
    }
}

export default ParentComponent;