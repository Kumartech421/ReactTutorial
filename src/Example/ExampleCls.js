import React from 'react';
import ExampleFn from './ExampleFn';

class ExampleCls extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            test : "check",
            test1 : "ch"
        };
        this.stateUpdate = this.stateUpdate.bind(this)
    }

    stateUpdate(){
        console.log('test');
        this.setState({
            test:"Button Update",
            test1: "1234567"
        })
    };
    render(){
        return (
            <>
                <ExampleFn />
                <p>This class Componet {this.props.name} and age {this.props.age}</p>
                <h1>{this.state.test}</h1>
                {/* <button onClick={this.stateUpdate} >Click Me</button> */}
                {/* <button onClick={this.stateUpdate.bind(this)} >Click Me</button> */}
                {/* <button onClick={this.stateUpdate} >Click Me</button> */}
                <button onClick={() => this.stateUpdate()} >Click Me</button>
            </>
        )
    }
}

export default ExampleCls;