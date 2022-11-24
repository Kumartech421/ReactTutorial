import React, { Component } from 'react';

class ChildComponet extends Component{
    constructor(props){
        super(props);
        this.state = {
            check : true,
            isActive : false
        }
    }
    render(){

        return (this.state.check || this.state.isActive) && <div>this is true condition</div>

        // return this.state.check ? (<div>this is true condition</div>) : (<h5>Else Part</h5>);


        // let message;
        // if(this.state.check){
        //     message = <div>this is true condition</div>
        // }else{
        //     message = <h5>Else Part</h5>
        // }
        // return <div>{message}</div>


        // if(this.state.check === true){
            return <button onClick={() => this.props.greetHandler('test')}>Click fn Btn</button>
        // } else {
        //     return <h1>No</h1>
        // }
    }
}
export default ChildComponet;